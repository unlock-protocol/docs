## **Unlock**

This is our "factory" contract **(Unlock.sol)** and has several roles.

**Deploying Locks**: Locks are deployed through the Unlock smart contract. This is important because the Locks will actually invoke the Unlock smart contract when keys are sold and the Unlock smart contract will check that the invoking lock has been deployed through it.

**Keeping Track of the Unlock Discount Tokens**. Unlock Discount Tokens are ERC20 tokens that implement the Unlock network referral program to let users of the protocol govern it. The Discount Tokens are granted when keys (NFTs) are purchased.

You should **not need to deploy an Unlock contract yourself**. Here are the addresses of contracts deployed on respective networks and you can call them directly using the block explorer.

### Production networks

- Ethereum mainnet: [`0x3d5409cce1d45233de1d4ebdee74b8e004abdd13`](https://etherscan.io/address/0x3d5409cce1d45233de1d4ebdee74b8e004abdd13)
- Gnosis Chain (ex-xDAI): [`0x1bc53f4303c711cc693F6Ec3477B83703DcB317f`](https://blockscout.com/xdai/mainnet/address/0x1bc53f4303c711cc693F6Ec3477B83703DcB317f)
- Polygon (ex-Matic): [`0xE8E5cd156f89F7bdB267EabD5C43Af3d5AF2A78f`](https://polygonscan.com/address/0xE8E5cd156f89F7bdB267EabD5C43Af3d5AF2A78f)
- Binance Smart Chain: [`0xeC83410DbC48C7797D2f2AFe624881674c65c856`](https://bscscan.com/address/0xeC83410DbC48C7797D2f2AFe624881674c65c856)
- Optimistic Ethereum: [`0x99b1348a9129ac49c6de7F11245773dE2f51fB0c`](https://optimistic.etherscan.io/address/0x99b1348a9129ac49c6de7F11245773dE2f51fB0c)

### Test networks

- Rinkeby: [`0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b`](https://rinkeby.etherscan.io/address/0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b)
- Kovan (outdated, please use Rinkeby if possible): [`0x0B9fe963b789151E53b8bd601590Ea32F9f2453D`](https://kovan.etherscan.io/address/0x0B9fe963b789151E53b8bd601590Ea32F9f2453D)

# About the Unlock Smart Contract

The Unlock contract is a **factory contract**. Its main purpose is to create new locks based on a template. Additionally, it keeps track of locks after they have been created and grants [Unlock tokens](../../governance/the-unlock-token/) when new memberships have been purchased.

As of summer 2021, the unlock contract is **owned** by a multi-sig wallet managed by Unlock Inc. Our goal is to move toward decentralization by transferring ownership of the Unlock contact to [the Unlock DAO](../../governance/unlock-dao.md).

This contract is upgradable using OpenZeppelin's upgradability framework. As of now, the ProxyAdmin is **owned** by a multi-sig wallet managed by Unlock Inc. Our goal is to move toward decentralization by transferring ownership of the Unlock contact to the [Unlock DAO](../../governance/unlock-dao.md). Each implementation is versioned. The method `unlockVersion()` will yield the current version.
