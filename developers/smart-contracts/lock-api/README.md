# Lock Contract

## Overview

The Lock Smart Contract has multiple capabilities:

* _Administrative_: these are the functions which change ownership of the lock or change the address of the Unlock Protocol smart contract, as well as the maximum number of keys, their release mechanism \(public, pre-validated, private\) or their expiration \(period, date or interval\) and of course their price \(including the mechanism used to set the price: fixed or variable\). Finally, there is a method to withdraw funds from the lock contract itself.
* _Transferring key ownership_: keys can be purchased from the lock smart contract itself or from another user who purchased one previously. Another element is that keys can be purchased on behalf of somebody else \(this is important because this lets somebody pay gas fees on behalf of somebody else\)
* _Changing key attributes_: the keys have an expiration date which can be changed \(for an earlier date by the lock owner\) as well as data attributes which can be changed to something else.

## Structs

###  Key

The key is a struct which encapsulate data relative to an individual key. It has the following fields:

* **`tokenId`** **\(** _**uint**_ **\)**: A unique identifier for each key on a given lock.
* **`expirationTimestamp`** __ **\(** _**uint**_ **\)**: the timestamp at which the key is not considered valid anymore. The lock owner only can change this value, effectively expiring individual keys.

## Public Storage Fields



### `unlockProtocol` **\(** returns _**address**_ **\)**

This is the address of the Unlock Protocol Contract. It is set upon creation of the Lock and will be used to invoke the Lock when recording key purchases and more.

### **`owner`** \( returns _address_ \)

The owner of the lock contract.

### `owners` \( returns _array_ \)

Addresses of key owners are stored in an array.

### `beneficiary` \( returns _address_ \)

The account which will receive funds on withdrawal.

### `BASIS_POINTS_DEN` \( returns _uint_ \)

The denominator component for values specified in basis points.

### `expirationDuration` \( returns _uint_ \)

Duration in seconds for which the keys are valid after creation.

### `keyPrice` \( returns _uint_ \)

price in wei of the next key.

### `maxNumberOfKeys` \( returns _uint_ \)

Max number of keys sold.

### `tokenAddress` \( returns _address_ \)

The token-type that this Lock is priced in. If 0, then use ETH, else this is an ERC20 token address.

### `isAlive` \( returns _bool_ \)

Used to disable payable functions when deprecating an old lock

### `IERC1820Registry` \( returns _IERC1820Registry_ \)

### `keySoldInterfaceId` \( returns _bytes32_ \)

keccak256\("IUnlockEventHooks\_keySold"\)

### `keyCancelInterfaceId` \( returns _bytes32_ \)

keccak256\("IUnlockEventHooks\_keyCancel"\)

### `name` \( returns _string_ \)

A descriptive name for a collection of NFTs in this contract. Defaults to "Unlock-Protocol" but is settable by lock owner.

### `keyOwnerToNonce` \( returns _uint_ \) 

A mapping of type `address => uint` which stores a nonce per user to use for signed messages.

### `refundPenaltyBasisPoints` \( returns  _uint_ \)

CancelAndRefund will return funds based on time remaining minus this penalty. // This is calculated as `proRatedRefund * refundPenaltyBasisPoints / BASIS_POINTS_DEN`.

### `freeTrialLength` \( returns _uint_ \)

### `CANCEL_TYPEHASH` \( returns _bytes32_ \)

The typehash per the EIP-712 standard \(keccak256\('cancelAndRefundFor\(address \_keyOwner\)'\)\)

### `transferFeeBasisPoints` \( returns _uint_ \)

The fee relative to keyPrice to charge when transfering a Key to another account. This is calculated as `keyPrice * transferFeeBasisPoints / BASIS_POINTS_DEN`.



## Modifiers

### `initializer()`

Only allows a function to be called once.

### `onlyOwner()`

Throws if called by any account other than the lock owner.

### `onlyIfAlive()`

Only allow usage when contract is Alive.

### `onlyLockManager()`

Only allows usage by a caller with the LockManager role.

### `notSoldOut()`

Ensure that the Lock has not sold all of its keys.

### `onlyOwnerOrBeneficiary()`

Throws if called by any account other than the `owner` or the `beneficiary`.

### `ownsOrHasOwnedKey()`

Ensures that an owner currently owns or has owned a key in the past.

### `hasValidKey()`

Ensures that an owner has a valid key.

### `isKey()`

Ensures that a key has an owner..

### `onlyKeyOwner()`

Ensure that the caller owns the key.

