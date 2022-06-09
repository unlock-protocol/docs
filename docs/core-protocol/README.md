# Smart Contracts

The Unlock Protocol, at its core, is enabled by 2 primary Ethereum smart contracts, deployed on all networks supported by Unlock: the Unlock and the PublicLock contracts. We have a few more contracts, such as the governance token contract and the actual governance contract, but they are not actually required by the core protocol.

Our contracts have [been audited](audits.md) by 3 different teams.

## **Unlock**

This is our "factory" contract **(Unlock.sol)** and has several roles.

<<<<<<< HEAD:docs/core-protocol/README.md
- **Deploying Locks**: Locks are deployed through the Unlock smart contract. This is important because the Locks will actually invoke the Unlock smart contract when keys are sold and the Unlock smart contract will check that the invoking lock has been deployed through it.
- **Keeping Track of the Unlock Discount Tokens**. Unlock Discount Tokens are ERC20 tokens which implement the Unlock network referral program to let users of the protocol govern it. The Discount Tokens are granted when keys (NFTs) are purchased.
=======
* **Deploying Locks**: Locks are deployed through the Unlock smart contract. This is important because the Locks will actually invoke the Unlock smart contract when keys are sold and the Unlock smart contract will check that the invoking lock has been deployed through it.
* **Keeping Track of the Unlock Discount Tokens**. Unlock Discount Tokens are ERC20 tokens that implement the Unlock network referral program to let users of the protocol govern it. The Discount Tokens are granted when keys (NFTs) are purchased.
>>>>>>> 10c3efe6e24bbe45dd21784e682067419bc73d40:developers/smart-contracts/README.md

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

Please, refer to the [Unlock contract documentation](unlock-api.md) for more details.

## **Lock Contract**

This is the contract (**PublicLock.sol**) which users can configure and deploy to restrict access to resources, such as a blog, a subset of software features, or an event.

Each lock is a standalone contract with its own deployment, address, and storage. As per v9, locks can be entirely untethered and still fully functional even without access to the main Unlock contract.

