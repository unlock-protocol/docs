---
description: An informational tutorial covering tyhe basics of NFTs from developer’s perspective.
---

# What is a Non-Fungible Token (NFT)?

In this document, we'll answer the question "What is an NFT (Non-Fungible Token)?" We'll start with a simple explanation of what a token looks like on the blockchain and give some examples of how these are in use in the wild today. We'll mention some of the new ideas recently emerging and we'll briefly introduce some popular products and recent trends.

When you've finished this guide you'll have an understanding of what an NFT is in practical terms and perhaps why you might want one (beyond just having a cool profile picture!).

First, we better discuss the acronym NFT itself.

**What do "fungible" and "non-fungible" mean?**

Fungible means interchangeable. If I take one Bitcoin and replace it with another one, it makes no difference. The coins are fungible. But if you choose a unique piece of art and I replace that with a random Rothko you're not going to be happy. Your artwork is non-fungible, a bitcoin is fungible. 

Non-Fungible Tokens (NFTs) are different from fungible tokens because they are uniquely distinct from each other. 

What is it that makes a token non-fungible like that? That's where the smart contract comes in.

**A blockchain mapping**

In its simplest form, an NFT is a smart contract which manages a mapping between a list of unique token identifier numbers and an owner address for each one.

```

Token ID#10 => 0x2123...ff34

Token ID#11 => 0x5123...f24f

Token ID#12 => 0x1223...f223

```

This blockchain record shows which address owns which token id number. It's the cryptographic proof of your control over that token id in the global ledger.

Alongside this mapping in the contract is a set of functions to manage the exchange of these token identifiers and find out more information about them. How these functions behave is part of a series of NFT standard specifications which originated as Ethereum Request for Comment (ERC) proposals.

## NFT smart contract standards

ERC721 and ERC1155 are the most common NFT standards on Ethereum, although there are new proposals to further advance these.

The main difference between the two standards is that all ERC721 tokens in a contract collection are individually unique, whereas ERC1155 tokens can issue a set of more than one of each token in the collection.

These specifications define how to manage ownership of the tokens - the mapping of token id to owner address - and the information associated with the token. This often includes a URL or IPFS hash for retrieving metadata about the token from another service.

As long as they adhere to the basic spec for compatibility, tokens are free to include additional functionality to support their product or utility.

## Tokens are a new digital primitive

Tokens are a new digital primitive. Like websites began as simple text documents with links and pictures, then gradually evolved into YouTube, Facebook and TikTok over the next twenty years, tokens are a new programmable building block we can use to build and own digital items that weren't possible before.

## Common use cases today

What are some common use cases for NFTs right now, other than trading expensive pictures of monkeys?

Most notable are event ticketing (Unlock does this!), proof of attendance records, and website and Discord community paywalls (also Unlock's area) are all being done today.

Here's a quick overview of how tokens help achieve these outcomes and an introduction to some of the companies working on ideas in the space.

### Art projects and profile pictures

"Profile picture collection" NFT projects became very popular in 2021. The NFT contract for these tokens references a metadata file for each token identifier which in turn points to an image file of the picture in question. Exchanging these tokens means you own a pointer to an image file, not the image file itself. It's important to make sure the image is saved somewhere it can't be removed, to maintain the correctness of the immutable blockchain reference.

### Ticketing and Paywalls

Unlock Protocol issues NFT keys on multiple blockchain networks. The smart contract adds capabilities on top of the common standards that enable new functionality. An example of this is being able to delegate one of your tokens to another user to use, while retaining ownership and control over the token yourself.

### Proof Of Attendance Protocol (POAP)

POAP stands for "Proof Of Attendance Protocol". POAP issues NFTs to people in attendance at events, whether virtual or in the real world. The POAP smart contract restricts the tokens from being transferred, and the tokens can only be claimed during an event. The tokens then act like an old paper ticket stub, a way to remember and prove you were in attendance at an event and can be used to provide special memberships or benefits only to those early supporters.

## New ideas for Non-Fungible Tokens

New ideas for how NFTs can be used appear often. Two of the most interesting recent developments are 'dynamic NFTs' and 'Soulbound NFTs'.

### Dynamic NFTs

Dynamic NFTs were recently announced by Chainlink. They allow for the metadata the token references to update and change based on certain criteria in a trustless or predictable way while keeping the ownership of the token unaffected. This has interesting use cases for games, where items might change or mutate according to other items used, spells cast or achievements completed. Learn more about them on the Chainlink blog. https://blog.chain.link/what-is-a-dynamic-nft/

### Soulbound NFTs

The key property of Soulbound NFTs is that they can't be transferred, and they will be attached to a living real human. The idea was recently floated in a research paper to which Ethereum inventor Vitalik Buterin contributed. You can read more about Soulbound NFTs in the paper, "Decentralized Society: Finding Web3's Soul" https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763

## Conclusion

We've talked about the basic blockchain representation of an NFT on the token identifier being a simple relationship between a token id and an owner's wallet address, how the behaviour of those tokens is fleshed out with functionality in a smart contract, and some of the common use cases for NFTs today, and some of the emerging capabilities now coming into use.

In summary, NFTs can be a lot of things. The simple concept of token identifier being exchanged on the blockchain coupled with the infinite possibilities of a programmable blockchain is a powerful tool for building interesting new ideas.
