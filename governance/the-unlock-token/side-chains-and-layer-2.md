# Side-chains and layer 2

Unlock tokens are deployed on the main Ethereum network. We consider them to be the "main" UDT. Due to very high gas prices, purchasing Unlock memberships on the Ethereum mainnet is currently not economically viable. For this reason, we have deployed the Unlock protocol on the xDAI side chain and we will soon deploy it on several more layer 2 and side chains. However, in the current state, users of Unlock on xDAI cannot earn UDT from the main chain.

This document exposes the approach we will be taking to allow all users of Unlock, on any side chain, to earn UDT.

UDT is inflationary, which means that new UDT tokens are created for every new membership purchased. However, it is not possible to increase the supply of UDT on the side chains/layer 2. For this reason, the Unlock Protocol will behave differently on side chains: instead of minting new tokens on side chains, through governance, we will transfer some tokens from the main network to the side chain. For this we will use "standard" ERC20 bridges.

The tokens transferred to the side chain will then be assigned to the Unlock contract on the side chain, and distributed with each purchase using an asymptotic curve \(instead of a log curve for the main-net\).

Using this approach we guarantee that no new supply is added to the circulating supply unless it was "earned" by users, while still being able to incentivize adoption on side chains. It would also be possible, through governance again, to "top up" the tokens distributed by a side chain if token holders wanted to drive adoption.

Users who have earned side chain UDT are welcome to bring these UDT back to the main-net network if they want to participate in governance there, or can transfer them to any of the other side chains where they could join more "local" governance decisions.

Formula \(note: the same mechanism limiting the amount of tokens minted to gas spent applies here\). If the side chain has an available supply of N to distribute. For a GDP growth of 𝝙, the reward is 1 - 1 / \(2 \* \(1+𝝙\)\). This number is between 0 and 0.5 for any 𝝙 between 0 and Infinity. This means that the "reserve" is never fully distributed but the amount of tokens distrubuted with every new purchase decrases.

Status: [WIP](https://github.com/unlock-protocol/unlock/pull/7087).

