---
description: A deploying the whole Unlock protocol set of contracts locally
---
# Deploying Locally

## The Unlock Hardhat Plugin

To simplifiy the development of applications based on Unlock Protocol, we created a simple library for [Hardhat](https://hardhat.org/). It allows to easily deploy the protocol locally to test things, or manipulate existing locks and contracts from scripts and the command line.

## Install

```shell
npm i @unlock-protocol/hardhat-plugin
```

or

```shell
yarn install @unlock-protocol/hardhat-plugin
```

Import the plugin in your `hardhat.config.js`:

```js
require("@unlock-protocol/hardhat-plugin");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@unlock-protocol/hardhat-plugin";
```

## Configuration

### Networks

Info about already deployed Unlock contracts (on mainnet, rinkeby, optimism, bsc,xdai/gnosis, etc.) are added to the `unlock` param of the hardhat config. You can pass custom info about your own Unlock deployments directly in `hardhat.config.js`.

#### Config example

```solidity
import "@unlock-protocol/hardhat-plugin";

const config: HardhatUserConfig = {
  solidity: "0.8.7",
  unlock: {
    12345: {
      name: "My New Network",
      unlockAddress: "0x...", // your own unlock deployment address
    },
  },
};
```

## Use in script

Once installed, you can access the Unlock plugin directly from the Hardhat Runtime Environment
anywhere you need it (tasks, scripts, tests, etc).

```solidity
import { unlock } from "hardhat";

// deploy the Unlock contract
await unlock.deployUnlock();

// deploy the template
await unlock.deployPublicLock();

// deploy the entire protocol (localhost only)
await unlock.deployProtocol();

// create a lock
const lockArgs = {
  expirationDuration: 60 * 60 * 24 * 7, // 7 days
  currencyContractAddress: null, // null for ETH or erc20 address
  keyPrice: "100000000", // in wei
  maxNumberOfKeys: 10,
  name: "A Demo Lock",
};
await unlock.createLock(lockArgs);
```

## Command Line Interface

The plugin also come with a few CLI commands to help you get things started.

To get the complete list of available commands
```shell
 yarn hardhat
```

Deploy and configure the Unlock contracts
```shell
yarn hardhat unlock:deploy --network localhost
```

Display info about an existing lock
```shell
yarn hardhat lock:info --lock-address 0xe7cb5e2e538fec1492b66f180fac6d4106991250 --network mainnet

LOCK
  - name: 'Raffle Ronin'
  - address: 0xe7cb5e2e538fec1492b66f180fac6d4106991250
  - price: 0.05 ETH
  - duration: 82 years, 1 month, 2 weeks, 5 days, 1 hour, 30 minutes
  - keys: 23 / ∞
  - currency: ETH
  - balance: 0.15
  - symbol: UDT
  - version: 8
✨  Done in 11.75s.

```

## Other Links

For more, check the [plugin page](https://github.com/unlock-protocol/hardhat-plugin-example) or the [example repo](https://github.com/unlock-protocol/hardhat-plugin-example).
