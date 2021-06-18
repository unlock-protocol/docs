# Side-chains and layer 2

Unlock tokens are deployed on the main Ethereum network. We consider them to be the "main" UDT. Due to very high gas prices, purchasing Unlock memberships on the Ethereum mainnet is often not economically viable. For this reason, we have deployed the Unlock protocol on the multiple side chain and we will soon deploy it on several more layer 2 and side chains. However, in the current state of the EVM, users of Unlock on a side chain cannot earn UDT from the main chain.

This document exposes the approach we are taking to allow all users of Unlock, on any side chain, to earn UDT.

UDT is inflationary, which means that new UDT tokens are created for every new membership purchased. However, it is not possible to increase the supply of UDT on the side chains/layer 2. For this reason, the Unlock Protocol will behave differently on side chains: instead of minting new tokens on side chains, through governance, we will transfer some tokens from the main network to the side chain. For this we will use "standard" ERC20 bridges fo each chain.

The tokens transferred to the side chain will then be assigned to the Unlock contract on the side chain, and distributed with each purchase using an asymptotic curve \(instead of a log curve for the main-net\).

Using this approach we guarantee that no new supply is added to the circulating supply unless it was "earned" by users, while still being able to incentivize adoption on side chains. It would also be possible, through governance again, to "top up" the tokens distributed by a side chain if token holders wanted to drive adoption.

Users who have earned side chain UDT are welcome to bring these UDT back to the main-net network if they want to participate in governance there, or can transfer them to any of the other side chains where they could join more "local" governance decisions.

Formula \(note: the same mechanism limiting the amount of tokens minted to gas spent applies here\). If the side chain has an available supply of N to distribute. For a GDP growth of 𝝙, the reward is 𝝙/\(2\*\(1+𝝙\)\). This number is between 0 and 0.5 for any 𝝙 between 0 and Infinity. This means that the "reserve" is never fully distributed but the amount of tokens distrubuted with every new purchase decreases.

Sidechains/L2 on which UDT have been deployed (bridged from mainnet):

* xDAI: 
  * UDT: [0x24Cb95c7f0c39759c4165b053730126C7102BbE8](https://blockscout.com/xdai/mainnet/tokens/0x24Cb95c7f0c39759c4165b053730126C7102BbE8)
  * Pool: [0x679678311239967536f83a40d45f18a0c84af4cb](https://info.honeyswap.org/#/pair/0x679678311239967536f83a40d45f18a0c84af4cb) 
  * Oracle: [0x5553712a8d7c56a4EF54488d1628684A2948F756](https://blockscout.com/xdai/mainnet/address/0x5553712a8d7c56a4EF54488d1628684A2948F756)
* Polygon: 
  * UDT: [0xf7e78d9c4c74df889a83c8c8d6d05bf70ff75876](https://polygonscan.com/address/0xf7e78d9c4c74df889a83c8c8d6d05bf70ff75876)
  * Pool: [0xc0f0bb742168ce7cd7533353e48869ee82a9401a](https://info.quickswap.exchange/pair/0xc0f0bb742168ce7cd7533353e48869ee82a9401a)
  * Oracle: [0xe20ef269ce3ac2af8107e706fc2ec6e1831e3125](https://polygonscan.com/address/0xe20ef269ce3ac2af8107e706fc2ec6e1831e3125)
