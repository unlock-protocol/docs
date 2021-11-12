---
description: >-
  In this tutorial, we will see how to use Unlock's contract with the popular Ethers library.
---

# Ethers

[Ethers](https://docs.ethers.io/) is a populer Ethereum library written in Javascript. It lets developers easily integrate Ethereum smart contracts in their applications.

In order to "read" state from the blockchain, Ethers requires the use of a provider. Based on the network that the contracts you are trying to interface with are deployed, you will have to use a different provider.

Similarly, if you are trying to modify the state of a contract, you will need to use a "signer", connected to a provider.

# Accessing the contracts ABI

The ABI is a description of all functions supported by a smart contract. Ethers uses ABI to "construct" JavaScript objects that map with the smart contracts.
All of the Unlock contracts are not only open source, but also verified on Etherscan. This means you can easily retrieve their ABI from there. (You can also use our `@unlock-protocol/contracts` package).

# Basic Example

In this first example, we want to read state from a specific lock deployed on Rinkeby

```javascript
const ethers = require('ethers')
const abis = require('@unlock-protocol/contracts')

// Wrapping all calls in an async block
const run = async () => {
  // Here we use a Rinkeby provider. We will be able to read the state, but not send transactions.
  const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")

  // We will interact with a lock deployed on rinkeby at this address 0xafa8fE6D93174D17D98E7A539A90a2EFBC0c0Fc1
  // Using Etherscan, we know that this is a lock of version 8, so we will load the corresponding ABI.
  const address = '0xafa8fE6D93174D17D98E7A539A90a2EFBC0c0Fc1'

  const lock = new ethers.Contract(address, abis.PublicLockV8.abi, provider)

  // After that we can read the state of the lock, using methods from its ABI:
  console.log(await lock.symbol()) // => "KEY"
  console.log(await lock.name()) // => "Test Oct 20"
}
run()
```

## Finding the lock version

Even though the ABI differs between every version, some functions are shared between _all lock_ versions in order to simplify compatinility. One of them is `publicLockVersion`. You can then easily retrieve the version of a lock with the following.

```javascript
const ethers = require('ethers')

// Simplest version of a lock's ABI
const PublicLockAbi =[
  {
      "constant": true,
      "inputs": [],
      "name": "publicLockVersion",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
  }
]

// Wrapping all calls in an async block
const run = async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
  const address = '0xafa8fE6D93174D17D98E7A539A90a2EFBC0c0Fc1'
  const lock = new ethers.Contract(address, PublicLockAbi, provider)

  console.log((await lock.publicLockVersion()).toString()) // => 8
}
run()
```

Note in the example above that `await lock.publicLockVersion()` returns a `BigNumber` which we convert to a string using [Ethers' helper](https://docs.ethers.io/v5/api/utils/bignumber/) `toString().


## Modifying the state

When writing an application, you may want to modify the state of Lock. The simplest and most commone state modification is to purchase a membership. Here is a detailed example.

```javascript
const ethers = require('ethers')
const abis = require('@unlock-protocol/contracts')

// Wrapping all calls in an async block
const run = async () => {
  // Here we use a Rinkeby provider. We will be able to read the state, but not send transactions.
  const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")

  // This time, we also need a signer.
  // Note: we sent some fake Eth to this address, but please replace with your own!
  const wallet = ethers.Wallet.fromMnemonic('seed cube fiction obvious cover riot edge beauty pelican radio useful strong')
  const signer = wallet.connect(provider)

  // We will interact with a lock deployed on rinkeby at this address 0xafa8fE6D93174D17D98E7A539A90a2EFBC0c0Fc1
  const address = '0xafa8fE6D93174D17D98E7A539A90a2EFBC0c0Fc1'

  // Let's go purchase the membership for this lock
  const lock = new ethers.Contract(address, abis.PublicLockV8.abi, signer)

  // If the lock was using an ERC20 as currency, we would need to send an approval transaction on the ERC20 contract first...

  // Let's get the key price so we know how much we need to send (we could send more!)
  const amount = await lock.keyPrice()

  // Purchase params:
  const purchaseParams = [
    amount,
    wallet.address, // This is the recipient of the membership (us!)
    wallet.address, // The is the referrer who will earn UDT tokens (we'd like this to be us!)
    [], // empty data object (not used here)
  ]

  const gasPrice = await provider.getGasPrice() // Let's get the current gas price
  const options = {
    gasPrice,
    value: amount // This is a lock that uses Ether, so it means we need send value. If it was an ERC20 we could set this to 0 and just use the amount on purchase's first argument
  }

  // Important: we need to compute the gasLimit ourselves because it is a funcion of gasPrice
  // For safety we could also bump it (the user is refunded the difference anyway)
  const gasEstimate = await lock.estimateGas.purchase(...purchaseParams, options)
  options.gasLimit = gasEstimate

  // We can now send transactions to modify the state of the lock, like purchase a key!
  const transaction = await lock.purchase(...purchaseParams, options)
  const receipt = await transaction.wait()
}
run()
```

All in all, if you are already using Ethers, all of this should be pretty familiar!