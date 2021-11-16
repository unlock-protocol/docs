# Smart Contracts

The Unlock Protocol, at it's core, is enabled by 2 primary Ethereum smart contracts, deployed on all networks supported by Unlock: the Unlock and the PublicLock contracts. We have a few more contracts, such as the governance token contract and the actual governance contract but they are not actually required by the core protocol.
## **Unlock**

This is our "factory" contract **(Unlock.sol)** and has several roles.

* **Deploying Locks**: locks are deployed through the Unlock smart contract. This is important because the Locks will actually invoke the Unlock smart contract when keys are sold and the Unlock smart contract will check that the invoking lock has been deployed through it.
* **Keeping Track of the Unlock Discount Tokens**. Unlock Discount Tokens are ERC20 tokens which implement the Unlock network referral program to let users of the protocol govern it. The Discount Tokens are granted when keys (NFT) are purchased.

You should **not need to deploy an Unlock contract yourself**. Here are the addresses of contracts deployed on respective networks and you can call them directly using the block explorer.
### Production networks:

1. Ethereum mainnet: [`0x3d5409cce1d45233de1d4ebdee74b8e004abdd13`](https://etherscan.io/address/0x3d5409cce1d45233de1d4ebdee74b8e004abdd13)
2. Xdai: [`0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863`](https://blockscout.com/xdai/mainnet/address/0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863) (configure [MetaMask for xDAI](https://www.xdaichain.com/for-users/wallets/metamask))
3. Polygon (ex-Matic): [`0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863`](https://polygonscan.com/address/0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863)
4. Binance Smart Chain: [`0x99b1348a9129ac49c6de7F11245773dE2f51fB0c`](https://bscscan.com/address/0x99b1348a9129ac49c6de7F11245773dE2f51fB0c)

### Test networks:

* Rinkeby: [`0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b`](https://rinkeby.etherscan.io/address/0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b)
* Kovan: [`0x0B9fe963b789151E53b8bd601590Ea32F9f2453D`](https://kovan.etherscan.io/address/0x0B9fe963b789151E53b8bd601590Ea32F9f2453D)

Please, refer to the [Unlock contract documentation](unlock-api.md) for more details.

Please, refer to the [Unlock contract documentation](unlock-api.md) for more details.
## **Lock Contract**

This is the contract (**PublicLock.sol**) which users can configure and deploy to restrict access to resources, such as a blog, a subset of software features, or an event.

* Each lock contract is an [ERC-721](https://eips.ethereum.org/EIPS/eip-721) compliant contract capable of creating and managing NFT's (non-fungible tokens we call "Keys"), as well as restricting access based on the user's possession (or lack of) one of these keys.
* Keys for one lock are valid only for the lock which created them.
* A given user may own only 1 key (NFT) at a time.

There as well you can call the Lock contracts directly using the block explorers.

Please, refer to the [Lock contract documentation](lock-api/) for more details.

## Upgradeability

We're making use of upgradeable contracts via [openzeppelin](https://docs.openzeppelin.com/cli/2.6/contracts-architecture) 's approach which leverages proxy contracts. What does this mean for users? First, when interacting with the **Unlock** contract ( via the [dashboard](https://app.unlock-protocol.com/dashboard/), [etherscan](https://etherscan.io/address/0x3d5409cce1d45233de1d4ebdee74b8e004abdd13#code), from another smart-contract, or from a new UI you build, you will always be interacting with the most recent version of the contract. Under the hood, the contract you interact with is actually a [proxy](https://github.com/OpenZeppelin/openzeppelin-sdk/blob/master/packages/lib/contracts/upgradeability/InitializableAdminUpgradeabilityProxy.sol) contract, so its address never changes. When we upgrade to a new version of Unlock, the proxy is also updated to delegate all calls to the new version of Unlock.

#### What about Locks?

Good question. Until version 10, **Deployed locks are immutable**. That is, while they can be re-configured, disabled or destroyed _by their owner_, they will otherwise remain unchanged on the ethereum network for as long as it persists. Nobody else can modify a lock you deployed but you, unless you choose to allow this. After an upgrade of Unlock, all new locks deployed moving forward will be of the new version, and may support new features and/or improved usability.

Starting with version 10, we are introducing upgradable locks. These locks are still deployed and owned by their creator, but they can later be upgraded to support new features introduced by the protocol, by their lock mnanagers only. The upgrades are optional and can only be triggered by the lock managers themselves.

### Npm Modules

Each version of the contracts is available via the `@unlock-protocol/contracts` module. Among other things, this module includes the compiled artifacts for both Unlock.sol and PublicLock.sol, as well as the interfaces for our contracts, a change log and the commit hash for this version. This allows us \(or anyone\) to support multiple versions when building on Unlock!

#### How to use

```shell
yarn add @unlock-protocol/contracts
```

**With javascript**

```js
// get latest
import unlock from '@unlock-protocol/contracts/abis/Unlock'

// get previous versions
import unlock from '@unlock-protocol/contracts/abis/UnlockV0'
import { UnlockV0 } from '@unlock-protocol/contracts'
```


**With Solidity**

```solidity
import "@unlock-protocol/contracts/dist/Unlock/UnlockV0.sol";
```

## Standards

Other standards which Unlock adheres to are:

* [erc-1167](https://eips.ethereum.org/EIPS/eip-1167) - Minimal Proxy Contract
* [erc-1820](https://eips.ethereum.org/EIPS/eip-1820) - Pseudo-introspection Registry Contract
* [erc-165](https://eips.ethereum.org/EIPS/eip-165) - Standard Interface Detection
* [erc-712](https://eips.ethereum.org/EIPS/eip-712) - Ethereum typed structured data hashing and signing (**in progress**)
* [erc-20](https://eips.ethereum.org/EIPS/eip-20) - Token Standard (**in progress)**
