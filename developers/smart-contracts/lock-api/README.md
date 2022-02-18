# Lock Api

## Overview

The Lock Smart Contract has multiple capabilities:

* _Administrative_: these are the functions which change rights associated to the lock or individual parameters for the lock a such as its name or of course its price. Finally, there is a method to withdraw funds from the lock contract itself.
* _Transferring key ownership_: keys can be purchased from the lock smart contract itself or from another user who purchased one previously. Another element is that keys can be purchased on behalf of somebody else \(this is important because this lets somebody pay gas fees on behalf of somebody else\)
* _Changing key attributes_: the keys have an expiration date which can be changed \(for an earlier date by the lock owner\) as well as data attributes which can be changed to something else.

## Upgrades

All locks deployed prior to version 10 (to be released by year end 2022) are NOT upgradable, which means their core logic will remain unchanged. Starting with version 10, locks are upgradable by their lock manager, through the Unlock contract.

## Functions
### `initialize`

This function is the initializer and called when the lock is deployed. You don't need to call this function (and calling it will fail).

```javascript
function initialize(
  address _lockCreator, // The first owner of the lock
  uint _expirationDuration, // The duration of each membership when they are purchased
  address _tokenAddress, // The address of the ERC20 token used to price the membership
  uint _keyPrice, // The price of the membership (beware the number of decimals)
  uint _maxNumberOfKeys, // The maximum number of NFTs (keys) available for purchase
  string calldata _lockName // The name of the lock
) external;
```

NB: To create non-expiring memberships, just set the `_expirationDuration` to 0.

Once minted, the address deploying it becomes its first Lock manager. The Unlock contract also keeps track of each locks' address.

### `purchase`

This function can be invoked to purchase a key (NFT membership).
To purchase a membership, the caller should pass the number of tokens to be transfered (an ERC20 approval should have been initiated earlier), and this amount can be larger than the actual `keyPrice`.
It is possible to purchase a membership on behalf of another user by setting a different recipient address.
The referrer address is the address that will receive some UDT governance tokens as part of this transaction (if applicable).
A key manager can also be set directly during the purchase, allowing a different account to manage the key while the recipient still benefit from a full membership - see [Access Control](./access-control) for more.
Finally an arbitrary data object can be passed and is propagated to hooks and/or emitted as part of events.

This function will throw when the lock has been disabled, or if it is sold out.

```javascript
function purchase(
  uint256 _value,
  address _recipient,
  address _referrer,
  address _keyManager,
  bytes calldata _data
) external payable;
```

### `grantKeys`

Allows a Lock manager to give a collection of users a key with no charge. This is the mechanism used to "airdrop" memberships.
Each key may be assigned a different expiration date and a different key manager.

```javascript
function grantKeys(
  address[] calldata _recipients,
  uint[] calldata _expirationTimestamps,
  address[] calldata _keyManagers
) external;
```

### `shareKey`

This function can be called to transfer some of the time on a membership and do a "partial" transfer.

```javascript
function shareKey(
  address _to,
  uint _tokenId,
  uint _timeShared
) external;
```
### `transfer`

We implemented an ERC20 style transfer so that keys can be sent directly from wallets that usually support ERC20 transfers but have lower coverage for ERC721 functions

```javascript
  function transfer(
      address _to,
      uint _value
    ) external
      returns (bool success);
```

### `getTokenIdFor`

A function that returns the token id for an address (or the Zero address if the address does not own any).

```javascript
function getTokenIdFor(
  address _account
) external view returns (uint);
```

### `keyExpirationTimestampFor`

A function that returns the expiration timestamp for the token owned by one address. It returns 0 if the user does not own a key and a timestamp from the past if the membership has expired.

```javascript
function keyExpirationTimestampFor(
  address _keyOwner
) external view returns (uint timestamp);
```

### `purchasePriceFor`

This function can be used to retrieve the actual price for a specific user as the hook can alter the price and the front-end application might want to show the actual specific price for the user.

