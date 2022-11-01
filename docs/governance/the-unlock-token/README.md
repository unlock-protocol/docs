---
title: The Unlock Token
description: The Unlock Token (UDT) and its tokenomics.
---

# The Unlock Token

- **Status**: [partially implemented](the-path-to-udt.md). You can earn UDT today by using the protocol, or through [grants from the Unlock Treasury](../grants).
- UDT on Ethereum mainnet [`0x90de74265a416e1393a450752175aed98fe11517`](https://etherscan.io/token/0x90de74265a416e1393a450752175aed98fe11517)
- UDT pool on Uniswap v2: [`0x9ca8aef2372c705d6848fdda3c1267a7f51267c1`](https://v2.info.uniswap.org/pair/0x9ca8aef2372c705d6848fdda3c1267a7f51267c1)
- Oracle: [`0xE118d797E1c44F2e2A2823191a51D8b46a4A1D51`](https://etherscan.io/address/0xE118d797E1c44F2e2A2823191a51D8b46a4A1D51)

## Introduction

The Unlock Discount Token \(UDT\) is an _optional_ token that exists to add incentives to actors who are willing to grow and use the Unlock protocol and network. Unlock Discount Tokens are granted as rewards upon key purchases to an address designated in the key purchase call. UDT can then be used for various purposes, such as governance \(voting on protocol upgrades\) or to claim discounts when purchasing keys. The Unlock Tokens are never burnt and, even though there are more tokens printed as the network grows in %, their supply will grow less and less as the network reaches a large size.

## Earning UDT

There is a single mechanism that creates new UDT: key purchases. When making a key purchase, the person sending the transaction \(who pays for the key\) can optionally add a `referrer` address. This address will receive UDT, if applicable

Example: Alice owns a key to a specific lock. Bob wants to purchase a key to the same lock. When Bob sends his transaction to the lock smart contract, Bob submits Alice's address as the person who made a referral. Since Bob supplied the required price, a new key is granted to him. Additionally, the Lock will "call back" to the Unlock smart contract in order to grant some Unlock Discount Tokens to Alice.

The amount of tokens that Alice receives is calculated during the key purchase transaction based 2 factors: the gas consumed by the purchase transaction by Bob AND the actual value added to the GDP.

In order to avoid "self-referrals" \(abusers making referrals to themselves for locks they own\), we must limit the value of the tokens received the amount of gas spent for the key purchase. For this, we use an oracle \(Uniswap\) to find the price of the UDT tokens in Ether and grant tokens based on the amount of gas spent in Ether. When Bob purchases a new key, he spends k Ether in fees \(gas price X gas\). Uniswap provides a real time value for the price of UDT in Ether \(p Ether per UDT\) which means that Alice receives p/k UDT. In practice, this mechanism guarantees that it's cheaper to purchase UDT on an exchange than to acquire them by making self-referrals.

Additionally, the reward is capped so that the growth of supply cannot be bigger than 50% of the growth of the GDP. For each referral, we can measure how much the GDP has grown since the previous purchase, so we can measure how much at most the supply of UDT should grow, capping it at half the growth of the GDP.

## Premine

When UDT are released for the first time, there is a 1,000,000 UDT pre-mine. There are multiple goal to the premine:

1. create a Uniswap pool to set an early price on UDT,
2. ensure that the Unlock team initially retains control of the protocol,
3. create programs to incentivize development

## Developer reward

In order to sustain the work of the team which is creating and maintaining the protocol, the reward is split between the person making the referral \(Alice in the example above\) and the Unlock maintainer, with a 80%-20% balance, which could later be updated, via a protocol upgrade. The Unlock maintainer could finance work on the protocol by selling some of the tokens it receives as developer rewards.

## Governance

Unlock Tokens will be used for governance. Eventually, protocol upgrades will be decided through voting with a system where votes are tied to UDT ownership\). For this, we will leverage the upgradability nature of the Unlock contract so that only upgrades that have been approved by a majority of voters can be executed.

## Future improvements

We expect the community to eventually control the protocol and its upgrades. These upgrades may include new functionality for the protocol itself, ways to reward token holder \(maybe through discounts, or thru buy-back and burn mechanisms... etc\).

## Multi-chain support

We believe the Unlock Protocol can \(and will\) be deployed on any EVM-compatible chain or environment. As such, each of these deployment will have its own version of UDT. However, the canonical instance of UDT will be deployed on the Ethereum main-net and our goal is to build mechanisms to peg the side-chains UDT to the UDT on the mainnet. Details of the mechanism to enable side chains to also reward adoption with UDT [can be found on this page](/governance/the-unlock-token/side-chains-and-layer-2).

## Economic incentives

### Growth of supply

The supply of UDT is expected to grow as long as the network grows since each new referral will mint new tokens. However, the growth of supply is capped by the growth of GDP. As GDP grows faster than the supply, each UDT becomes more valuable.
