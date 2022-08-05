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

### Version 10

**Released**: April 2022
