# Creators FAQ

You have questions, the Unlock community has answers! Here are answers to an ever-increasing list of FAQs seen from Unlock Protocol creators. Have a question about something that's not listed? Ask it [here](https://discord.gg/uEtjWAYJPj)!

- [How do royalties work with Unlock Protocol?](faq.md#how-do-royalties-work-with-unlock-protocol)
- [How do I set up recurring payments or automatic renewals?](faq.md#how-do-i-set-up-recurring-payments-or-automatic-renewals)
- [How to customize the NFT image for keys?](faq.md#how-to-customize-the-nft-image-for-keys)
- [How do I have unique images or unique rarity data for every individual key to a particular lock?](faq.md#how-do-i-have-unique-images-or-unique-rarity-data-for-every-individual-key-to-a-particular-lock)
- [How do I share ownership of an Unlock lock?](faq.md#how-to-share-ownership-of-an-unlock-lock)
- [How do I keep my Unlock key price stable even though crypto prices are volatile?](faq.md#i-want-my-membership-price-to-remain-stable.-how-can-i-do-it)
- [Why is my contract not verified on the block explorer?](faq.md#why-is-my-lock-contract-not-verified-on-the-block-explorer)
- [Can I use an existing NFT contract?](faq.md#can-i-use-an-existing-nft-contract)

## How do royalties work with Unlock Protocol?

Resale royalties are usually specified at the collection level through the platforms like OpenSea where the resale might be done (e.g. [https://support.opensea.io/hc/en-us/articles/1500009575482-How-do-royalties-work-on-OpenSea-](https://support.opensea.io/hc/en-us/articles/1500009575482-How-do-royalties-work-on-OpenSea-)). Since the memberships are ERC721s, they automatically show up on OpenSea and other marketplace platforms pretty much as soon as they are minted (e.g. [https://opensea.io/collection/eth-portland-mintgate-x-unlock](https://opensea.io/collection/eth-portland-mintgate-x-unlock)).

You'll probably need to reach out to OpenSea to get royalty editing turned on for your collection, as noted in the [Handling Common Issues section of this article](https://medium.com/opensea/how-to-create-your-own-marketplace-on-opensea-in-three-minutes-or-less-12373ca5818a). The article notes:

_"By default, the storefront editor page (_[_`https://opensea.io/category/<CONTRACT_NAME>/edit`_](https://opensea.io/category/%3CCONTRACT_NAME%3E/edit)_) is accessible to the contract’s_ [_`Ownable`_](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/0dded493a03623c93845c2d58634c229862ab54a/contracts/ownership/Ownable.sol#L22-L27) \_\_ [_owner_](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/0dded493a03623c93845c2d58634c229862ab54a/contracts/ownership/Ownable.sol#L22-L27)_. If your contract doesn’t implement `Ownable`, or if it does but the owner address is not accessible, or if it’s just not working, \[OpenSea] can fix that manually. Send an email to_ [_support@opensea.io_](mailto:support@opensea.io) _introducing yourself, providing the contract address, and providing the address that you’d like authorized to edit the storefront. OpenSea will confirm your ownership, then make the authorization."_

**Note:** There is a great conversation with Unlock community member @littlefortunes in the Unlock Discord where she shares her experiences with [setting up royalties and NFT collection information on OpenSea](https://discord.com/channels/462280183425138719/835883502297284628/934784500301451264).

## How do I set up recurring payments or automatic renewals?

Recurring payments and automatic renewals in the crypto space are a thorny challenge, as they imply the pre-approval of future transactions to a crypto wallet. At the current time, members will need to manually renew after their key expires.

That said, this is an area of significant interest to the Unlock development team and community and we are actively exploring options to handle the complexity of automatic renewals. We hope to implement this in the near future.

## How to customize the NFT image for keys?

If you want to customize the NFT image for the keys for a lock, it can be done right through the Unlock dashboard. Here is a tutorial on [how to change the image for Unlock keys](customizing-the-nft.md#customize-each-memberships-icon).

## How do I have unique images or unique rarity data for every individual key to a particular lock?

By default, all the keys to a particular lock have the same image. If you want to create unique metadata (including unique images) for keys for a particular lock, there is a great tutorial by community member Croissant on [how to specify individual images and NFT metadata](tutorials-1/customizing-locks-on-opensea.md).

## How to share ownership of an Unlock lock?

As a creator, you may want to share the ownership of your lock with other people (other creators, employees, partners... etc). For this, you should leverage the "lock manager" role. You can grant this role using a block explorer.

## I want my membership price to remain stable. How can I do it?

Unlock lets you pick the price, but also the currency used by your membership. This means that you can, for example, use a stable coin such as DAI or USDC to have a price-stable in $.

Alternatively, you can change the price of your lock at any point if you need to maintain relative stability, but make sure you do not choose a highly volatile currency.

Finally, you could also leverage your lock's "hook" capabilities to alter the price of the key, but that is generally considered a lot harder to implement (and would require the help of a developer).

## Why is my lock contract not verified on the block explorer?

All of Unlock's contract are open source and should be visible. Since version 9 (January 2022), the locks are upgradable (by any of their lock managers). Unfortunately that means that block explorers like Etherscan (or equivalent on the respective chains) are not showing them as _verified_ by default. However, verifying them is trivial. From the Dashboard, click on the block explorer icon, then click on the `Contract` tab, then look for the `More Options` button on the right of the screen and select `Is this a Proxy?`. Click `Verify` , `Save` and you should be good!

![Etherscan](/img/creators/using-etherscan.gif)

## Can I use an existing NFT contract?

Absolutely! Unlock's PublicLock contract (the membership contract) includes a _delegation_ mechanism that would let you point to any other on-chain contract to determine if an address is considered to be a "valid" member. [Check this tutorial for more details](https://docs.unlock-protocol.com/unlock/creators/tutorials-1/using-an-existing-nft-contract).
