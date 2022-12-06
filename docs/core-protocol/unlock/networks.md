# Networks

You should **not need to deploy an Unlock contract yourself**. Here are the addresses of contracts deployed on respective networks and you can call them directly using the block explorer.

The core team has built a `networks` [npm module](https://www.npmjs.com/package/@unlock-protocol/networks) that includes all the networks' addresses as well as [rpc endpoints](../../tools/rpc-provider.md) that you can use for debugging purposes: `@unlock-protocol/networks`.

## Ethereum

The most popular network

- chainId: 1
- native currency: Ether (Eth)
- unlockAddress: [`0x3d5409CcE1d45233dE1D4eBDEe74b8E004abDD13`](https://etherscan.io/address/0x3d5409CcE1d45233dE1D4eBDEe74b8E004abDD13)

## Goerli (Testnet)

Main Ethereum test network. Do not use for production

- chainId: 5
- native currency: ETH (ETH)
- unlockAddress: [`0x627118a4fB747016911e5cDA82e2E77C531e8206`](https://goerli.etherscan.io/address/0x627118a4fB747016911e5cDA82e2E77C531e8206)

## Optimism

Layer 2 network. Cheaper transaction cost.

- chainId: 10
- native currency: Eth (Eth)
- unlockAddress: [`0x99b1348a9129ac49c6de7F11245773dE2f51fB0c`](https://optimistic.etherscan.io/address/0x99b1348a9129ac49c6de7F11245773dE2f51fB0c)

## Binance Smart Chain

EVM compatible network. Cheaper transaction cost.

- chainId: 56
- native currency: BNB (BNB)
- unlockAddress: [`0xeC83410DbC48C7797D2f2AFe624881674c65c856`](https://bscscan.com/address/0xeC83410DbC48C7797D2f2AFe624881674c65c856)

## Gnosis Chain

EVM compatible network whose base currency is a stable coin. Cheaper transaction cost.

- chainId: 100
- native currency: DAI (DAI)
- unlockAddress: [`0x1bc53f4303c711cc693F6Ec3477B83703DcB317f`](https://blockscout.com/poa/xdai/address/0x1bc53f4303c711cc693F6Ec3477B83703DcB317f/transactions)

## Polygon

Popular side chain network. Cheaper transaction cost.

- chainId: 137
- native currency: Matic (MATIC)
- unlockAddress: [`0xE8E5cd156f89F7bdB267EabD5C43Af3d5AF2A78f`](https://polygonscan.com/address/0xE8E5cd156f89F7bdB267EabD5C43Af3d5AF2A78f)

## Arbitrum

Arbitrum One is a Layer 2 (L2) chain running on top of Ethereum Mainnet that enables high-throughput, low cost smart contracts operations.

- chainId: 42161
- native currency: ETH (ETH)
- unlockAddress: [`0x1FF7e338d5E582138C46044dc238543Ce555C963`](https://arbiscan.io/address/0x1FF7e338d5E582138C46044dc238543Ce555C963)

## Celo

Celo is a EVM compatible proof-of-stake blockchain designed for mobile with the ability to pay gas with tokens or stablecoins.

- chainId: 42220
- native currency: CELO (CELO)
- unlockAddress: [`0x1FF7e338d5E582138C46044dc238543Ce555C963`](https://celoscan.io/address/0x1FF7e338d5E582138C46044dc238543Ce555C963)

## Avalanche (C-Chain)

Avalanche is an open, programmable smart contracts platform for decentralized applications.

- chainId: 43114
- native currency: AVAX (AVAX)
- unlockAddress: [`0x70cBE5F72dD85aA634d07d2227a421144Af734b3`](https://snowtrace.io/address/0x70cBE5F72dD85aA634d07d2227a421144Af734b3)

## Mumbai (Polygon)

Polygon test network. Do not use for production

- chainId: 80001
- native currency: MATIC (MATIC)
- unlockAddress: [`0x1FF7e338d5E582138C46044dc238543Ce555C963`](https://mumbai.polygonscan.com/address/0x1FF7e338d5E582138C46044dc238543Ce555C963)
