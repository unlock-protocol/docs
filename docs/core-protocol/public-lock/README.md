# Public Lock

## Lock Contract

This is the contract (**PublicLock.sol**) which users can configure and deploy to restrict access to resources, such as a blog, a subset of software features, or an event.

Each lock is a standalone contract with its own deployment, address, and storage. As per v9, locks can be entirely untethered and still fully functional even without access to the main Unlock contract.

- Each lock contract is an [ERC-721](https://eips.ethereum.org/EIPS/eip-721) compliant contract capable of creating and managing NFTs (non-fungible tokens we call "Keys"), as well as restricting access based on the user's possession (or lack of) one of these keys.
- Keys for one lock are valid only for the lock which created them.
- A given user may own only 1 key (NFT) at a time.

You can call and inspect the Lock contracts directly using the block explorers as well.

### Production Networks

- Ethereum mainnet
  - v0 [`0x1cb8bb92cb7ade4d7d52eb0a870514a9198fa6d7`](https://etherscan.io/address/0x1cb8bb92cb7ade4d7d52eb0a870514a9198fa6d7#readContract)
  - v1 [`0x3909b9546a4b147c2a904446ac22381f0163b8b6`](https://etherscan.io/address/0x3909b9546a4b147c2a904446ac22381f0163b8b6#readContract)
  - v2 Never Shipped
  - v3 [`0x1b75bc108a0259355475ce45cdfb5599361abcbe`](https://etherscan.io/address/0x1b75bc108a0259355475ce45cdfb5599361abcbe#code)
  - v4 [`0x00bd8952914eef42142612b6b2074405d95def71`](https://etherscan.io/address/0x00bd8952914eef42142612b6b2074405d95def71#readContract)
  - v5 [`0x28ee5846479b8d81389e24861d537fa170403b23`](https://etherscan.io/address/0x28ee5846479b8d81389e24861d537fa170403b23#code)
  - v6 [`0x03fed578d2c557f6b38b8d9d225383912703293a`](https://etherscan.io/address/0x03fed578d2c557f6b38b8d9d225383912703293a#readContract)
  - v7 [`0x004c79f785731d3f61be85ec84e27ba83fd4d20e`](https://etherscan.io/address/0x004c79f785731d3f61be85ec84e27ba83fd4d20e#readContract)
  - v8 [`0x61dbbac624e5a27fb54c6fa1548d8531ef84eb18`](https://etherscan.io/address/0x61dbbac624e5a27fb54c6fa1548d8531ef84eb18#readContract)
  - v9 [`0x443618dc1094b2a7bfbe768861a1e31ced5b39dc`](https://etherscan.io/address/0x443618dc1094b2a7bfbe768861a1e31ced5b39dc#readContract)
- Gnosis Chain (ex-xDAI):
  - v8 [`0xecA45DFEb9523B4ba883e46394b0fe0550869E9C`](https://blockscout.com/xdai/mainnet/address/0xecA45DFEb9523B4ba883e46394b0fe0550869E9C/contracts)
  - v9 [`0x24B1F322D4dFDCB9FdA365d147503347B388B6F8`](https://blockscout.com/xdai/mainnet/address/0x24B1F322D4dFDCB9FdA365d147503347B388B6F8/)
- Polygon (ex-Matic)
  - v8 [`0x39cdcae0a5ce740581330e689713df92da47e78a`](https://polygonscan.com/address/0x39cdcae0a5ce740581330e689713df92da47e78a#code)
  - v9 [`0xfc0FdB39aeA6B599990F050928e97903b10a550d`](https://polygonscan.com/address/0xfc0FdB39aeA6B599990F050928e97903b10a550d#readProxyContract)
- Binance Smart Chain:
  - v8 [`0x419195a71d6ae592bb4846266e907b5c1202f9ee`](https://bscscan.com/address/0x419195a71d6ae592bb4846266e907b5c1202f9ee#readContract)
  - v9 [`0xa9584e6cbaf88c09e5ede06865211ba28febd077`](https://bscscan.com/address/0xa9584e6cbaf88c09e5ede06865211ba28febd077#code)
- Optimistic Ethereum:
  - v8 [`0x4064206b0a1f5ba603dd8016ee36141f54506051`](https://optimistic.etherscan.io/address/0x4064206b0a1f5ba603dd8016ee36141f54506051)
  - v9 [`0xa9584e6cbaf88c09e5ede06865211ba28febd077`](https://optimistic.etherscan.io/address/0xa9584e6cbaf88c09e5ede06865211ba28febd077#code)

### Test Networks

- Rinkeby
  - v0 [`0x014000237127bfe5955936ac7e7b7a4451321bbf`](https://rinkeby.etherscan.io/address/0x014000237127bfe5955936ac7e7b7a4451321bbf)
  - v1 [`0x0cc9aa747e6db7ae984ea95217d1ff34e7acd80c`](https://rinkeby.etherscan.io/address/0x0cc9aa747e6db7ae984ea95217d1ff34e7acd80c)
  - v2 Never Shipped
  - v3 [`0x677f09a88b3a1fdccfddab6e6cfd63dd02cbfa7c`](https://rinkeby.etherscan.io/address/0x677f09a88b3a1fdccfddab6e6cfd63dd02cbfa7c#readContract)
  - v4 [`0x771e09a5bfef4c4b85d796a112d49e839c98d9da`](https://rinkeby.etherscan.io/address/0x771e09a5bfef4c4b85d796a112d49e839c98d9da#readContract)
  - v5 [`0x9247b6b605a52359822b429b4c5ef74c1fb6740e`](https://rinkeby.etherscan.io/address/0x9247b6b605a52359822b429b4c5ef74c1fb6740e#readContract)
  - v6 [`0x43fbb379295934146ef5321f77eb848b86169bd9`](https://rinkeby.etherscan.io/address/0x43fbb379295934146ef5321f77eb848b86169bd9#readContract)
  - v7 [`0xad496b433d6a8cb25c47eabb4604e1dff409622f`](https://rinkeby.etherscan.io/address/0xad496b433d6a8cb25c47eabb4604e1dff409622f#code)
  - v8 [`0x90de74265a416e1393a450752175aed98fe11517`](https://rinkeby.etherscan.io/address/0x90de74265a416e1393a450752175aed98fe11517#code)
  - v9 [`0xa55f8ba16c5bb580967f7dd94f927b21d0acf86c`](https://rinkeby.etherscan.io/address/0xa55f8ba16c5bb580967f7dd94f927b21d0acf86c#code)

Please, refer to the [Lock contract documentation](../smart-contracts-api/) for more details.

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
