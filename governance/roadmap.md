---
description: This document presents the Unlock roadmap.
---

# Roadmap

As of December 2021, the Unlock ecosystem consists of the following:

* A set of smart contracts which let creators deploy their locks, as well as lets consumers unlock the locks
* An [unlock-js](https://www.npmjs.com/package/@unlock-protocol/unlock-js) library that developers can use to interact with the contracts
* A [paywall application](https://paywall.unlock-protocol.com) that can be embedded on any website or application to limit access to members and then lets users purchase keys to unlock content
* An [unlock-app ](https://app.unlock-protocol.com/dashboard)application that lets creators deploy their lock and view their members, as well as lets consumers view the keys they purchased and interact with them (keychain). The Unlock app also provides user accounts that enable people to create an account with their email and password and then purchase keys with their credit cards through Unlock Inc.
* The [Unlock Tokens](https://github.com/unlock-protocol/unlock/wiki/The-Unlock-Tokens), a governance token for the Unlock ecosystem, is used to share ownership, as well as incentivize the use of the protocol.
* The [Unlock DAO](https://unlock-protocol.com/blog/unlock-dao), a set of contracts that lets anyone who owns Unlock tokens submit proposals and vote on them in order to effectively govern the protocol and its treasury.

## March 31st 2022

To be announced soon.

## December 31st 2021

* Upgradable PublicLock contracts (by their lock managers)  ✅&#x20;
* New features in PublicLock:
  * Non-expiring keys: ability to create locks without a duration  ✅&#x20;
  * Gas-refund: ability for lock manager to specify an amount refunded to the key purchase (or grants) transactions  ✅&#x20;
  * 3rd party strategies: adding a `balanceOf` hook that lets other contracts determine if someone should get a membership based on arbitrary characteristics (users owns a balance of X tokens, another NFT... etc)  ✅&#x20;
  * Dynamic TokenURI: providing a mechanism for a lock owner to define a 3rd party contract for the logic to yield the tokenURI  ✅&#x20;
* Dev tools:
  * OAuth/OIDC flow for 3rd party applications who do not want to handle wallets  ✅&#x20;
  * Webhooks ability to register hooks when a transaction gets executed on a lock  ⏰
* Creator tools:
  * Multichain dashboard ⏰
  * Persistent login ✅&#x20;
  * Granting membership UI ✅&#x20;
* Member tools:
  * Manage memberships from keychain ✅&#x20;



## August 2021

* Decentralized governance (see below). Delayed as we're waiting for OpenZeppelin to ship its contract. ✅
* Launch Unlock on 2 more side-chains/network. State: Shipped. ✅
* ApplePay or GooglePay or Paypal integration. delayed ⏰
* Customizable NFT icon from the dashboard. State: Shipped. ✅
* Lock configuration from dashboard (metadata collection). delayed ⏰
* Full "static" website relaunch. State: Shipped. ✅
* First Hackathon (remote). ✅

## June 2021

* Enable UDT rewards on xDAI ([or any other side chain](the-unlock-token/side-chains-and-layer-2.md)). State: shipped. Shipped. ✅
* Enable credit card checkout for any lock (if creator agrees to it!). State: Shipped. ✅
* Update home page design. State: Shipped. ✅
* Addition of a `/developer`landing page. State: Shipped. ✅
* Addition of a `/creator` landing page. State: delayed ⏰
* Formal launch of grant program process ([see grants page](grants-bounties-and-matchings.md)). State: shipped. ✅
* Move community from [Telegram](https://t.me/unlockprotocol) to [Discord](https://discord.com/invite/Ah6ZEJyTDp) State: done. ✅
* Developer forum launched on Discourse, State: shipped. Waiting to be announced ✅

Misc: more/better docs, more 3rd party integrations... etc

## Beyond

These are opportunities we will eventually work on, based on user demand or available bandwidth.

### Smart contracts

* Multichain governance: how can decisions approved by the DAO can "travel" to L2 and side-chains

### Locksmith

* Recurring key purchasers
* Cross chain purchasers (allowing someone to purchase a membership from a network on another network)

### Unlock App

* Apple Pay/Google Pay support

### Tooling

* Github actions to replace CircleCi (partial ✅)
* Better integration tests
* refactored subgraphs
* IPFS front-end (partial ✅)
