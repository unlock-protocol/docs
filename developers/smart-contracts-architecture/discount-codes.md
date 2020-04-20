# Discount Codes

We created a contract that allows you to add discount codes to your lock. For example, enter the code `joe rogan` for 50% off.

The contract is deployed here and may be leveraged by all v7 locks \(i.e. you do not need to deploy your own discount code contract\):
 - Mainnet address: [0x3c895c794be4dc403f8802ef6d95aa1de3cbb04c](https://etherscan.io/address/0x3c895c794be4dc403f8802ef6d95aa1de3cbb04c)
 - Rinkeby address: [0x13738ae895f1e35eedf7f3227109567a5ce40eab](https://rinkeby.etherscan.io/address/0x13738ae895f1e35eedf7f3227109567a5ce40eab)

## How it works

A discount code is simply a secret. The secret can be anything but is most commonly a string.

The code is hashed to create a private key. Given a private key, we can generate an Ethereum address. We call this the `codeAccount` and we can store the `codeAccount.address` \(or `codeAddress`\) publicly without exposing the secret itself on-chain.

In order to purchase with a discount applied, we generate a signature with `codeAccount.sign(sha(keyOwner))` where `keyOwner` is the address of the account that's purchasing a key.

When issuing the purchase transaction, the signature is included in the `bytes _data` field. The lock forwards this information to the discount code contract for confirmation. If the signature is missing or incorrect then the user is charged full price.

## Configuration

There are a couple steps required in order to start offering discount codes on your lock.

### Register the hook

The discount code contract is written as a `keyPurchaseHook`. The lock manager needs to configure the lock's hook to point to the discount code contract. By default there are none set in order to remain flexible so lock managers can choose which features they would like to add to their lock.

To register, call the following function with the discount code address above:

```javascript
function setEventHooks(
  address _onKeyPurchaseHook,
  address _onKeyCancelHook
)
```

You can set the `_onKeyCancelHook` to `0x0000000000000000000000000000000000000000` if you don't have a use case for that. Additional you can de-register the hook anytime by setting both params to 0.

The easiest way to do this today is on [Etherscan's Write Contract page](https://etherscan.io/address/0x6E4B1990EBc79040E369Df2Eb8BE16bBB709B0d0#writeContract) \(but replace the address with your lock's address\).

### Add discount codes

Once the discount code contract has been registered you can start adding codes.

First we need to generate the `codeAddress`. This step is required so that we don't publish the code directly as all information on Ethereum is public and we don't want user's to simply look at the transaction history in order to discover a discount that anyone could use.

To generate the `codeAddress` the following steps are recommended. This process is not yet integrated onto our dashboard so they will need to be performed manually.

 1. Sanitize the input for ease of use. For example, if the code is "joe rogan" we want to be flexible on how that is written by the end user: "Joe Rogan" and "joerogan" should also be accepted. We recommend you remove whitespace \(and maybe underscores as well\) and lower case the input before proceeding to the next step.
 2. Generate the private key from the sanitized input. Include your lock's address so that the same discount code may be used by multiple different locks without making it easy for people to discover that the same code works elsewhere. For this we recommend the following:

    ```javascript
    const codePrivateKey = web3.utils.keccak256(
      web3.eth.abi.encodeParameters(
        ['address', 'bytes32'],
        [lock.address, web3.utils.keccak256(discountCode)]
      )
    )
    ```

 3. Generate the account representing the discount code with the following:

    ```javascript
    const codeAccount = web3.eth.accounts.privateKeyToAccount(codePrivateKey)
    ```

 4. Get the address for the `codeAccount` which is what we will store on-chain:

    ```javascript
    const codeAddress = codeAccount.address
    ```

 5. Call `addCodes` on the discount code contract from the lock manager's account. You can use [Etherscan's Write Contract page](https://etherscan.io/address/0x3c895c794be4dc403f8802ef6d95aa1de3cbb04c#writeContract) to make the call. There are 3 parameters:
    - `_lock` is the address of the lock that this discount applies to. You can copy this from the [Unlock dashboard](https://app.unlock-protocol.com/dashboard/).
    - `_codeAddresses` is an array of addresses. If you are only adding a single discount code then it can be populated like so: `[0x1234...]`
    - `_discountBasisPoints` is also an array. The discounts are represented in basis points which means 100 represents 1%. This allows you to be more precise on discounts, e.g. if you wanted to offer 12.42% off. The order should align with the `_codeAddresses` so that if the first discount code is 15% off and the second is 50% off you can enter the following: `[1500, 5000]`

To remove a code in the future, just call `addCodes` again and set the discount for that `codeAddress` to 0.

## Frontend Integration

Discount codes have not yet been integrated into the frontend provided by Unlock-Protocol. However anyone can make their own frontend experience.

In order to add support for discount codes, there are a few steps required:

 1. Add an input box allowing end users to enter a discount code if they have one.
 2. Sanitize the input and generate the `codeAccount` using the same approach that we used when adding the discount code originally \(steps 1-3\).
 3. Generate the message to sign by hashing the address of the account purchasing a key as follows:

    ```javascript
    const messageToSign = web3.utils.keccak256(
      web3.eth.abi.encodeParameters(['address'], [keyBuyer])
    )
    ```

 4. Then sign that message:

    ```javascript
    const signature = (await codeAccount.sign(messageToSign)).signature
    ```

    This function will sign the message as follows `"\x19Ethereum Signed Message:\n32" + messageToSign`.
    &nbsp;

 5. To confirm the discount code and to display the correct price for this purchase, use the following function:

    ```javascript
    const purchasePrice = await lock.purchasePriceFor(
      keyBuyer,
      '0x0000000000000000000000000000000000000000', // Referrer, n/a here
      signature,
      {
        from: keyBuyer,
      }
    )
    ```

 6. Update the `purchase` call to use the `purchasePrice` calculated above and include the signature if the user has entered a discount code. For example:

    ```javascript
    await lock.purchase(
      purchasePrice,
      keyBuyer,
      '0x0000000000000000000000000000000000000000', // Referrer, n/a here
      signature,
      {
        value: purchasePrice,
        from: keyBuyer,
      }
    )
    ```

If the code is missing or incorrect, the lock's normal `keyPrice` will be used.

## Security

How secure this solution is depends on the discount code you select. For common use cases such as the 'joe rogan' example we have been working with, it would not be difficult for someone to guess and check to find that discount.

If security is a concern, you could generate discount codes that look a bit more like an Amazon gift card as they have enough entropy that users would not be able to brute force it without incurring significant cost.

Even if the code you select has enough randomness to it, anyone who does know the code could post it publicly for others to use as well.

The `keyOwner` is included in the signature to ensure that another account cannot simply replay the same transaction `_data` field to purchase with a discount for themselves.

Some of the process described above is our recommendations. The contract itself will not enforce these best practices on you if you choose to use a different strategy, specifically:

 - Sanitizing the input reduces entropy but makes for a better user experience.
 - How the `codeAccount` itself is generated is flexible, for example including the lock's address in the private key prevents users from discovering that a discount code can also be used on another lock.

-------

If you have a requirement for discount codes which is not addressed here \(e.g. single use codes\), reach out and let's discuss.