---
description: >-
  Our Unlock Discount Tokens will ensure the self-sustainability and full
  decentralization of the Unlock Protocol. This doc explains the steps to reach
  a point where UDT are live on mainnet.
---

# The Path to UDT!

## Release UDT minting

1. Upgrade to v8 \(thru Multisig\) : \#25 on [Unlock's team Gnosis Multisig](https://etherscan.io/address/0xa39b44c4AFfbb56b76a1BF1d19Eb93a5DfC2EBA9)
2. Use [`zos`](https://openzeppelin.com/sdk/) to deploy the UDT ERC20 contract from a "known" address \(deploying from a known address is easier than from the multisig... later in the process, we transfer back control to the multisig\). [transaction](https://etherscan.io/tx/0x1c7e7771766946cb100bc3e0a2bf4797dcc13d4c43ce82469a94b0187752dff3), [contract](https://etherscan.io/address/0x90de74265a416e1393a450752175aed98fe11517) 
3. Premine 1,000,000 tokens \(this has very little impact on long term behavior of the protocol, but allows to work on liquidity in the early days\): [transaction](https://etherscan.io/tx/0xfacea4358297b0a9f8536b8dd25dd29b412deb9f8737b43c0ddaaf89b9f525d2)
4. Add [Unlock Protocol contract](https://etherscan.io/address/0x3d5409cce1d45233de1d4ebdee74b8e004abdd13) as minter so that new tokens can be created upon key purchases: [transaction](https://etherscan.io/tx/0x7c66279251a60828f013f64a267494e2aa8f94d31fe56d32425c70ec3a195cb0)
5. Create Eth-UDT pair on Uniswap for the purpose of providing a market rate to UDT. contract, [transaction](https://etherscan.io/tx/0x43eb3cc370a1a2eade1b2e60b49e26f19a0472e29adfe81ec57f39963839ca11), [contract](https://etherscan.io/address/0x9ca8aef2372c705d6848fdda3c1267a7f51267c1#code), [Uniswap](https://app.uniswap.org/#/add/ETH/0x90DE74265a416e1393A450752175AED98fe11517)
6. Deploy Oracle for Uniswap in order to collect UDT price from pool. [transaction](https://etherscan.io/tx/0xb36acd88ba7b2c92b18d0d66979b4f5262b91c72cca850da5e9574bceed8e5cd), [contract](https://etherscan.io/address/0xe118d797e1c44f2e2a2823191a51d8b46a4a1d51). 
7. Configure Unlock to point to right UDT token, Wrapped Eth, gas estimate, symbol.. etc \(transaction \#26 on Multisig\)
8. Set Oracle in Unlock: transaction \#27 on Multisig.

After this, we checked that everything worked as expected, by sending the following key purchase: [https://etherscan.io/tx/0xb0e5f95ea980c1f096a841e5507f465827411cc29f80f8b95971a5241d9e81bb](https://etherscan.io/tx/0xb0e5f95ea980c1f096a841e5507f465827411cc29f80f8b95971a5241d9e81bb). Some UDT were minted, some of it went to the referrer, some of it to multisig as dev reward! 🎉

1. Forfeit minter role for "known" address: [transaction](https://etherscan.io/tx/0xd920671a9706d3f017bbe48b26407bc5f75ce6007b6a046e1a1cf6530ad96e54). After that only the Unlock Contract can mint tokens!

## Release UDT governance

In this step, we want to enable UDT holders to vote on upgrades. In practice this means we'll be moving away from the Unlock Inc Multisig toward some DAO where UDT represents "shares" and proposal \(upgrades\) are voted on by UDT holders.

