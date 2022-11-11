---
title: Contract definitions
description: Unlock governance token (UDT) set of definitions from the UDT
  smart contracts.
---

- **Status**: [partially implemented](the-path-to-udt.md). You can earn UDT today by using the protocol, or through [grants from the Unlock Treasury](/governance/grants-bounties).
- UDT on Ethereum mainnet [`0x90de74265a416e1393a450752175aed98fe11517`](https://etherscan.io/token/0x90de74265a416e1393a450752175aed98fe11517)
- UDT pool on Uniswap v2: [`0x9ca8aef2372c705d6848fdda3c1267a7f51267c1`](https://v2.info.uniswap.org/pair/0x9ca8aef2372c705d6848fdda3c1267a7f51267c1)
- Oracle: [`0xE118d797E1c44F2e2A2823191a51D8b46a4A1D51`](https://etherscan.io/address/0xE118d797E1c44F2e2A2823191a51D8b46a4A1D51)

### Lock

A Lock is a smart contract deployed on the Ethereum chain. It is managed by the person who deployed it but can be transferred to anyone \(including a 3rd party smart contract\). Any manager can also add more managers who can then update certain parameters of the lock. The lock acts as an "access control list" and keeps track of users who own a key \(see below\). Keys can be purchased from the lock and the lock defines their characteristics:

- key price \(amount and currency, Ether or ERC20\)
- key duration \(how long each key is valid for\)
- number of keys \(can be infinite\)
- lock name

The lock also defines a few other characteristics: a fee to be paid when transferring a key, and a cancellation fee... etc. Most of these can be set by any of the lock's manager.

The Unlock team does not have any special permission on deployed locks.

### Key

A Key is a non-fungible token represented by an entry inside of a lock. A key has an expiration after which it should not be considered valid anymore and which is set at the purchase time, based on the lock's duration setting. A key belongs to a single ethereum address. Keys can be transferred by default, but their owner.

Keys can be purchased by sending the required price to the corresponding lock \(the person purchasing the key does not have to be the owner of the key, which means someone can purchase the key for someone else\).

### Unlock smart contract

This is the "factory" from which all locks are created. This contract keeps track of all locks created. It also keeps track of several other network-wide metrics \(see below\), as well as the ability to mine Unlock Discount Tokens upon key purchases.

### Unlock Tokens \(UDT\)

These are Unlock native ERC20 tokens. They are minted progressively as the network grows \(see below\), and can be used for governance of the protocol or, possibly, to claim discounts when purchasing keys. These tokens can be transferred like other ERC20 tokens, provided that they are not "frozen" \(details below\).

### Unlock maintainer

The Unlock smart contract is upgradable in order to ensure that it can be improved as the network grows and our understanding of it increases. It should, however, tend toward being less and less changeable. Upgrades \(or other changes in parameters\) can initially only be performed by a single address called the Unlock maintainer. Eventually, the Unlock maintainer designation process should be decentralization through voting \(by both lock and UDT owners\). In the beginning, the Unlock Inc organization is the single maintainer of the Unlock smart contract via a multisig.

### GDP

Sum of all transactions happening through all locks across the network. It is computed in Eth, based on exchange rates from [Uniswap](https://uniswap.exchange/). Keys whose currency does not have an Ethereum exchange pair are not taken into account in the GDP calculation and cannot grant Unlock tokens. Note: the GDP can only grow \(or stay stable if no one is purchasing keys anymore\).
