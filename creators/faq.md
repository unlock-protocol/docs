# Creators FAQ

You have questions, we have answers! Here is an ever-increasing FAQ list of questions we get from Unlock Protocol creators.



* [How do royalties work with Unlock Protocol?](faq.md#how-do-royalties-work-with-unlock-protocol)
* [How do I share ownerships of an Unlock lock?](faq.md#how-to-share-ownership-of-an-unlock-lock)
*   [How do I keep my Unlock key price stable why crypto prices are volatile?](faq.md#i-want-my-membership-price-to-remain-stable.-how-can-i-do-it)



### How do royalties work with Unlock Protocol?

Resale royalties are usually specified at the collection level through the platforms like OpenSea where the resale might be done (e.g. [https://support.opensea.io/hc/en-us/articles/1500009575482-How-do-royalties-work-on-OpenSea-](https://support.opensea.io/hc/en-us/articles/1500009575482-How-do-royalties-work-on-OpenSea-)). Since the memberships are ERC721s, they automatically show up on OpenSea and other marketplace platforms pretty much as soon as they are minted (e.g. [https://opensea.io/collection/eth-portland-mintgate-x-unlock](https://opensea.io/collection/eth-portland-mintgate-x-unlock)).&#x20;

### How to share ownership of an Unlock lock?

As a creator, you may want to share the ownership of your lock with other people (other creators, employees, partners... etc). For this, you should leverage the "lock manager" role. You can grant this role using a block explorer.

### I want my membership price to remain stable. How can I do it?

Unlock lets you pick the price, but also the currency used by your membership. This means that you can, for example, use a stable coin such as DAI or USDC to have a price-stable in $.

Alternatively, you can change the price of your lock at any point if you need to maintain relative stability, but make sure you do not choose a highly volatile currency.

Finally, you could also leverage your lock's "hook" capabilities to alter the price of the key, but that is generally considered a lot harder to implement (and would require the help of a developer)

