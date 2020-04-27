# Usage & Integration

## Using Unlock

If you want to go beyond just interacting with the live mainnet version of [Unlock](https://unlock-protocol.com/), you can visit our [staging](https://staging.unlock-protocol.com/) site for the Rinkeby testnet. You can also easily run unlock in dev mode on either a local development network or the [Kovan testnet](https://github.com/unlock-protocol/unlock/wiki/Running-Unlock-in-dev#running-unlock-on-kovan-testnet).

You can also interact with the deployed Unlock contract for a given network via etherscan. This can be useful as the current dashboard UI only exposes a small portion of the full functionality available on deployed locks. 

So, for example, to interact with Unlock.sol on rinkeby, use this [link](https://rinkeby.etherscan.io/address/0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b#code) and select either the "Read As Proxy" or "Write As Proxy" tab. \(**Tip:** Make sure your wallet\(eg: metamask\) is on rinkeby network for this to work!\) In order to interact with a lock you've deployed, you can follow a similar process, pasting the lock address into etherscan, then clicking on the "Contract" tab and finally selecting  either the "Read Contract" or "Write Contract" tab depending on what you want to do.

![](../../.gitbook/assets/image%20%2821%29.png)

We use the [truffle framework](http://truffleframework.com/), and our smart contracts are written in solidity. They can be compiled using `yarn build` and tested using `yarn test`. Make sure dependencies are installed before running commands: `yarn`. 

For more detail on running Unlock in dev mode see our wiki [here](https://github.com/unlock-protocol/unlock/wiki/Running-Unlock-in-dev).

## Integrating With Unlock