### `onlyKeyOwnerOrApproved()`

Ensure that the caller has a key or that the caller has been approved for ownership of that key

### `consumeOffChainApproval(...)`

Validates an off-chain approval signature. If valid the nonce is consumed, else revert.

## Public Methods

### `publicLockVersion()` \( returns _uint \)_

The version number of the current implementation on this network

### `withdraw(...)` 

Called by owner to withdraw all funds from the lock and send them to the `beneficiary`

**Parameters**:  `address _tokenAddress`, `uint _amount`

### `updateKeyPricing(...)`

A function which lets the owner of the lock change the pricing for future purchases. This consists of 2 parts: The token address and the price in the given token. In order to set the token to ETH, use 0 for the token Address.

**Parameters**: `uint _keyPrice`, `address _tokenAddress`

### `updateBeneficiary(...)`

A function which lets the owner of the lock update the beneficiary account, which receives funds on withdrawal.

**Parameters:** address **`_beneficiary`**

### `getTransferFee(...) ( returns uint )`

Determines how much of a fee a key owner would need to pay in order to transfer the key to another account.  This is pro-rated so the fee goes down over time

**Parameters:** address **`owner`**_,_ uint **`_time`**

### `updateTransferFee(...)`

Allow the Lock owner to change the transfer fee.

**Parameters:** uint **`_transferFeeBasisPoints`**

### `totalSupply()`**\( returns** _**uint**_ **\)**

Returns the `_totalSupply` data field

### `balanceOf(...)`\( returns _uint **`balance`**\)_

The number of NFTs owned by `_owner`, either 0 or 1.. 

**Parameters:** address **`_owner`**

### **`ownerOf(...)`  \(** returns address **`owner`\)**

Returns the owner of the NFT specified by `tokenId`.

**Parameters:** uint256 `tokenId`

### **`approve(...)`**

This approves \_approved to get ownership of \_tokenId.

**Parameters:** address **`_approved`**, uint256 **`tokenId`**

### **`getApproved(...)` \( returns address \)**

Will return the approved recipient for a key, if any. 

**Parameters:** uint256 **`tokenId`**

### **`setApprovalForAll(...)`**

Sets or unsets the approval of a given operator**.** An operator is allowed to transfer all tokens of the sender on their behalf

**Parameters:** address **`_to`**, bool **`_approved`**

### **`isApprovedForAll(...)`**

Tells whether an operator is approved by a given owner

**Parameters:** address **`owner`**,  address **`operator`**

### **`transferFrom(...)`**

**Parameters:** address **`from`**, address **`to`**, uint256 **`tokenId`**

### **`safeTransferFrom(...)`**

Transfers the ownership of an NFT from one address to another address. This works identically to the other function with an extra data parameter, ****except this function just sets data to ''.

**Parameters:** address **`from`**, address **`to`**, uint256 **`tokenId`**

### `safeTransferFrom(...)` 

**Parameters:** address **`_from`**, address **`_to`**, uint256 **`_tokenId,`** bytes memory **`_data`**

Transfers the ownership of an NFT from one address to another address. When transfer is complete, this functions checks if `_to` is a smart contract \(code size &gt; 0\). If so, it calls `onERC721Received` on `_to` and throws if the return value is not`bytes4(keccak256('onERC721Received(address,address,uint,bytes)'))`.

### `tokenOfOwnerByIndex(...)` \( returns uint `tokenId` \)

Enumerate NFTs assigned to an owner

**Parameters:** address **`_owner`**, uint256 **`_index`**

### `tokenByIndex(...)` \( returns uint \)

Enumerate valid NFTs

**Parameters:**  uint **`_index`**

### `numberOfOwners()` \( returns uint \)

returns the total number of unique owners \(both expired and valid\).  This may be larger than `totalSupply`.

### `owner(`\) \( returns address \)

Returns the address of the current lock owner.

### `isOwner()`

Returns true if the caller is the current owner.

### `renounceOwnership()`

Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.

### `transferOwnership(...)`

Transfers ownership of the contract to a new account. Can only be called by the current owner.

**Parameters:** address **`newOwner`**

### **`supportsInterface(...)` \( returns bool \)**

**See** [**https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md**](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md)\*\*\*\*

**Parameters:** bytes4 **`interfaceId`**

### **`getBalance(...)` \(returns uint \)**

Gets the current balance of the account provided.

**Parameters:** address **`tokenAddress`**_**,**_ address _****_**`_account`**

### **`disableLock()`**

