---
title: Unlock DAO
description: >-
  The Unlock Protocol is a public good aimed at being governed by a DAO of its
  users and developers.
sidebar_position: 2
---

# Unlock DAO Contract

The Unlock DAO uses OpenZeppelin's [governance contracts](https://blog.openzeppelin.com/governor-smart-contract/) and can be found at these addresses:

- [Governor Contract](https://etherscan.io/address/0x7757f7f21f5fa9b1fd168642b79416051cd0bb94) \(`0x7757f7f21f5fa9b1fd168642b79416051cd0bb94`\): where proposals and votes are handled
- [TimeLock Contract](https://etherscan.io/address/0x17eedfb0a6e6e06e95b3a1f928dc4024240bc76b) \(`0x17eedfb0a6e6e06e95b3a1f928dc4024240bc76b`\): where proposals are executed and funds are managed.

> We recommend the use of [Tally's front-end application](https://www.withtally.com/governance/unlock) to delegate votes, submit proposals as well as vote on the proposals previously submitted.

## Initial settings

The governor contract has been configured with the following initial characteristics:

- Anyone can submit a proposal \(no ownership threshold\)
- Voting length: 8 days
- Quorum: 15,000 votes \(current supply owned by the community is around 45,000 tokens\)
- Time lock duration: 7 days.

All of these settings can be changed by the community through a proposal.

## Allocated funds

As part of the launch of the DAO, Unlock Inc. has allocated the following to the Time Lock contract \(which manages the funds of the DAO\):

- 5,000 UDT available immediately \([tx1](https://etherscan.io/tx/0x8d726c90d70817d8b865c13a38b85689f22fc9ab030db3a1742bdb5eefee3a92), [tx2](https://etherscan.io/tx/0x8d726c90d70817d8b865c13a38b85689f22fc9ab030db3a1742bdb5eefee3a92)\)
- 95,000 UDT streamed over 1 year \([sablier](https://app.sablier.finance/stream/100400)\)
- 170.23 Uniswap Liquidity Provider tokens from the UDT/Eth pool \([tx1](https://etherscan.io/tx/0x91d19da260fae927a2eb28fa6655838e1a32e226da6d82144753af2517042b9c), [tx2](https://etherscan.io/tx/0x91d19da260fae927a2eb28fa6655838e1a32e226da6d82144753af2517042b9c)\)
- We have subsequently transfered the remainder of the first community airdrop to the DAO.

## Next steps

Unlock Inc. will allocate more funds to the DAO as well as transfer ownership of some of its processes, including our [grants program](../grants-bounties)!

We will also eventually move ownership of the [Unlock contracts](../core-protocol/Unlock/) and its upgrade admin contract.

## Delegating

Every token holder is invited to delegate their tokens. This process is required to make these tokens be accounted for when voting. Token holders can delegate to themselves or to another address. If they delegate to themselves, they will then be expected to vote.

Delegation is done _by address_, which means that there is no need to delegate again when the balance of tokens of an address changes.

When a delegation was submitted, the "weight" of each address's vote is based on how many tokens have been delegated to them, at the time of the proposal submission.

### Unlock Inc. Delegation

Unlock Inc. has indicated that we will never use the company's owned tokens to vote on proposals for as long as we own a majority of the governance tokens. However, in order to facilitate governance, we have delegated some of the tokens we own to multiple entities, including some of our investors, some projects that we're partnering with, as well as other DAOs and community that the Unlock Inc. team could bring valuable diversity of opinion, culture and help promote adoption of the protocol.

If you or your team is interested in becoming a delegate, please reach out.

## Making a proposal

A proposal is code that will be executed by the TimeLock smart contract if it has been approved. A proposal can then only include _onchain_ actions, such as "transfer X to tokens to address A", or "upgrade contract to be using implementation X"... etc.

At this point, _anyone_ can make a proposal by submitting it to the DAO contract. The Tally UI offers and easy way to make these proposals, but you are welcome to use any other relevant tool as well.

Once the proposal has been submitted, the delegates have 8 days to express their preferences, between voting in "favor", "against" or "abstain". Proposals have to be carefully tested by each delegate to assert what impact they will actually have, and if they are indeed desirable for the protocol. Given their _unstoppable_ nature, and the fact that a rogue or buggy proposal could not be reverted, it is absolutely critical that every single vote is done thoughtfuly. Additionaly, some delegates might want to consult the token holders who have delegated to them before making a final decision.

Given how much scrutiny is expected from delegates, we strongly advise anyone who intends to make a proposal to advertise it _before_ submitting it in order to raise as much awareness as possible and give enough time to delegates to make a decision. This can happen on the Unlock forum website, on Discord, or any other place where community members and delegates are expected to be able to ask questions and get answers.

## Rewarding participation

Unlock Inc. wants to foster a healthy community and ease participation in the DAO and governance process. We announced in November 2021 that we will use some of the pre-mined tokens we own to reward delegates who vote consistently as well as the token holders who have delegated to them.

We expect that DAO to be able to make similar efforts in the future as a way to ensure's the governance sustainability.
