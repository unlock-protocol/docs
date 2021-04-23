---
description: >-
  The first step to using Unlock as a creator is to deploy your own lock so you
  can sell memberships to your own content!
---

# Deploying a lock

Locks are smart contracts on the Ethereum blockchain. This provides creators with **unmediated control over who can access their work**, and how much they want to charge for this. Unlock Inc. provides a simple dashboard to create a lock at the following address.

{% embed url="https://unlock-protocol.com/" caption="https://unlock-protocol.com" %}

_Note: this currently requires an Ethereum wallet. You can point the wallet to any network that Unlock is_ [_currently deployed on_](https://docs.unlock-protocol.com/frequently-asked-questions#what-networks-are-supported)_._

When creating a lock, the creator can select the following attributes:

* The name of the lock \(easier to identify it than its Ethereum address\)
* The duration of each key \(how long they are valid for\)
* The price consumers need to pay to get a key, including its currency
* How many keys at most can be sold

Once deployed the lock will have its own address and is fully owned by the creator \(no-one, including Unlock Inc. can change or remove it\). Locks can also be transferred to a different owner after they've been created.

The lock can also be customized even further, please get in touch if you have questions!

## Creating a Lock for a custom ERC20 token

The UI only offers to chose between DAI and Ether, but any ERC20 can be used. Locks can be configured to be backed by any token that conforms to the [ERC20](https://eips.ethereum.org/EIPS/eip-20) specification. Currently, the fastest way to achieve this is by visiting the creator dashboard with the address and ticker of your backing token appended via the `erc20` and `ticker` query parameters.

* [Create a DAI Backed Lock](https://app.unlock-protocol.com/dashboard/?erc20=0x6b175474e89094c44da98b954eedeac495271d0f&ticker=DAI)
* [Create a USDC Backed Lock](https://app.unlock-protocol.com/dashboard/?erc20=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&ticker=USDC)
* [Create a BAT Lock](https://app.unlock-protocol.com/dashboard/?erc20=0x0d8775f648430679a709e98d2b0cb6250d2887ef&ticker=BAT)

