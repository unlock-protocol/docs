---
description: An overview of the basics of smart contracts.
---

# What is a smart contract?

Smart contracts are a critical component of protocols, platforms and applications built using blockchain or similar distributed ledger technologies. 

Simply put, smart contracts are **computer programs** stored on a blockchain and can automatically execute all or parts of an agreement when predetermined conditions are met. For example, an obligation could be triggered by:

- a specific event (“if X happens, then do action Y”)
- a specific date or at the expiration of a period of time (“at X date, do action Y”)

Smart contracts are typically used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any involvement of intermediaries. For example, they can transfer digital assets between parties when certain conditions are met.

---

## **How smart contracts work**

Smart contracts work by following statements that are written into code on a blockchain. A network of computers then execute the actions when predetermined conditions have been met and verified. 

These actions could include releasing funds to the appropriate parties, registering a vehicle, sending notifications, or issuing a ticket. The blockchain is then updated when the transaction is completed. That means the transaction cannot be changed once it has been verified.

<aside>
💡 **A vending machine is a “smart contract”**

The term “smart contract” was first introduced by computer scientist and cryptographer Nick Szabo some 20 years ago as a graduate student at University of Washington.

A classic example of a smart contract offered by Szabo is that of a vending machine. It’s the simplest transaction you can make. You decide what you want and insert money into the machine. Once you click on the button or insert the code for the item of the same value, the machine automatically releases it. Smart contracts essentially work in the same way - automatically executing themselves once pre-determined conditions have been satisfied.

</aside>

---

## **The benefits of a smart contract**

Smart contract blockchains provide various benefits, including speed, efficiency, accuracy, trust, transparency, security, savings, as discussed in the sections below.

**Speed, efficiency and accuracy**

Smart contracts eliminate the need to manually process each transaction. Once a condition is met, the contract is executed immediately. This speeds up the execution process, which not only helps save time but also results in quicker decision making. Also, since there’s no manual process, it improves the accuracy as well.

**Trust, Security and Privacy**

Since smart contracts are stored on blockchains, they inherit their security mechanisms. Since there is no way to delete or alter information in smart contracts once it’s finalized, it fosters a higher level of trust between the concerned parties.

Also, smart contracts offer a high level of data integrity. This offers protection from the threat of after-the-fact data manipulation. Since each record is connected to the previous and subsequent records on a distributed ledger, hackers would have to alter the entire chain to change a single record, which makes it nearly impossible to hack in this manner. Moreover, all documents kept on the blockchain are duplicated many times across a peer-to-peer network.

**Transparency & Clear Communication**

With smart contracts, you need to be specific and detailed while establishing terms and conditions. This leaves little room for misinterpretation at a later stage. Thus, helping you forge an agreement based on a clear and direct communication.All relevant parties have complete visibility and access to the terms and conditions of the smart contract. Furthermore, there is also transparency and easy access to all records at all times as it is stored on a distributed ledger, which helps to further encourage confidence between all.

**Savings**

Smart contracts remove the need for intermediaries to handle transactions. Without the need to involve any third-party, middlemen or intermediary, individuals and business organizations would be able to significantly reduce operational and transactional costs. Thus, saving a lot of money in return.

---

### Different token standards for smart contracts

ERC-20, ERC-721, and ERC-1155 are token standards used for deploying smart contracts on a blockchain. These standards include rules or criteria that are needed to be fulfilled for a trade to occur. These token standards, along with the blockchain, help remove the need for intermediaries and also allow to keep track of all the transactions.

**ERC20**

ERC-20 is a fungible token used for identical entities. It was the first and the most widely used token standard approved by the Ethereum blockchain network.  It lays out a set of guidelines that all Ethereum-based tokens must adhere to. 

<aside>
💡 **Fungible vs. Non-Fungible**

The word “fungible” is used to refer to things that can be exchanged for other things of exactly the same kind. For example, the U.S. dollar is fungible. You can exchange a $100 bill with a friend, and each of you will still have the exact same spending power. Most cryptocurrencies are fungible, too — a bitcoin is a bitcoin, and it generally* doesn’t really matter which bitcoin you have. (*in some cases, such as stolen coins, identification of a specific bitcoin can be relevant when trying to trace the path of a stolen asset).

NFTs on the other hand, like most things in the physical world, such as cars and houses, are considered non-fungible. They have unique qualities, and you can’t just exchange them for others of the same type. You can swap your 2022 Tesla with your friend’s 2022 Tesla, but the cars wouldn’t exactly be the same.

</aside>

**ERC-721**

Unlike ERC-20, ERC-721 is specialized in non-fungible tokens. The recent NFTs hype is often credited to the emergence of ERC-721, which is the essential set of rules for NFTs. NFTs are unique tokens that cannot be replaced and have a different value from other tokens that are part of the same smart contract.

**ERC-1155**

Introduced in 2019,  ERC-1155 is the next generation of token standards that allows the simultaneous transfer of multiple token types. It is the hybrid between ERC-20 and ERC-721. This is different from ERC-721 and ERC-20, where a separate contract gets deployed for each Non-fungible or fungible token. You can learn more about these different standards [here](https://www.infostor.com/nft-guide/erc-721vs-erc-1155-benefits-difference-from-erc-721-standard/).

---

### Creating **a smart contract**

The creation of a smart contract typically starts off with the involved parties agreeing to the rules governing the transaction. Once these “if then” rules have been determined, the smart contract can be programmed by a developer. This can either be done from scratch, although increasingly, organizations that use blockchain for business provide templates, web interfaces, and other online tools to simplify structuring smart contracts.

Dapps otherwise referred to as Decentralized Applications are applications built on the open-source, peer-to-peer network of Ethereum Blockchain which uses smart contracts and front-end user interfaces to create decentralized platforms. Developing a Dapp, like any other app, requires programming and executing code on the system. Solidity is the most popular language for writing Ethereum smart contracts. 

**What is Solidity?**

Solidity is an object-oriented programming language created specifically by the Ethereum Network team for constructing and designing smart contracts on Blockchain platforms.

It's used to create smart contracts that implements the “if this/then that” business logic and generates a chain of transaction records in the blockchain system. It acts as a tool for creating machine-level code and compiling it on the Ethereum Virtual Machine (EVM - which provides a runtime environment for Ethereum smart contracts.). 

- Solidity is similar to one of the most common programming languages - JavaScript. So, if you understand JavaScript, it can be relatively easy to learn Solidity.
- It also has a lot of similarities with C and C++. For example, a “main” in C is equivalent to a “contract” in Solidity.
- Like other programming languages, Solidity programming also has variables, functions, classes, arithmetic operations, string manipulation, and many other concepts.

---

### Deploying **a smart contract**

Ethereum development environments like Truffle and Hardhat make it easier to work with smart contracts and Ethereum nodes. They provide a set of tools to seamlessly write, test, and deploy smart contracts.

**What is Hardhat?**
Hardhat is a development environment that helps developers compile, deploy, test, and debug their Ethereum applications. It has some of the cleanest, most detailed documentation. Hardhat also provides console.log() functionality, similar to javascript for debugging purposes. Hardhat also has many plugins, which further increases its functionality. 

Here's a guide you can follow to deploy your smart contract using Hardhat - [https://hardhat.org/guides/deploying](https://hardhat.org/guides/deploying)