- Each lock contract is an [ERC-721](https://eips.ethereum.org/EIPS/eip-721) compliant contract capable of creating and managing NFTs (non-fungible tokens we call "Keys"), as well as restricting access based on the user's possession (or lack of) one of these keys.
- Keys for one lock are valid only for the lock which created them.
- A given user may own only 1 key (NFT) at a time.

You can call and inspect the Lock contracts directly using the block explorers as well.

### Production Networks

- Ethereum mainnet
  - v0 [`0x1cb8bb92cb7ade4d7d52eb0a870514a9198fa6d7`](https://etherscan.io/address/0x1cb8bb92cb7ade4d7d52eb0a870514a9198fa6d7#readContract)
  - v1 [`0x3909b9546a4b147c2a904446ac22381f0163b8b6`](https://etherscan.io/address/0x3909b9546a4b147c2a904446ac22381f0163b8b6#readContract)
  - v2 Never Shipped
  - v3 [`0x1b75bc108a0259355475ce45cdfb5599361abcbe`](https://etherscan.io/address/0x1b75bc108a0259355475ce45cdfb5599361abcbe#code)
  - v4 [`0x00bd8952914eef42142612b6b2074405d95def71`](https://etherscan.io/address/0x00bd8952914eef42142612b6b2074405d95def71#readContract)
  - v5 [`0x28ee5846479b8d81389e24861d537fa170403b23`](https://etherscan.io/address/0x28ee5846479b8d81389e24861d537fa170403b23#code)
  - v6 [`0x03fed578d2c557f6b38b8d9d225383912703293a`](https://etherscan.io/address/0x03fed578d2c557f6b38b8d9d225383912703293a#readContract)
  - v7 [`0x004c79f785731d3f61be85ec84e27ba83fd4d20e`](https://etherscan.io/address/0x004c79f785731d3f61be85ec84e27ba83fd4d20e#readContract)
  - v8 [`0x61dbbac624e5a27fb54c6fa1548d8531ef84eb18`](https://etherscan.io/address/0x61dbbac624e5a27fb54c6fa1548d8531ef84eb18#readContract)
  - v9 [`0x443618dc1094b2a7bfbe768861a1e31ced5b39dc`](https://etherscan.io/address/0x443618dc1094b2a7bfbe768861a1e31ced5b39dc#readContract)
- Gnosis Chain (ex-xDAI):
  - v8 [`0xecA45DFEb9523B4ba883e46394b0fe0550869E9C`](https://blockscout.com/xdai/mainnet/address/0xecA45DFEb9523B4ba883e46394b0fe0550869E9C/contracts)
  - v9 [`0x24B1F322D4dFDCB9FdA365d147503347B388B6F8`](https://blockscout.com/xdai/mainnet/address/0x24B1F322D4dFDCB9FdA365d147503347B388B6F8/)
- Polygon (ex-Matic)
  - v8 [`0x39cdcae0a5ce740581330e689713df92da47e78a`](https://polygonscan.com/address/0x39cdcae0a5ce740581330e689713df92da47e78a#code)
  - v9 [`0xfc0FdB39aeA6B599990F050928e97903b10a550d`](https://polygonscan.com/address/0xfc0FdB39aeA6B599990F050928e97903b10a550d#readProxyContract)
- Binance Smart Chain:
  - v8 [`0x419195a71d6ae592bb4846266e907b5c1202f9ee`](https://bscscan.com/address/0x419195a71d6ae592bb4846266e907b5c1202f9ee#readContract)
  - v9 [`0xa9584e6cbaf88c09e5ede06865211ba28febd077`](https://bscscan.com/address/0xa9584e6cbaf88c09e5ede06865211ba28febd077#code)
- Optimistic Ethereum:
  - v8 [`0x4064206b0a1f5ba603dd8016ee36141f54506051`](https://optimistic.etherscan.io/address/0x4064206b0a1f5ba603dd8016ee36141f54506051)
  - v9 [`0xa9584e6cbaf88c09e5ede06865211ba28febd077`](https://optimistic.etherscan.io/address/0xa9584e6cbaf88c09e5ede06865211ba28febd077#code)

### Test Networks

- Rinkeby
  - v0 [`0x014000237127bfe5955936ac7e7b7a4451321bbf`](https://rinkeby.etherscan.io/address/0x014000237127bfe5955936ac7e7b7a4451321bbf)
  - v1 [`0x0cc9aa747e6db7ae984ea95217d1ff34e7acd80c`](https://rinkeby.etherscan.io/address/0x0cc9aa747e6db7ae984ea95217d1ff34e7acd80c)
  - v2 Never Shipped
  - v3 [`0x677f09a88b3a1fdccfddab6e6cfd63dd02cbfa7c`](https://rinkeby.etherscan.io/address/0x677f09a88b3a1fdccfddab6e6cfd63dd02cbfa7c#readContract)
  - v4 [`0x771e09a5bfef4c4b85d796a112d49e839c98d9da`](https://rinkeby.etherscan.io/address/0x771e09a5bfef4c4b85d796a112d49e839c98d9da#readContract)
  - v5 [`0x9247b6b605a52359822b429b4c5ef74c1fb6740e`](https://rinkeby.etherscan.io/address/0x9247b6b605a52359822b429b4c5ef74c1fb6740e#readContract)
  - v6 [`0x43fbb379295934146ef5321f77eb848b86169bd9`](https://rinkeby.etherscan.io/address/0x43fbb379295934146ef5321f77eb848b86169bd9#readContract)
  - v7 [`0xad496b433d6a8cb25c47eabb4604e1dff409622f`](https://rinkeby.etherscan.io/address/0xad496b433d6a8cb25c47eabb4604e1dff409622f#code)
  - v8 [`0x90de74265a416e1393a450752175aed98fe11517`](https://rinkeby.etherscan.io/address/0x90de74265a416e1393a450752175aed98fe11517#code)
  - v9 [`0xa55f8ba16c5bb580967f7dd94f927b21d0acf86c`](https://rinkeby.etherscan.io/address/0xa55f8ba16c5bb580967f7dd94f927b21d0acf86c#code)

Please, refer to the [Lock contract documentation](lock-api/) for more details.

## Upgradeability

We're making use of upgradeable contracts via [openzeppelin](https://docs.openzeppelin.com/cli/2.6/contracts-architecture) 's approach which leverages proxy contracts. What does this mean for users? First, when interacting with the **Unlock** contract (via the [dashboard](https://app.unlock-protocol.com/dashboard/), [etherscan](https://etherscan.io/address/0x3d5409cce1d45233de1d4ebdee74b8e004abdd13#code), from another smart contract, or from a new UI you build) you will always be interacting with the most recent version of the contract. Under the hood, the contract you interact with is actually a [proxy](https://github.com/OpenZeppelin/openzeppelin-sdk/blob/master/packages/lib/contracts/upgradeability/InitializableAdminUpgradeabilityProxy.sol) contract, so its address never changes. When we upgrade to a new version of Unlock, the proxy is also updated to delegate all calls to the new version of Unlock.

### What about Locks?

Good question. Until version 10, **Deployed locks are immutable**. That is, while they can be re-configured, disabled, or destroyed _by their owner_, they will otherwise remain unchanged on their EVM network for as long as it persists. Nobody else can modify a lock you deployed but you, unless you choose to allow this. After an upgrade of Unlock, all new locks deployed moving forward will be of the new version, and may support new features and/or improved usability.

Starting with version 10, we are introducing upgradable locks. These locks are still deployed and owned by their creator (who is the sole lock manager initially), but they can later be upgraded to support new features introduced by the protocol, by their lock managers only. The upgrades are optional and can only be triggered by the lock managers themselves.

### Npm Modules

Each version of the contracts is available via the `@unlock-protocol/contracts` module. Among other things, this module includes the compiled artifacts for both Unlock.sol and PublicLock.sol, as well as the interfaces for our contracts, a changelog and, the commit hash for this version. This allows us (or anyone) to support multiple versions when building on Unlock!

#### How to use

```shell
yarn add @unlock-protocol/contracts
```

```js
// get latest
import unlock from "@unlock-protocol/contracts/abis/Unlock";

// get previous versions
import unlock from "@unlock-protocol/contracts/abis/UnlockV0";
import { UnlockV0 } from "@unlock-protocol/contracts";
```

```solidity
import "@unlock-protocol/contracts/dist/Unlock/UnlockV0.sol";
```

## Standards

Other standards which Unlock adheres to are:

- [erc-1167](https://eips.ethereum.org/EIPS/eip-1167) - Minimal Proxy Contract
- [erc-165](https://eips.ethereum.org/EIPS/eip-165) - Standard Interface Detection
- [erc-712](https://eips.ethereum.org/EIPS/eip-712) - Ethereum typed structured data hashing and signing (**in progress**)
- [erc-20](https://eips.ethereum.org/EIPS/eip-20) - Token Standard (**in progress)**