Used by the lock owner to disable lock before migrating keys and/or destroying contract.

### **`isLockManager(...)` \( returns bool \)**

Query whether the given account has the LockManager role.

**Parameters**: address **`account`**

### **`addLockManager(...)`**

Add the LockManager role to the given account.

**Parameters**: address **`account`**

### **`renounceLockManager()`**

Remove the LockManager role from the calling account.

**Parameters:** address **`_publicLockAddress`**, string  **`_symbol`**, string  **`_URI`**

### **`expireKeyFor(...)`**

A function which lets the owner of the lock expire a users' key.

**Parameters:** address **`_owner`**

### **`getHasValidKey(...)` \( returns bool \)**

Checks if the user has a non-expired key.

**Parameters:** address **`_owner`**

### **`getTokenIdFor(...)` \( returns uint \)**

Find the tokenId for a given user

**Parameters:** address **`_account`**

### **`getOwnersByPage(...)` \( returns address\[ \] \)**

A function which returns a subset of the keys for this Lock as an array

**Parameters:** uint **`page`**_**,**_ uint **`_pageSize`**

### **isKeyOwner\(...\) \( returns bool \)**

Checks if the given address owns the given tokenId.

**Parameters:** uint ****_**`tokenId`,**_ address _**`_owner`**_

### `getCancelAndRefundApprovalHash(...)` \( returns bytes32\)

Returns the hash to sign in order to allow another user to cancel on your behalf. This can be computed in JS instead of read from the contract.

**Parameters:** address **`keyOwner`**_,_ address __**`keySender`**

### **`shareKey(...)`**

Allows the key owner to safely share their key \(parent key\) b**`y`** transferring a portion of the remaining time to a new key \(child key\).

Parameters: address **`_to`**, uint **`_tokenId`**, uint **`_timeShared`**

## Events

### `Transfer(...)`

**Parameters:** address _indexed_ **`from`**, address _indexed_ **`to`**, uint256 _indexed_ **`tokenId`**

### `Approval(...)`

**Parameters:** address _indexed_ **`owner`**, address _indexed_ **`approved`**, uint256 _indexed_ **`tokenId`**

### `ApprovalForAll(...)`

**Parameters:** address _indexed_ `owner`, address _indexed_ `operator`, bool `approved`

### `Destroy()`

**Parameters:** uint **`balance`**, address _indexed_ **`owner`**

### `Disable()`

### `Withdrawal(...)`

**Parameters:** address _indexed_ **`sender`**, address _indexed_ **`tokenAddress`**, address _indexed_ **`beneficiary`**, uint **`amount`**

### `CancelKey(...)`

**Parameters:** uint _indexed_ **`tokenId`**, address _indexed_ **`owner`**, address _indexed_ **`sendTo`**, uint **`refund`**

### `RefundPenaltyChanged(...)`

**Parameters:** uint **`freeTrialLength`**, uint **`refundPenaltyBasisPoints`**

### `PricingChanged(...)`

**Parameters:** uint **`oldKeyPrice`**, uint **`keyPrice`**, address **`oldTokenAddress`**, address **`tokenAddress`**

### `ExpireKey(...)`

**Parameters:** uint _indexed_ **`tokenId`**

### `NewLockSymbol(...)`

**Parameters:** string **`symbol`**

### `TransferFeeChanged(...)`

**Parameters:** uint **`transferFeeBasisPoints`**

### **`TimeStampChanged(...)`**

**Parameters:** uint _indexed_ **`_tokenId`**, uint **`_amount`**, bool **`_timeAdded`**

### `NonceChanged(...)`

**Parameters:** address _indexed_ **`keyOwner`**, uint **`nextAvailableNonce`**

### `OwnershipTransferred(...)`

**Parameters:** address _indexed_ **`previousOwner`**, address _indexed_ **`newOwner`**

### **`LockManagerAdded(...)`**

**Parameters:** address _indexed_ **`account`**

### `LockManagerRemoved(...)`

**Parameters:** address _indexed_ **`account`**

### **`NewLock(...)`**

**Parameters:** address _indexed_ **`lockOwner`**, address _indexed_ **`newLockAddress`**

### **`ConfigUnlock(...)`**

**Parameters:** address **`publicLockAddress`**, string **`globalTokenSymbol`**, string **`globalTokenURI`**

### **`keyExpirationTimestampFor(...)` \( returns uint \)**

Returns the key's ExpirationTimestamp field for a given owner.

**Parameters:** address **`_owner`**

**\`\`**

