---
title: Public Lock
description: >-
  Explanation of the Unlock Protocol "Lock" contract PublicLock.sol.
---
# Public Lock

## Lock Contract

This is the contract (**PublicLock.sol**) which users can configure and deploy to restrict access to resources, such as a blog, a subset of software features, or an event.

Each lock is a standalone contract with its own deployment, address, and storage. As per v9, locks can be entirely untethered and still fully functional even without access to the main Unlock contract.

- Each lock contract is an [ERC-721](https://eips.ethereum.org/EIPS/eip-721) compliant contract capable of creating and managing NFTs (non-fungible tokens we call "Keys"), as well as restricting access based on the user's possession (or lack of) one of these keys.
- Keys for one lock are valid only for the lock which created them.
- A given user may own only 1 key (NFT) at a time.

You can call and inspect the Lock contracts directly using the block explorers as well.

## Overview

The Lock Smart Contract has multiple capabilities:

- _Administrative_: these are the functions which change rights (see[ access control](./access-control/)) associated to the lock or individual parameters for the lock a such as its name or of course its price. Finally, there is a method to withdraw funds from the lock contract itself.
- _Transferring key ownership_: keys can be purchased from the lock smart contract itself or from another user who purchased one previously. Another element is that keys can be purchased on behalf of somebody else \(this is important because this lets somebody pay gas fees on behalf of somebody else\)
- _Changing key attributes_: the keys have an expiration date which can be changed \(for an earlier date by the lock owner\) as well as data attributes which can be changed to something else.

## Upgrades and customization

All locks deployed prior to version 10 are NOT upgradable, which means their core logic will remain unchanged. Starting with version 10, locks are upgradable by their lock manager, through the Unlock contract.

Lock managers can also alter the behavior of their locks thru the use of [hooks](./hooks/).

## Changelog

### Version 11

**Released**: August 2022

This new version brings a lot of gas savings as well as a few minor bug fixes. It also introduces the following features:

### `referrerFees` and `setReferrerFee`

This is the most important addition to the protocol in this version. `referrerFees` are ways for a lock manager to share their income with the `referrer` when a purchase is made (when calling `purchase`, `renewMembershipFor`, or `extend`). The fee is set as a percentage in basis points (`1000` is 10%).

A lock manager can call `setReferrerFee` to set specific fees for different referers. It is possible to set a _default_ fee for _any_ referrer by passing the Zero address as the referrer when calling `setReferrerFee`.

The function `referrerFees(address)` can be used to retrieve the fees set for a specific address.

#### `lendKey` and `unlendKey`

These 2 functions can be used by a key manager to lend a key or recover it. They can only be called by the key manager or current owner of the key if no manager is set. `lendKey(from, recipient, tokenId)` will set the caller as the new key manager (see [roles](./access-control.md)), and will transfer ownership of the key to the `recipient` address. `unlendKey(recipient, tokenId)` will transfer the key to the recipient.

#### `grantKeyExtension`

This new function is to `extend` what `grantKeys` is to the `purchase` function: it lets a key granter (see roles) or lock manager change the expiration of a specific key.
Unlock Labs uses this function to perform renewals on keys purchased via credit cards.

#### `onKeyTransferHook`

This version introduces a new [hook](./hooks.md) that is invoked when a key is transferred. The hook is called with the following parameters:
The hook is the final step in the transfer function.

- address of the lock
- token id to be transferred
- operator (address of the caller)
- previous owner address
- new owner address
- expiration timestamp of the key

#### `totalKeys`

This function returns the total number of keys on the lock for a specific address.
Note: `balanceOf` will return only the number of _valid_ (non-expired) in order to stay compatible with token gating tools.

### Commits:

```sh
14a3eaf29 updated docs for setEventHooks
84f674962 chore(contracts): updated docs (#9339)
cdf9ec219 adding param details for approveBeneficiary (#9333)
7e736ba49 feat(contracts): PublicLock v11 with latest changes (#9229)
59f00d543 add custom duration to `grantKeyExtension` (#9220)
97e134005 feat(smart-contracts): introduces `unlendKey` (#9036)
90dd41950 feat(smart-contracts): add `lendKey`  (#9013)
32c50cb84 fix(smart-contracts): allow to share key with self (#9037)
bd010c0c4 chore(smart-contracts): Remove some statements that were not rendered correctly in docs (#9043)
fa724f1b5 Revert "allow to share key with self"
bfeb8e8f1 allow to share key with self
3d0801c17 feat(smart-contracts): add support for custom referrer fee (#9017)
544e3b6e6 add `_recordKeyPurchase` in `extend` (#9028)
46c3890da fix(smart-contracts): reset original price when a key is cancelled (#9003)
92d582e2b feat(smart-contracts): prevent `transferFrom` from being used when a key manager is set (#9011)
107e1131c feat(smart-contracts): allow `extend`  to update stored keyPrice (#8983)
39bcefc20 fix(smart-contracts): `balanceOf` counts only valid keys (#8999)
a636eae09 feat(smart-contracts): `onKeyTransfer` hook (#8993)
586768d39 fix(smart-contracts): takes into account number of purchases when evaluating sold out (#8982)
4c966ff07 feat(smart-contracts): add `grantKeyExtension` (#8984)
fbc3907af replace unwanted `transferFrom` in erc20 gas refund (#8985)
aa24f9d88 chore(smart-contracts): bump oz libs to latest 4.6.0 (#8948)
0af4e3417 feat(smart-contracts): `purchase` and `grantKeys` return token ids (#8981)
a617fdac8 dedupe zero address check (#8964)
3121df420 feat(smart-contracts): replace revert strings by error codes (#8867)
6bbd5ed58 feat(smart-contracts): bump PublicLock solc version to 0.8.13 (#8945)
305d5bb57 fix(smart-contracts): remove unused logic from PublicLock contract (#8861)
266e183d3 feat(smart-contracts): bump version for Publiclock v11 (#8864)
```

### Version 10

**Released**: April 2022
