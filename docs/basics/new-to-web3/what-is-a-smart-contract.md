---
description: An overview of the basics of smart contracts.
---

# What is a smart contract?

Smart contracts are a critical component of protocols, platforms and applications built using blockchain or similar distributed ledger technologies. 

Simply put, smart contracts are computer programs stored on a blockchain. They can automatically execute a transaction when predetermined conditions are met. For example, a transaction could be triggered by:

- a specific event (“if X happens, then do action Y”)
- a specific date or at the expiration of a period of time (“at X date, do action Y”)

Smart contracts are typically used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any involvement of intermediaries. For example, smart contracts can transfer digital assets between parties when certain conditions are met.


## **How smart contracts work**

Smart contracts work by following statements that are written into code on a blockchain. A network of computers then executes the actions when predetermined conditions have been met and verified. 

These actions could include releasing funds to the appropriate parties, creating a membership to access an online resource, sending a notification, or issuing an event ticket. The blockchain is then updated when the transaction is completed. That means the transaction cannot be changed once it has been verified.


> 💡 **A vending machine is an analogy for a “smart contract”**
> 
> The term “smart contract” was first introduced by computer scientist and cryptographer Nick Szabo some 20 years ago as a graduate student at University of Washington.
> 
> A classic example of a smart contract offered by Szabo is that of a vending machine. It’s the simplest transaction you can make. You decide what you want and insert money into the machine. Once you click on the button or insert the code for the item of the same value, the machine automatically releases it. Smart contracts essentially work in the same way - automatically executing themselves once pre-determined conditions have been satisfied.


## **The benefits of a smart contract**

Smart contract blockchains provide various benefits, including speed, efficiency, accuracy, trust, transparency, and security, as discussed in the sections below.

**Speed, efficiency and accuracy**

Once a condition is met, a smart contract transaction is immediately queued for execution. Also, since there are no manual processes, smart contracts ensure consistency as well.

**Security and data integrity**

As smart contracts are stored on blockchains, they inherit the security mechanisms of the underlying blockchain. 

Also, smart contracts offer a high level of data integrity. This offers protection from the threat of after-the-fact data manipulation. Since each record is connected to the previous and subsequent records on a distributed ledger, hackers would have to alter the entire chain to change a single record, which makes it nearly impossible to hack in this manner. Moreover, all documents kept on the blockchain are duplicated many times across a peer-to-peer network.

**Transparency & clear communication**

Smart contract creators need to be specific and detailed while establishing terms and conditions. All relevant parties have complete visibility and access to the code enshrined in the smart contract. Furthermore, there is also transparency and easy access to all transactions at all times, as they are stored on a distributed public ledger.

**Peer-to-peer interactions**

Smart contracts remove the need for intermediaries to handle transactions. Without the need to involve any third-party, middlemen or intermediary, individuals and business organizations have the opportunity to reduce operational and transactional costs that typically would flow to middlemen.


## There are multiple token standards for smart contracts

ERC-20, ERC-721, and ERC-1155 are token standards used when deploying smart contracts on Ethereum and related blockchains that implement the Ethereum Virtual Machine (EVM). 

**ERC20**

ERC-20 is a fungible token standard used for identical entities. It was the first token standard on Ethereum.  It lays out a set of guidelines that all Ethereum-based ERC-20 tokens must adhere to. 

> 💡 **Fungible vs. Non-Fungible**
> 
> The word “fungible” is used to refer to things that can be exchanged for other things of exactly the same kind. For example, a dollar bill is fungible. You can exchange a $1 bill with a friend's $1 bill, and each of you will still have the exact same spending power after the exchange. Most cryptocurrencies are fungible, too — a bitcoin is a bitcoin, and it generally* doesn’t really matter which bitcoin you have. (*in some cases, such as stolen coins, identification of a specific bitcoin can be relevant when trying to trace the path of a stolen asset).
> 
> NFTs — non-fungible tokens — on the other hand, like many things in the physical world such as cars and houses, are considered non-fungible. They have unique qualities, and you can’t just exchange them for others of the same type. All NFTs are uniquely identifiable.

**ERC-721**

Unlike ERC-20, ERC-721 specifies a standard for non-fungible tokens. NFTs cannot be replaced with an identical token, since all ERC-721 tokens are provably unique.

**ERC-1155**

Introduced in 2019,  ERC-1155 is in some ways possesses traits of both ERC-20 and ERC-721 token types. This is different from ERC-721 and ERC-20, enables multiples token transfers in a single transaction, in addition to other features. 

You can learn more about these different standards [here](https://www.web3.university/article/comparing-erc-721-to-erc-1155).


### Creating **a smart contract**

Like any other kind of programming, the creation of a smart contract typically starts off with specifying requirements. Once these specifications have been created, the smart contract can be programmed by a developer. This can either be done from scratch, although increasingly, organizations that use blockchain for business provide templates, web interfaces, and other online tools to simplify structuring smart contracts.

Decentralized Applications ("[Dapps](https://docs.unlock-protocol.com/basics/new-to-web3/what-is-a-decentralised-application-aka-dapp)") are applications built on the open-source, peer-to-peer network of Ethereum Blockchain which uses smart contracts and front-end user interfaces to create decentralized platforms. Developing a Dapp, like any other app, requires programming and executing code on the system. Solidity is the most popular language for writing Ethereum smart contracts. 

**What is Solidity?**

Solidity is an object-oriented programming language created specifically by the Ethereum Network team for constructing and designing smart contracts on Blockchain platforms.

It's used to create smart contracts that implements business logic and generates a chain of transaction records in the blockchain system. It acts as a tool for creating machine-level code and compiling it on the Ethereum Virtual Machine (EVM - which provides a runtime environment for Ethereum smart contracts). 

- Solidity is similar to one of the most common programming languages - JavaScript. So, if you understand JavaScript, it can be relatively easy to learn Solidity.
- It also has a lot of similarities with C and C++. For example, a “main” in C is equivalent to a “contract” in Solidity.
- Like other programming languages, Solidity programming also has variables, functions, classes, arithmetic operations, string manipulation, and many other concepts.


### **Deploying a smart contract**

Ethereum development environments like Truffle and Hardhat make it easier to work with smart contracts and Ethereum nodes. They provide a set of tools to seamlessly write, test, and deploy smart contracts.

**What is Hardhat?**
Hardhat is a development environment that helps developers compile, deploy, test, and debug their Ethereum applications. Hardhat also provides console.log() functionality, similar to JavaScript for debugging purposes. Hardhat also has many plugins, which further increases its functionality. 

Here's a guide you can follow to deploy your smart contract using Hardhat - [https://hardhat.org/guides/deploying](https://hardhat.org/guides/deploying)
