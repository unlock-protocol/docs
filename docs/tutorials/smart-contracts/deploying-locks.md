---
title: Deploying Locks
description: Tutorial on ways in which Locks can be deployed (created) with Unlock Protocol and the methods used to do so.
---

# Deploying Locks

## What's a Lock?
A "Lock" is a customized smart contract for minting (creating) ERC-721 NFT's. They are the Unlock Protocol version of a "minting contract". They are created with the [Unlock](../../core-protocol/unlock/) smart contract, which is a "factory" contract. That factory contract uses the [Public Lock](../../core-protocol/public-lock/) template contact along with
with the configuration options you choose to record a new customized
smart contract to the blockchain [network](../../core-protocol/unlock/networks) of your choice.

## Access Control
Only the lock manager can upgrade a Lock, see ["Access Control"](../../core-protocol/public-lock/access-control/) for more on that.

:::caution
If a Lock manager renounces their role, leaving no lock manager, then a Lock can no longer be
upgraded.
:::

## Lock Creation Methods

### createLock
This method provides the simplest interface as it takes arguments for the duration of each NFT membership (key), the currency contract address, the price, the maximum number of keys, the name... etc. It creates locks that are using the current version of the protocol.

:::note
If a new version is released using "createLock" might break your  implementation. It's still the easiest way, but you need to be aware
of the potential for that to happen.
:::

### createUpgradableLockAtVersion
This method is a bit more difficult to implement because it takes a blob of packed arguments (compacting arguments is a lot less readable) as well as a version, but it does eliminate the worry of breaking changes when new versions are released. This is the method we use in the Unlock [Dashboard](../../tools/dashboard/) so that we don't have time after
a new version is released to update the UI to support it.

:::caution Deprecated
#### createUpgradableLock
Kept for legacy support it deploys blobs, but the blobs have to be built for the latest version... which means that when the protocol upgrade are released, the applications that rely on this might break.
:::

## Upgrading Locks
Don't let the names fool you! All locks are upgradable!

Contract upgrades can only be made using new versions that are supported by the protocol (ie. approved by the DAO).

## Interacting with Protocol Contracts

Here are some popular JavaScript libaries that can be used to interact with blockchain smart
contracts uncluding [Unlock.sol](../../core-protocol/unlock/).

- [web3.js](https://web3js.readthedocs.io/)
- [Ethers](https://docs.ethers.io/)

Tools we've built and maintain can be found in the ["Tools"](../../tools/) section of the docs. The following tools can be used for deploying locks.

- [Unlock.js](../../tools/unlock.js) is our JavaScript library for interacting
   with the protocol. It can be used with node.js on the back-end or on the
   front-end in the browser.

- [Unlock Hardhat Plugin](../../tutorials/smart-contracts/deploying-locally) can
  be used to deploy locally. The plugin includes both tasks that can be added to your own hardhat script, or a cli.