```javascript
function purchasePriceFor(
  address _recipient,
  address _referrer,
  bytes calldata _data
) external view
  returns (uint);
```

### `getTransferFee`

 Determines how much of a fee a key owner would need to pay in order to transfer the key to another account. This is pro-rated so the fee goes down overtime. It returns the transfer in seconds.

```javascript
function getTransferFee(
  address _keyOwner,
  uint _time
) external view returns (uint);
```
### `expireAndRefundFor`

A lock manager can invoke this function to expire a key and perform and refund based on the amount specified.

```javascript
function expireAndRefundFor(
  address _keyOwner,
  uint amount
) external;
```

### `cancelAndRefund`

Allows a key manager to expire and get a refund for their key, based on the cancellation terms.

```javascript
function cancelAndRefund(uint _tokenId) external;
```

### `updateRefundPenalty`

Allow a Lock manager to change the refund penalty. The first param is the duration of the free trial in seconds, and the second is the penalty in basis-points.

```javascript
function updateRefundPenalty(
  uint _freeTrialLength,
  uint _refundPenaltyBasisPoints
) external;
```

### `getCancelAndRefundValueFor`

Determines how much of a refund a key owner would receive if they issued a `cancelAndRefund` transaction.
Note that due to the time required to mine a tx, the actual refund amount will be lower than what the user reads from this call.

```javascript
function getCancelAndRefundValueFor(
  address _keyOwner
) external view returns (uint refund);
```

### `disableLock`

This function can only be called by the lock manager and is used to completely disable a lock and prevents any key purchase and transfer. This cannot be reversed.

```javascript
function disableLock() external;
```

### `updateKeyPricing`

This function can be called by any lock manager to change the pricing on the lock, including both the amount of currency. For locks priced in the chain's native currency, use the Zero address.

```javascript
function updateKeyPricing( uint _keyPrice, address _tokenAddress ) external;
```
### `withdraw`

This function can be called by a lock manager or the `beneficiary` to transfer all or some of the funds on the lock to the `beneficiary` address. The `tokenAddress` can be specified to transfer funds from an ERC20 when the currency has been changed.
Note: consider avoiding full withdrawals as it breaks the `cancelAndRefund` and `expireAndRefundFor` methods.

```javascript
function withdraw(
  address _tokenAddress,
  uint _amount
) external;
```
### `approveBeneficiary`

This function can only be called by a lock manager to approve a 3rd party address to withdraw funds from the lock.

```javascript
function approveBeneficiary(
  address _spender,
  uint _amount
) external
  returns (bool);
```

### `updateBeneficiary`

A function that can be called by any lock manager to change the address of the beneficiary address. The beneficiary can be either ad user's address or a contract's address.

```javascript
function updateBeneficiary( address _beneficiary ) external;
```

### `setKeyManagerOf`

This function can be called by a lock manager or the corresponding key manager to set the key manager for a key. This can be used to "loan" a key or collateralize it.

```javascript
function setKeyManagerOf(
  uint _tokenId,
  address _keyManager
) external;
```

### `setMaxNumberOfKeys`

This function allows any lock manager to change the maximum number of keys a lock can edit.

```javascript
function setMaxNumberOfKeys (
  uint _maxNumberOfKeys
) external;
```

## ERC721 functions

