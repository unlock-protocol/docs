---
title: Deploying Locks
description: Find out how Public Lock can be instantiated and deployed.
sidebar_position: 1
---

In order to ensure full compatibility between all the membership contracts, locks can only be deployed from the [Unlock factory contract](../unlock/). The Unlock contract offers multiple methods to deploy the locks.

### createLock

This method provides the simplest interface as it takes arguments for the duration of each NFT membership (key), the currency contract address, the price, the maximum number of keys, the name... etc. It creates locks that are using the current version of the protocol.

:::note
If a new version is released using "createLock" might break your implementation. It's still the easiest way, but you need to be aware of the potential for that to happen.
:::

### createUpgradableLockAtVersion

This method is a bit more difficult to implement because it takes a blob of packed arguments (compacting arguments is a lot less readable) as well as a version, but it does eliminate the worry of breaking changes when new versions are released, as it deploys locks at the same version, even when new versions have been released. This is the method we use in the Unlock [Dashboard](../../tools/dashboard/) so that we have time after
a new version is released to update the UI to support it.

Locks deployed using this method can later be upgraded to newer versions.

#### createUpgradableLock

:::caution Deprecated
:::

This method is kept for legacy support but is practically speaking the worst of both worlds: it deploys blobs at the newest version. We advise agsint using this function in your applications.

## Upgrading Locks

Don't let the names fool you! All locks (after version 9) are upgradable!

Contract upgrades can only be made using new versions that are supported by the protocol (ie. approved by the DAO) and can only be triggered by a lock manager on _their_ lock(s). The core team, the DAO, or anyone else **not** able to upgrade locks.

See ["Access Control"](../../core-protocol/public-lock/access-control/) for mpre details on the roles and permissions.

:::caution
If a Lock manager renounces their role, leaving no lock manager, then a Lock can no longer be upgraded.
:::

## Interacting with Protocol Contracts

Here are some popular JavaScript libaries that can be used to interact with blockchain smart contracts including [Unlock.sol](../../core-protocol/unlock/).

- [web3.js](https://web3js.readthedocs.io/)
- [Ethers](https://docs.ethers.io/)

Tools we've built and maintain can be found in the ["Tools"](../../tools/) section of the docs. The following tools can be used for deploying locks.

- [Unlock.js](../../tools/unlock.js) is our JavaScript library for interacting with the protocol. It can be used with node.js on the back-end or on the front-end in the browser. This is the library used by our Dashboard and front-end applications.

- [Unlock Hardhat Plugin](../../tutorials/smart-contracts/deploying-locally) can be used to deploy locally. The plugin includes both tasks that can be added to your own hardhat script, or a cli.
