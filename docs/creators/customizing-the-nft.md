---
description: >-
  Unlock memberships are NFT. They use the same specification used by NFT
  marketplaces and others
---

# Customizing the NFT

Unlock memberships are Non-Fungible Tokens. They use the same specification used by other NFT projects, called [ERC721](http://erc721.org). This means that, exactly like other NFT, they are visible in wallets.

By default, Unlock provides a generated image for each lock, which looks like this:

![Example of generate logo image](/img/creators/logo-example.png)

However, with Unlock you can easily customize this image. For this, in the dashboard, just click on your lock's icon:

![When hovered, you can click the camera to customize the image](/img/creators/image-lock-dashboard.png)

From there, you can upload an image (1MB maximum), or select an external URL. We also recommend using a square of at least 300x300 pixels.

![Example Image](/img/creators/image23.png)

If you select an external URL, we will hot-link to it, which means that you will need to make sure this image will remain available.

## Customize each membership's icon

To customize each memberships' icon, you must use an external URL. Indeed, the image URL that we pass includes `?id=<token id>`. You can then have a different image URL for membership 1, 2, ... etc.

For example:

- The lock at the address `0x979B341B7C8863A236702E577dc8286Ca66423c0` on [Rinkeby](https://rinkeby.etherscan.io/address/0x979B341B7C8863A236702E577dc8286Ca66423c0) has [this URL](https://locksmith.unlock-protocol.com/lock/0x979B341B7C8863A236702E577dc8286Ca66423c0/icon) :`https://locksmith.unlock-protocol.com/lock/0x979B341B7C8863A236702E577dc8286Ca66423c0/icon`
- The NFT with id `1` (first membership) has [this metadata URI](https://rinkeby.locksmith.unlock-protocol.com/api/key/0x979b341b7c8863a236702e577dc8286ca66423c0/1) :`https://locksmith.unlock-protocol.com/api/key/4/0x979b341b7c8863a236702e577dc8286ca66423c0/1`
- And when inspecting its metadata, the image address is:`http://locksmith.unlock-protocol.com/lock/4/0x979B341B7C8863A236702E577dc8286Ca66423c0/icon`**`?id=1`**

## Advanced metadata customization

When using Unlock, by default, we provide some metadata for each token (including the image URL). The locks smart contracts are using the ERC721's specification method `tokenURI`. By default, we point to an Unlock hosted URI for this meta-data, but can be customized by any lock manager, by calling the method `baseTokenURI`. By doing this, the lock manager removes the only dependency on Unlock Inc.

By default, we provide the following metadata:

```json
{
  "name": "Unlock Key",
  "description": "A Key to an Unlock lock. Unlock is a protocol for memberships. https://unlock-protocol.com/",
  "image": "http://locksmith.unlock-protocol.com/lock/0xc540ced80Bea41E46280476FF8B99E4193cff754/icon?id=1",
  "attributes": [
    {
      "trait_type": "Expiration",
      "value": 1624662623,
      "display_type": "date"
    }
  ],
  "owner": "0xDD8e2548da5A992A63aE5520C6bC92c37a2Bcc44",
  "expiration": 1624662623
}
```

The expiration is the memberships' expiration date and the owner is the current owner of the NFT membership.

## Make non-transferrable

A "Key Manager" can make the keys to be non-transferrable by interacting with the contract via a block explorer. [Here's a tutorial on how that works](https://docs.unlock-protocol.com/creators/tutorialshow-to-make-keys-non-transferrable).