The lock implements the ERC721 specification as [described there](https://eips.ethereum.org/EIPS/eip-721).

### `balanceOf`

This function is an ERC721 (and ERC20 function) that will return 1 if the user has a valid membership, but 0 if not (either no membership or expired).

```javascript
function balanceOf(address _owner) public view returns (uint256 balance);
```

### Other methods

```javascript

function ownerOf(uint256 tokenId) public view returns (address _owner);

function transferFrom(address from, address to, uint256 tokenId) public;

function safeTransferFrom(address from, address to, uint256 tokenId) public;

function approve(address to, uint256 tokenId) public;

function getApproved(uint256 _tokenId) public view returns (address operator);

function setApprovalForAll(address operator, bool _approved) public;

function isApprovedForAll(address _owner, address operator) public view returns (bool);

function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public;

function totalSupply() public view returns (uint256);

function tokenOfOwnerByIndex(address _owner, uint256 index) public view returns (uint256 tokenId);

function tokenByIndex(uint256 index) public view returns (uint256);
```

### Setters

Allows a Lock manager to assign a descriptive name for this Lock.
```javascript
function updateLockName(
  string calldata _lockName
) external;
```

Allows a Lock manager to assign a Symbol for this Lock.
```javascript
function updateLockSymbol(
  string calldata _lockSymbol
) external;
```

Allows a Lock manager to update the baseTokenURI for this Lock.
```javascript
  function setBaseTokenURI(
    string calldata _baseTokenURI
  ) external;
```

Lets a lock manager set event hooks to be triggered on key purchases and on cancellation.
```javascript
function setEventHooks(
  address _onKeyPurchaseHook,
  address _onKeyCancelHook
) external;
```

Allow a Lock manager to change the transfer fee. The transfer fee is expressed in basis-points. For example: 200bps = 2% and means that 2% of the time transfered is "burnt" during the transfer.
```javascript
function updateTransferFee(
  uint _transferFeeBasisPoints
) external;
```

These functions are used to set, unset and check roles on the lock. Note that Lock Manager can only "renounce" their role and cannot be revoked.

```javascript
  function addKeyGranter(address account) external;

  function addLockManager(address account) external;

  function isKeyGranter(address account) external view returns (bool);

  function isLockManager(address account) external view returns (bool);

  function revokeKeyGranter(address _granter) external;

  function renounceLockManager() external;
```

### Getters

Returns the lock version number:
```javascript
function publicLockVersion() public pure returns (uint);
```

Returns the name of a lock:
```javascript
function name() external view returns (string memory _name);
```

Returns the current number of owners (including expired keys):
```javascript
function numberOfOwners() external view returns (uint);
```

Returns the token symbol
```javascript
function symbol()
  external view
  returns(string memory);
```

Yields the tokenURI as a string for a specific tokenId. This is part of the ERC721 spec: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
```javascript
function tokenURI(
  uint256 _tokenId
) external view returns(string memory);
```

This yields the address of the `onKeyPurchaseHook`.
```javascript
function onKeyPurchaseHook() external view returns(address);
```

This yields the address of the `onKeyCancelHook`.
```javascript
function onKeyCancelHook() external view returns(address);
```

This yields the beneficiary who will receive the lock's funds.
```javascript
function beneficiary() external view returns (address );
```

This yields the duration of each key.
```javascript
function expirationDuration() external view returns (uint256 );
```

This yields the duration of the free trial during which keys can cancelled at no cost.
```javascript
function freeTrialLength() external view returns (uint256 );
```

This returns true if the lock is still alive.
```javascript
function isAlive() external view returns (bool );
```

This returns the currency used to charge for keys. If this is the Zero address, the lock uses the chains's native currency.
```javascript
function tokenAddress() external view returns (address );
```

This returns the price of keys.
```javascript
function keyPrice() external view returns (uint256 );
```

This returns the maximum number of keys that can be purchased on that lock.
```javascript
function maxNumberOfKeys() external view returns (uint256 );
```

This retrns the owner of a key (NFT) based on its id. This is an ERC721 method.
```javascript
function ownerOf(uint256 tokenId) public view returns (address _owner);
```

This returns the key manager of a key based on its id.
```javascript
function keyManagerOf(uint) external view returns (address );
```

This returns the refund penalty in basis points.
```javascript
function refundPenaltyBasisPoints() external view returns (uint256 );
```

This returns the transfer fee in basis points.
```javascript
function transferFeeBasisPoints() external view returns (uint256 );
```
