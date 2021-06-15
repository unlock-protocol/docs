# Unlock Platform

It is often hard to define what Unlock is and what it is not. This document provides an explanation about our products and their relationships. But, first, we need a quick reminder of the Ethereum stack and interactions.

## A high level Ethereum architecture

```text
----------------------------------
            Wallets
----------------------------------
    Dapps        |      
----------------------------------
                RPC
==================================
 Smart Contracts |
----------------------------------
        EVM (state machine)
----------------------------------
```

The Ethereum blockchain is, before anything else, a network. As of Ethereum 1.x, each node in the network includes an \(eventually\) identical copy of a virtual computer. These nodes communicate together in order to stay in sync while still being able to evolve its state.

At the core of the virtual computer, sits the Ethereum Virtual Machine \(or EVM\) which is in charge of "executing" transactions to alter the data stored in it. You can think of it as the _operating system_ of a distributed computer. Among other things, it stores the ledger which keeps tracks of the ether balances of each account. Ether is the native currency of the Ethereum ecosystem. Smart contracts are the equivalent of _apps_ running inside of the EVM. They can store data and have methods which can be invoked by users or other smart contracts. As these applications consume resources on the EVM \(compute, storage...\), they can only run if the caller supplies "gas", which is spent to cover the cost of these resources. Gas is paid in Ether.

In order to communicate with a distributed computer each node provides an RPC interface: it is a way to send transactions to the distributed computer, as well as read information from it. These interface are fairly standardized which means that users could in theory connect to any node. The RPC calls can be used to transfer funds, but, more importantly to execute transactions in smart contracts.

In order to make it easy to interface with smart contracts, developers are building "dapps" \(distributed apps\), which are generally only using state stored in the EVM with a user friendly interface \(almost always web based\). Since the state of each application is "public", multiple dapps can be built for the same smart contract. Some advanced dapps will let users interact with several smart contracts in single interface.

Finally, wallets are "wrappers" around private keys which let user sign messages and transactions sent through Dapps, RPC to distributed computer. These wallet can also store valuable state for users such as their balance of Ether, or even data from some specific smart contracts, such as their balances of certain tokens.

## A protocol \(smart contracts\)

The most central piece of what Unlock ****is building is the **"protocol" for memberships**. The protocol defines what locks and keys are, how to deploy the former or purchase the latter. A membership is represented by keys to a given lock.

The protocol is implemented in the form of smart contracts. It is visible in our [open source code](https://github.com/unlock-protocol/unlock) under `/smart-contracts`.

## Unlock.js

As we've seen above RPC calls are ways to interact with smart contracts. Unlock-js is a wrapper around these RPC calls to provide specific ways to interact with the smart contracts. The code can be found in our code repository under `/unlock-js`.

## Front end applications

We are building several products at the front end level with different purposes.

### The Dashboard

The [dashboard](https://app.unlock-protocol.com/) is to a tool for _creators and consumers_. For creators it provides a way to deploy or update locks, view key owners, as well as withdraw funds from the locks. For consumers, it provides a "keychain" which lets them view all of their keys, the related information, as well as sell or cancel them.

### The Paywall

The "[paywall](https://paywall.unlock-protocol.com/)" is an application which lets creators easily add a lock to their website via JavaScript APIs as well as provide a simple interface for consumers to purchase corresponding keys. Examples of integrations can be actual paywalls \(similar to what many publisher websites currently provide\), but also things like software licenses \(where only certain features are available...\) etc.

We also provide several products which are using the paywall infrastructure. For example you could look at our "donations" product.

### Tickets

[Tickets](https://tickets.unlock-protocol.com/) is an application which lets event organizers sell tickets to their event in the form of keys to a lock. Organizers can create an event, attendees can purchase keys and the organizers can then check the validity of these keys at the event itself.

## User accounts

Even though we believe that most people will eventually use a wallet themselves, there is a strong need in today's market for a convenience layer which lets consumers interact with locks without having to know \(or care\) about their private keys, gas fees, or Ethereum as a currency. Our convenience is similar to an Ethereum wallet for the Unlock ecosystem. It lets users purchase keys using their credit/debut cards, only for applicable locks.

