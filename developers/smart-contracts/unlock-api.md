# Unlock API

## Public Storage Fields

These represent data which is persisted on the network, and which are accessible via auto-created getter functions. In order to read this data you must call the function from your code. Here's an example of checking the `unlockVersion` field using JavaScript in a test:

```javascript
it('getVersion', async () => {
    assert.equal(
      (await unlock.unlockVersion.call()).toString(),
      6
    )
  })
```

### **`grossNetworkProduct` \(**_**uint**_ **\)**

The total sales of all locks to date, in ETH.

### **`totalDiscountGranted` \(**_**uint**_ **\)**

TODO

### `LockBalances` **\( mapping** \) 

Address =&gt; Struct `LockBalances`

## Structs

### LockBalances

LockBalances is a struct which encapsulate data relative to an individual lock deployed through the smart contract. Keeping these balances will help us assess how many discount tokens a given lock can yield optimally.

It has the following fields:

* `deployed` \(boolean\) : A boolean to indicate that a lock has been deployed \(this is required because both default values for `tokenSales` and `yieldedDiscountTokens` are 0 which is the same for non deployed locks\).
* `totalSales` \(unsigned integer\) : An unsigned integer to keep track of the total sales for this lock in WEI.
* `yieldedDiscountTokens` \(unsigned integer\): An unsigned integer to keep track of the total number of discount tokens yielded through that lock.

### **`globalBaseTokenURI` \(** returns ****_**string**_ **\)** 

URI used by locks where the owner has not set a custom base URI

### **`globalTokenSymbol` \(** returns _**string**_ **\)** 

Token symbol used by locks where the owner has not set a custom symbol

### **`publicLockAddress` \(** returns _**address**_ **\)** 

The address of the public lock template, used when `createLock` is called

### **`uniswapExchanges` \(** returns _**mapping**_ ****\)  

Token address =&gt; exchange contract address for supported tokens

### **`Owner`** \( returns _address_\)

The owner of the Unlock Discount Token smart contract.

## Unlock Interface

In addition to this resource, you can refer to the npm module for the version you want to build on. It contains the interface for Unlock, with description of the parameters, return values, etc. For example, to refer to the interface for Unlock V6 you would look [here](https://github.com/unlock-protocol/unlock/blob/master/smart-contracts/published-npm-modules/V1.3/IUnlockV6.sol).

## **Modifiers**

We use modifiers to restrict calls to certain functions.

### **`onlyFromDeployedLock()`**

 this method can only be invoked by a previously deployed lock.

## Public Methods

### `createLock(...)`

**Description**: This is the main point of interaction with Unlock.sol, and is used to create and deploy new Lock contracts. The rest of the methods in Unlock are guarded by either the `onlyOwner` modifier, or the `onlyFromDeployedLock` modifier, making them unavailable for public use.

**parameters**: `uint _expirationDuration`, `address _tokenAddress`, `uint _keyPrice`, `uint _maxNumberOfKeys`, `string memory _lockName`, `bytes12 _salt`

