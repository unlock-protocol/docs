---
title: Roadmap
---

# Roadmap

As of Summer 2022, the Unlock ecosystem consists of the following:

- A set of smart contracts which let creators deploy their locks, as well as lets consumers unlock the locks,
- An [unlock-js](https://www.npmjs.com/package/@unlock-protocol/unlock-js) library that developers can use to interact with the contracts,
- A [paywall application](https://paywall.unlock-protocol.com) that can be embedded on any website or application to limit access to members and then lets users purchase keys to unlock content,
- An [unlock-app](https://app.unlock-protocol.com/dashboard) application that lets creators deploy their lock and view their members, as well as lets consumers view the keys they purchased and interact with them (keychain). The Unlock app also provides user accounts that enable people to create an account with their email and password and then purchase keys with their credit cards through Unlock Inc,
- The [Unlock Tokens](/governance/the-unlock-token/), a governance token for the Unlock ecosystem, is used to share ownership, as well as incentivize the use of the protocol.
- The [Unlock DAO](https://unlock-protocol.com/blog/unlock-dao), a set of contracts that lets anyone who owns Unlock tokens submit proposals and vote on them in order to effectively govern the protocol and its treasury

# December 31th 2022


- Fully refactored Dashboard:
  - "action" driven lock deployment
  - Checkout configuration UI
  - NFT metadata configuration
- Locksmith
  - Uniswap v3 price oracle for card payment
- Dev tools:
  - OpenAPI generation
  - Refactored Subgraphs
  - Integrations: Ghost, Webflow, Wix
- Contracts:
  - Cross-chain purchases (pay from X, receive NFT on Y) with [Connext](https://www.connext.network/)
  - Protocol fee: a small percentage is captured on every purchase transaction
  - Move to Uniswap v3 for oracle
- Governance:
  - Cross-chain governance ([Connext](https://www.connext.network/))

# June 30th 2022

- Recurring memberships support in UI (dashboard, keychain) ⏰
- Refactored and redesigned checkout that supports the following ✅
  - Recurring ✅
  - Multiple memberships ✅
  - Metadata ✅
  - Credit card purchases ✅
- Refactored Dashboard including ⏰
  - Better features to configure locks ⏰
  - Advanced configuration of purchase URL ⏰
- Ticket Verifiers ✅
- New Docs websites ✅
- New Guides website ✅
- Automatically recurring credit card based memberships (smart contract support) ✅
- New networks + L2 (deployed, to be announced) ✅
- New Members page: ✅
  - Filtering by owner, token id ✅
  - send QR code by email ✅
  - Update metadata ✅
  - Airdrop + email ✅
  - Filtering by checked-in ⏰

## March 31st 2022

- PublicLock new features:
  - Multiple memberships: the ability for an address to own multiple memberships ✅
  - Automatically recurring memberships: the contracts support the ability for users to subscribe and have their memberships be automatically renewed by network participants who are ecomomically incentivized to do so. ✅
  - Ownable: the PublicLock lock managers can set an "owner" on the contract ✅
- Unlock Contract's GDP updates triggers and event ✅
- Audits ✅
- Unlock DAO takes ownership of the UDT contract ✅
- New Static website ✅

## December 31st 2021

- Upgradable PublicLock contracts (by their lock managers) ✅
- New features in PublicLock:
  - Non-expiring keys: ability to create locks without a duration ✅
  - Gas-refund: ability for lock manager to specify an amount refunded to the key purchase (or grants) transactions ✅
  - 3rd party strategies: adding a `balanceOf` hook that lets other contracts determine if someone should get a membership based on arbitrary characteristics (users owns a balance of X tokens, another NFT... etc) ✅
  - Dynamic TokenURI: providing a mechanism for a lock owner to define a 3rd party contract for the logic to yield the tokenURI ✅
- Dev tools:
  - OAuth/OIDC flow for 3rd party applications who do not want to handle wallets ✅
  - Webhooks ability to register hooks when a transaction gets executed on a lock ✅
- Creator tools:
  - Multichain dashboard ⏰
  - Persistent login ✅
  - Granting membership UI ✅
- Member tools:
  - Manage memberships from keychain ✅

## August 2021

- Decentralized governance (see below). Delayed as we're waiting for OpenZeppelin to ship its contract. ✅
- Launch Unlock on 2 more side-chains/network. ✅
- Apple Pay or Google Pay or Paypal integration. Delayed ⏰
- Customizable NFT icon from the dashboard. ✅
- Lock configuration from dashboard (metadata collection). delayed ⏰
- Full "static" website relaunch. ✅
- First Hackathon (remote). ✅

## June 2021

- Enable UDT rewards on xDAI ([or any other side chain](the-unlock-token/side-chains-and-layer-2.md)). ✅
- Enable credit card checkout for any lock (if creator agrees to it!). ✅
- Update home page design. ✅
- Addition of a `/developer`landing page. ✅
- Addition of a `/creator` landing page. ⏰
- Formal launch of grant program process ([see grants page](grants-bounties-and-matchings.md)). ✅
- Move community from [Telegram](https://t.me/unlockprotocol) to [Discord](https://discord.com/invite/Ah6ZEJyTDp) State: done. ✅
- Developer forum launched on Discourse, State: shipped. ✅

Misc: more/better docs, more 3rd party integrations... etc

## Beyond

These are opportunities we will eventually work on, based on user demand or available bandwidth.

### Unlock App

- Apple Pay/Google Pay support

### Tooling

- Better integration tests
- IPFS front-end (partial ✅)
