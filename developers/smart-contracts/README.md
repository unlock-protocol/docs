# Smart Contracts

The unlock-protocol, at it's core, is enabled by 2 primary ethereum smart contracts.

## **Unlock**

This is our "factory" contract **\(Unlock.sol\)** and has several roles.

* Deploying Locks: locks are deployed through the Unlock smart contract. This is important because the Locks will actually invoke the Unlock smart contract when keys are sold and the Unlock smart contract will check that the invoking lock has been deployed through it.
* Keeping Track of the Unlock Discount Tokens. Unlock Discount Tokens are ERC20 tokens \(TODO\) which implement the Unlock network referral program. The Discount Tokens are granted when keys \(NFT\) are purchased.
* Granting Discounts. The Unlock smart contract will compute the available discount for each key purchase based on the amount of discount tokens owned by the key buyer.

## **Lock Contract**

This is the contract \(**PublicLock.sol**\) which users can configure and deploy to restrict access to resources, such as a blog, a subset of software features, or an event.

* Each lock contract is an [ERC-721](https://eips.ethereum.org/EIPS/eip-721) compliant contract capable of creating and managing NFT's \(non-fungible tokens we call "Keys"\), as well as restricting access based on the user's possession \(or lack of\) one of these keys.
* We follow [erc-1167](https://eips.ethereum.org/EIPS/eip-1167) to deploy minimal proxies for each lock, rather than a complete PublicLock contract. This helps to keep deployment costs down, as well as minimizing blockchain bloat.
* Keys for one lock are valid only for the lock which created them.
* A given user may own only 1 key at a time

## Upgradeability

We're making use of upgradeable contracts via [openzeppelin](https://docs.openzeppelin.com/cli/2.6/contracts-architecture) 's approach which leverages proxy contracts. What does this mean for users? First, when interacting with the **Unlock** contract \( via the [dashboard](https://app.unlock-protocol.com/dashboard/), [etherscan](https://etherscan.io/address/0x3d5409cce1d45233de1d4ebdee74b8e004abdd13#code), from another smart-contract, or from a new UI you build, you will always be interacting with the most recent version of the contract. Under the hood, the contract you interact with is actually a [proxy](https://github.com/OpenZeppelin/openzeppelin-sdk/blob/master/packages/lib/contracts/upgradeability/InitializableAdminUpgradeabilityProxy.sol) contract, so its address never changes. When we upgrade to a new version of Unlock, the proxy is also updated to delegate all calls to the new version of Unlock.

#### What about Locks?

Good question. **Deployed locks are immutable**. That is, while they can be re-configured, disabled or destroyed _by their owner_, they will otherwise remain unchanged on the ethereum network for as long as it persists. Nobody else can modify a lock you deployed but you, unless you choose to allow this. After an upgrade of Unlock, all new locks deployed moving forward will be of the new version, and may support new features and/or improved usability.

### Npm Modules

Every time we release a new version of the contracts, we publish a new npm module. Among other things, this module includes the compiled artifacts for both Unlock.sol and PublicLock.sol, as well as the interfaces for our contracts, a change log and the commit hash for this version. This allows us \(or anyone\) to support multiple versions when building on Unlock!

* [unlock-abi-1](https://www.npmjs.com/package/@unlock-protocol/unlock-abi-1)
* [unlock-abi-2](https://www.npmjs.com/package/@unlock-protocol/unlock-abi-2)
* [unlock-abi-3](https://www.npmjs.com/package/@unlock-protocol/unlock-abi-3)
* [unlock-abi-4](https://www.npmjs.com/package/@unlock-protocol/unlock-abi-4)
* [unlock-abi-5](https://www.npmjs.com/package/@unlock-protocol/unlock-abi-5)
* [unlock-abi-6](https://www.npmjs.com/package/@unlock-protocol/unlock-abi-6)
* [unlock-abi-7](https://www.npmjs.com/package/@unlock-protocol/unlock-abi-7)

## Standards

Other standards which Unlock adheres to are:

* [erc-1167](https://eips.ethereum.org/EIPS/eip-1167) - Minimal Proxy Contract
* [erc-1820](https://eips.ethereum.org/EIPS/eip-1820) - Pseudo-introspection Registry Contract
* [erc-165](https://eips.ethereum.org/EIPS/eip-165) - Standard Interface Detection
* [erc-712](https://eips.ethereum.org/EIPS/eip-712)  -  Ethereum typed structured data hashing and signing \(**in progress**\)
* [erc-20](https://eips.ethereum.org/EIPS/eip-20) - Token Standard  \(**in progress\)**

