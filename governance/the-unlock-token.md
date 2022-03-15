---
description: UDT and its Tokenomics
---

# The Unlock Token

* [Address](https://etherscan.io/token/0x90de74265a416e1393a450752175aed98fe11517)

### Definitions

#### Lock (PublicLock.sol)

A Lock is a smart contract deployed on the Ethereum chain. It is managed by the person who deployed it but can be transferred to anyone \(including a 3rd party smart contract\). Any manager can also add more managers who can then update certain parameters of the lock. The lock acts as an "access control list" and keeps track of users who own a key \(see below\). Keys can be purchased from the lock and the lock defines their characteristics:

* key price \(amount and currency, Ether or ERC20\)
* key duration \(how long each key is valid for\)
* number of keys \(can be infinite\)
* lock name

The lock also defines a few other characteristics: a fee to be paid when transferring a key, and a cancellation fee... etc. Most of these can be set by any of the lock's manager.

The Unlock team does not have any special permission on deployed locks.

#### Key

A Key is a non-fungible token represented by an entry inside of a lock. A key has an expiration after which it should not be considered valid anymore and which is set at the purchase time, based on the lock's duration setting. A key belongs to a single ethereum address. Keys can be transferred by default, but their owner.

Keys can be purchased by sending the required price to the corresponding lock \(the person purchasing the key does not have to be the owner of the key, which means someone can purchase the key for someone else\).

#### Unlock smart contract (Unlock.sol)

This is the "factory" from which all locks are created. This contract keeps track of all locks created. It also keeps track of several other network-wide metrics \(see below\), as well as the ability to mine Unlock Discount Tokens upon key purchases.

#### Unlock maintainer

The Unlock smart contract is upgradable in order to ensure that it can be improved as the network grows and our understanding of it increases. It should, however, tend toward being less and less changeable. Upgrades \(or other changes in parameters\) can be performed by a single address called the Unlock maintainer. 
Eventually, the Unlock maintainer designation process should be decentralization through voting \(by both lock and UDT owners\). In the beginning, the Unlock Inc. organization is the maintainer of the Unlock smart contract via a multisig but we expect this responsibility to be transfered to the DAO eventually.
#### Unlock Tokens \(UDT\)

These are Unlock native ERC20 tokens. They are minted progressively as the network grows \(see below\), and can be used for governance of the protocol. These tokens can be transferred like other ERC20 tokens. These tokens can be bridged to other chains or L2.
#### GDP

Sum of all transactions happening through all locks across the network. It is computed in Eth, based on exchange rates from [Uniswap](https://uniswap.exchange/) for keys sold in ERC20 currencies. Keys whose currency does not have an Ethereum exchange pair are not taken into account in the GDP calculation and cannot grant Unlock tokens. Note: the GDP can only grow \(or stay stable if no one is purchasing keys anymore\).

### Introduction

The Unlock Discount Token \(UDT\) is an _optional_ token that exists to add incentives to actors who are willing to grow and use the Unlock protocol and network. Unlock Discount Tokens are granted as rewards upon key purchases to an address designated in the key purchase call. UDT can then be used for various purposes, such as governance \(voting on protocol upgrades\). The Unlock Tokens supply is inflationary as more tokens are minted with the networks's growth, but the supply growth decelarates (following a log curve) as the network size increases.

### Earning UDT

There is a **single mechanism** that creates new UDT: key purchases. When making a key purchase, the person sending the transaction \(who pays for the key\) can optionally set a `referrer` address. This address will receive UDT, if applicable.

Example: Alice owns a key to a specific lock. Bob wants to purchase a key to the same lock. When Bob sends his transaction to the lock smart contract, Bob submits Alice's address as the person who made a referral. Since Bob supplied the required price, a new key is granted to him. Additionally, the Lock will "call back" to the Unlock smart contract in order to grant some Unlock Discount Tokens to Alice.

The amount of tokens that Alice receives is calculated during the key purchase transaction based 2 factors: the gas consumed by the purchase transaction by Bob AND the actual value added to the GDP.

In order to avoid "self-referrals" \(abusers making referrals to themselves for locks they own\), we must limit the value of the tokens received the amount of gas spent for the key purchase. For this, we use an oracle \(Uniswap\) to find the price of the UDT tokens in Ether and grant tokens based on the amount of gas spent in Ether. When Bob purchases a new key, he spends k Ether in fees \(gas price X gas\). Uniswap provides a real time value for the price of UDT in Ether \(p Ether per UDT\) which means that Alice receives p/k UDT. In practice, this mechanism guarantees that it's cheaper to purchase UDT on an exchange than to acquire them by making self-referrals.

Additionally, the reward is capped so that the growth of supply cannot be bigger than 50% of the growth of the GDP. For each referral, we can measure how much the GDP has grown since the previous purchase, so we can measure how much at most the supply of UDT should grow, capping it at half the growth of the GDP.

### Premine

When UDT are released for the first time, there was a 1,000,000 UDT pre-mine. There are multiple goal to the premine:

1. create a Uniswap pool to set an early price on UDT,
2. ensure that the Unlock team initially retains control of the protocol,
3. create programs to incentivize development \(see [this page](https://github.com/unlock-protocol/unlock/wiki/Unlock-Inc's-Treasury:-Grants,-bounties-and-matchings)\)

### Developer reward

In order to sustain the work of the team which is creating and maintaining the protocol, the reward is split between the person making the referral \(Alice in the example above\) and the Unlock maintainer, with a 80%-20% balance, which could later be updated, via a protocol upgrade. The Unlock maintainer could finance work on the protocol by selling some of the tokens it receives as developer rewards.

### Governance

Unlock Tokens will be used for governance. Eventually, protocol upgrades will be decided through voting with a system where votes are tied to UDT ownership\). For this, we will leverage the upgradability nature of the Unlock contract so that only upgrades that have been approved by a majority of voters can be executed.

### Future improvements

We expect the community to eventually control the protocol and its upgrades. These upgrades may include new functionality for the protocol itself, ways to reward token holder \(maybe through discounts, or thru buy-back and burn mechanisms... etc\).

### Multi-chain support

We believe the Unlock Protocol can \(and will\) be deployed on any EVM-compatible chain or environment. As such, each of these deployment will have its own "bridged" version of the UDT token from Ethereum's mainnet. Details of the mechanism to enable side chains to also reward adoption with UDT [can be found on this page](https://github.com/unlock-protocol/unlock/wiki/UDT-on-side-chains-and-L2).

