---
description: >-
  The Unlock Protocol is a public good aimed at being governed by a DAO of its
  users and developers.
---

# Unlock DAO

The Unlock DAO uses OpenZeppelin's [governance contracts](https://blog.openzeppelin.com/governor-smart-contract/) and can be found at these addresses:

* [Governor Contract](https://etherscan.io/address/0x7757f7f21f5fa9b1fd168642b79416051cd0bb94) \(`0x7757f7f21f5fa9b1fd168642b79416051cd0bb94`\): where proposals and votes are handled
* [TimeLock Contract](https://etherscan.io/address/0x17eedfb0a6e6e06e95b3a1f928dc4024240bc76b) \(`0x17eedfb0a6e6e06e95b3a1f928dc4024240bc76b`\): where proposals are executed and funds are managed.

### Initial settings

The governor contract has been configured with the following initial characteristics:

* Anyone can submit a proposal \(no ownership threshold\)
* Voting length: 8 days
* Quorum: 15,000 votes \(current supply owned by the community is around 45,000 tokens\)
* Time lock duration: 7 days.

All of these settings can be changed by the community thru a proposal.

### Allocated funds

As part of the launch of the DAO, Unlock Inc. has allocated the following to the Time Lock contract \(which manages the funds of the DAO\):

* 5,000 UDT available immediately \([tx1](https://etherscan.io/tx/0x8d726c90d70817d8b865c13a38b85689f22fc9ab030db3a1742bdb5eefee3a92), [tx2](https://etherscan.io/tx/0x8d726c90d70817d8b865c13a38b85689f22fc9ab030db3a1742bdb5eefee3a92)\)
* 95,000 UDT streamed over 1 year \([sablier](https://app.sablier.finance/stream/100400)\)
* 170.23 Uniswap Liquidity Provider tokens from the UDT/Eth pool \([tx1](https://etherscan.io/tx/0x91d19da260fae927a2eb28fa6655838e1a32e226da6d82144753af2517042b9c), [tx2](https://etherscan.io/tx/0x91d19da260fae927a2eb28fa6655838e1a32e226da6d82144753af2517042b9c)\)

### Next steps

Unlock Inc. will allocate more funds to the DAO as well as transfer ownership of some of its processes, including our [grants program](grants-bounties-and-matchings.md)! 

We will also eventually move ownership of the [Unlock contracts](../developers/smart-contracts/unlock-api.md) and its upgrade admin contract.

