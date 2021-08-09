---
description: This document presents the Unlock roadmap.
---

# Roadmap

As of summer 2021, the Unlock ecosystem consists of the following:

* A set of smart contracts which let creators deploy their locks, as well as lets consumers unlock the locks
* An [unlock-js](https://www.npmjs.com/package/@unlock-protocol/unlock-js) library that developers can use to interact with the contracts
* A [paywall application](https://paywall.unlock-protocol.com/) that can be embedded on any website or application to limit access to members and then lets users purchase keys to unlock content
* An [unlock-app ](https://app.unlock-protocol.com/dashboard)application that lets creators deploy their lock and view their members, as well as lets consumers view the keys they purchased and interact with them \(keychain\). The Unlock app also provides user accounts that enable people to create an account with their email and password and then purchase keys with their credit cards through Unlock Inc.
* The [Unlock Tokens](https://github.com/unlock-protocol/unlock/wiki/The-Unlock-Tokens), a governance token for the Unlock ecosystem, is used to share ownership, as well as incentivize the use of the protocol.

## 1 Month Roadmap

For June 2021, here are the goals:

* Enable UDT rewards on xDAI \([or any other side chain](the-unlock-token/side-chains-and-layer-2.md)\). State: shipped. Shipped. ✅
* Enable credit card checkout for any lock \(if creator agrees to it!\). State: Shipped. ✅
* Update home page design. State: Shipped. ✅
* Addition of a `/developer`landing page. State: Shipped. ✅
* Addition of a `/creator` landing page. State: delayed
* Formal launch of grant program process \([see grants page](grants-bounties-and-matchings.md)\). State: shipped. ✅
* Move community from [Telegram](https://t.me/unlockprotocol) to [Discord](https://discord.gg/nBNPqmPW) State: done. ✅
* Developer forum launched on Discourse,  State: shipped. Waiting to be announced ✅

## August 1st 2021

* Decentralized governance \(see below\). Delayed as we're waiting for OpenZeppelin to ship its contract.
* Launch Unlock on 2 more side-chains/network. State: Shipped. ✅
* ApplePay or GooglePay or Paypal integration. Delayed
* Customizable NFT icon from the dashboard. State: Shipped. ✅
* Lock configuration from dashboard \(metadata collection\). Delayed
* Full "static" website relaunch. State: Shipped. ✅
* First Hackathon \(remote\). ✅

## December 31st 2021

To be announced.

### Decentralization of governance \(Unlock DAO\)

At this point, protocol upgrades are still performed via Unlock Inc's multi-sig wallet. Now that UDT is being minted and distributed on transactions will referrals, we need to live by our goal to provide a way to vote to all UDT holders. The process, to be confirmed would be like this:

* anyone can deploy a new implementation of the Unlock contract, or the UDT contract, as both are upgradeable \(using OpenZepelin's libraries\). After doing so, they will create and submit a transaction to perform the upgrade.
* This opens a voting period with a fixed duration \(it appears that 2 weeks is the standard\), during which all UDT holders are invited to vote.
* At the end of the period, if the upgrade proposal has received a majority of approvals and if the number of votes has reached a threshold of participation \(we suggest 20%\), then, the upgrade will be submitted and made effective. Otherwise, it is discarded.

There are several challenges to take into account: how can we guarantee that we have a 1 token/1 vote representation \(people should not be able to transfer their tokens once they have voted!\)? How are the upgrades to the governance mechanism \(vote thresholds...\) itself performed? etc. How are Unlocks' contract parameters changes \(developer reward address, base gas price used to compute UDT minted... etc\)?

Our goal for this milestone is summer 2021. 

#### Status

* We have successfully upgraded the UDT tokens to support governance requirements \(vote delegation...\)
* We are waiting for OpenZeppelin to formally launch their Governor Contracts
* Of-chain voting is possible on Snapshots
* We are waiting for Tally to support OpenZeppelin's contracts.

More info: [https://unlock.community/t/introducing-the-dao/68/4](https://unlock.community/t/introducing-the-dao/68/4)

## Beyond

These are opportunities we will eventually work on, based on user demand or available bandwidth.

### Smart contracts

* Upgradable Locks by lock manager. Right now locks themselves are not upgradable. We could make them upgradable by their manager using OpenZeppelin.
* Delegate basic ERC20/ERC721 `approve` for lock managers on behalf of locks \(removing the need for beneficiary!\).

### Locksmith

* Mult-chain on each env. Currently, locksmith instances are 'chain specific'. We're making them agnostic. ✅

### Paywall

* Multi-chain on checkout \(locks can each be on different chains\) ✅
* "stronger" security requirement \(ask the user to sign a message to verify they actually own the address\). In progress

### Unlock App

* Wallet Connect ✅
* Unlock account refactors ✅.
* Grant memberships UI

### Tooling

* Github actions to replace CircleCi
* Better dependency management \(use of lerna and yarn workspaces\)
* Better integration tests

