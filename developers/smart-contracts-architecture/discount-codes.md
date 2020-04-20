# Discount Codes

We created a contract that allows you to add discount codes to your lock. For example, enter the code `joe rogan` for 50% off.

The contract is deployed here and may be leveraged by all v7 locks \(i.e. you do not need to deploy your own discount code contract\):
 - Mainnet address: TBD
 - Rinkeby address: TBD

## How it works

A discount code is simply a secret. The secret can be anything but is most commonly a string.

The code is hashed to create a private key. Given a private key, we can generate an Ethereum address. We call this the `codeAccount` and we can store the `codeAccount.address` \(or `codeAddress`\) publicly without risking exposing the secret itself on-chain.

In order to purchase with a discount applied, we generate a signature with `codeAccount.sign(sha(keyOwner))` where `keyOwner` is the address of the account that's purchasing a key.

When issuing the purchase transaction, the signature is included in the `bytes _data` field. The lock forwards this information to the discount code contract for confirmation. If the signature is missing or incorrect then the user is charged full price.

## Configuration

There are a couple steps required in order to start offering discount codes on your lock.

### Register the hook

The discount code contract is written as a `keyPurchaseHook`. The lock manager needs to configure the lock's hook to point to the discount code contract. By default there are none set in order to remain flexible so lock managers can choose which features they would like to add to their lock.

To register, call the following function with the discount code address above:

```
function setEventHooks(
  address _onKeyPurchaseHook,
  address _onKeyCancelHook
)
```

You can set the `_onKeyCancelHook` to `0x0000000000000000000000000000000000000000` if you don't have a use case for that. Additional you can de-register the hook anytime by setting both params to 0.

The easiest way to do this today is on Etherscan's TODO

### Add discount codes

Once the discount code contract has been registered you can start adding codes.

First we need to generate the `codeAddress`. This step is required so that we don't publish the code directly as all information on Ethereum is public and we don't want user's to simply look at the transaction history in order to discover a discount anyone could use.

To generate the `codeAddress` the following steps are recommended. This process is not yet integrated onto our dashboard so they will need to be performed manually.

 1. Sanitize the input for ease of use. For example, if the code is "joe rogan" we want to be flexible on how that is written by the end user: "Joe Rogan" and "joerogan" should also be accepted. We recommend you remove whitespace (and maybe underscores as well) and lower case the input before proceeding to the next step.
 2. Generate the private key from the sanitized input. Include your lock's address so that the same discount code may be used by multiple different locks without making it easy for people to discover that the same code works elsewhere. For this we recommend the following:

```
const codePrivateKey = web3.utils.keccak256(
  web3.eth.abi.encodeParameters(
    ['address', 'bytes32'],
    [lock.address, web3.utils.keccak256(discountCode)]
  )
)
```

 3. Generate the account representing the discount code with the following:

```
const codeAccount = web3.eth.accounts.privateKeyToAccount(codePrivateKey)
```

 4. Get the address for the `codeAccount` which is what we will store on-chain:

```
const codeAddress = codeAccount.address
```

 5. Call `addCodes` on the discount code contract from the lock manager's account. You can use Etherscan's `Write Contract` page to make the call (TODO link to the page). There are 3 parameters:
    - `_lock` is the address of the lock this discount applies to. You can copy this from the [Unlock dashboard](https://app.unlock-protocol.com/dashboard/).
    - `_codeAddresses` is an array of addresses. If you are only adding a single discount code then it can be populated like so: `[0x1234...]`
    - `_discountBasisPoints` is also an array. The discounts are represented in basis points which means 100 represents 1%. This allows you to be more precise on discounts, e.g. if you wanted to offer 12.50% off. The order should align with the `_codeAddresses` so that if the first discount code is 15% off and the second is 50% off you can enter the following: `[1500, 5000]`

To remove a code in the future, just call `addCodes` again and set the discount to 0.

## Frontend Integration

- Generating the signature

       * @notice Returns the price per key after considering the code entered.
   * If the code is missing or incorrect, the lock's normal keyPrice will be used.
   * @param _recipient the account which will be granted a key
   * @param _signature the signature created from the code's private key, signing
   * the message `"\x19Ethereum Signed Message:\n32" + keccak256(_recipient)`.
   * This is passed through the lock by setting the `_data` field on purchase.

When issuing a transaction to purchase, the signature created by the `codeAccount` is included in the `bytes _data` field. The lock forwards this information to the CodeRequiredHook for confirmation. If the signature is missing or not correct then the entire transaction reverts.

## Security

Including the `keyOwner` ensures that another account cannot simply replay the same transaction to purchase for themselves.

Obviously someone could Tweet the code, spreading it future than intended.  but this is also true for discount code implementation examples in general \(such as the podcast example I gave\). And the code can be changed at anytime.


If you have a requirement for discount codes which is not addressed here (e.g. single use codes), reach out and let's discuss.