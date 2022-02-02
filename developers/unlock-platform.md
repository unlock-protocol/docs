---
description: >-
  Unlock is a web3 protocol for memberships as NFTs. It is an underlying
  protocol-level set of web3 legos for building applications that can create
  utility, access, permissions, and memberships using NF
---

# Overview

## Build on top of Unlock Protocol

Using Unlock, you can build applications that have the ability to handle all aspects of using NFTs for memberships and access.

* Minting&#x20;
* Selling&#x20;
* Authenticating&#x20;
* Analytics&#x20;
* Integration

## Unlock capabilities

Unlock has powerful capabilities that developers can build into native applications.

**Time-based NFTs**&#x20;

NFTs that have the ability to expire - useful for business models with recurring or subscription models.

**Native-branded experiences**&#x20;

Build Unlock directly into your website or application.

**Contract ownership**&#x20;

Smart contracts (locks) owned by the creator.

**Customizable Interface**&#x20;

Use Unlock with your brand’s style and aesthetic.

**Platform-less passports**&#x20;

Create a unique membership that can be recognized across the web! With membership represented as an NFT, memberships can span communities and create unique partnership opportunities.

**Recurring memberships**&#x20;

The ability to create recurring subscriptions as patronage or membership.

**Credit card integration**&#x20;

Accept credit card payments for NFT memberships. Even though we believe that most people should eventually own a wallet themselves, there is a strong need in today's market for a convenience layer that lets consumers interact with locks without having to know (or care) about their private keys, gas fees, or Ethereum as a currency. Our convenience is similar to an Ethereum wallet for the Unlock ecosystem. It lets users purchase keys using their credit or debit cards, only for applicable locks.

## The protocol (smart contracts)

The most central piece of what Unlock is building is the "protocol" for memberships. The protocol defines what locks and keys are, how to deploy the former or purchase the latter. A membership is represented by keys (NFT) to a given lock (smart contract). The protocol is implemented in the form of smart contracts. It is visible in our [open-source code](https://github.com/unlock-protocol/unlock) under `/smart-contracts`.

Applications can be built on top of Unlock with any custom front end to create utility, access, and memberships using NFTs.

## The front end

Although, at its core, Unlock is an underlying protocol that any custom applications can be built on top of, we have built examples of front-end level interfaces with the Unlock Protocol, which serve different purposes.

### The Dashboard

The [dashboard](https://app.unlock-protocol.com) is to a tool for _creators and consumers_. For creators, it provides a way to deploy or update locks, view key owners, as well as withdraw funds from the locks. For consumers, it provides a "keychain" that lets them view all of their keys, the related information, as well as sell or cancel them.

The dashboard also hosts the "checkout" UI ([more](paywall/configuring-checkout.md)) that one can use to easily purchase memberships to locks.

### The Paywall

The "[paywall](https://paywall.unlock-protocol.com)" is an application that lets creators easily embed locks on their website via JavaScript APIs as well as provide a simple interface for consumers to purchase corresponding keys. Examples of integrations can be actual paywalls (similar to what many publisher websites currently provide), but also things like software licenses (where only certain features are available...) etc...



## A high level Ethereum architecture

```
----------------------------------
            Wallets
----------------------------------
             Dapps
----------------------------------
              RPC
==================================
         Smart Contracts
----------------------------------
              EVM
----------------------------------
```

The Ethereum blockchain is, before anything else, a network. As of Ethereum 1.x, each node in the network includes an (eventually) identical copy of a virtual computer. These nodes communicate together to stay in sync while still being able to evolve their state.

At the core of the Virtual Computer, sits the Ethereum Virtual Machine (or EVM) that is in charge of "executing" transactions to alter the data stored in it. You can think of it as the _operating system_ of a distributed computer. Among other things, it stores the ledger that keeps track of the ether balances of each account. Ether is the native currency of the Ethereum ecosystem. Smart contracts are the equivalent of _apps_ running inside of the EVM. They can store data and have methods that can be invoked by users or other smart contracts. As these applications consume resources on the EVM (compute, storage...), they can only run if the caller supplies "gas", which is spent to cover the cost of these resources. Gas is paid in Ether.

In order to communicate with the distributed computer each node provides an RPC interface: it is a way to send transactions, as well as read state. These interface are fairly standardized which means that users could, in theory, connect to any node. The RPC calls can be used to transfer funds, but, more importantly to execute transactions in smart contracts.

To make it easy to interface with smart contracts, developers are building "dapps" (distributed apps), which are generally only using state stored in the EVM with a user-friendly interface (almost always web-based). Since the state of each application is "public", multiple dapps can be built for the same smart contract. Some advanced dapps will let users interact with several smart contracts in single interface.

Finally, wallets are "wrappers" around private keys that let user sign messages and transactions sent through Dapps and RPC to distributed computer. These wallet can also store valuable state for users such as their balance of Ether, or even data from some specific smart contracts, such as their balances of certain tokens.

Given the popularity of the Ethereum main-net, several side-chains and "layer 2" have emerged. They provide a very similar architecture and can be "connected" to the Ethereum mainnet through "gateways" whose role is to transfer tokens from a network to another.

