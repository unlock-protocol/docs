---
description: >-
  Unlock memberships are NFT. They use the same specification used by NFT
  marketplaces and others
---

# Customizing the NFT

Unlock memberships are Non-Fungible Tokens. They use the same specification used by other NFT projects, called [ERC721](http://erc721.org/). This means that, exactly like other NFT, they are visible in wallets.

By default, Unlock provides a generated image for each lock, which looks like this: 

![Example of generate logo image](../.gitbook/assets/logo-example.png)

However, with Unlock you can easily customize this image. For this, in the dashboard, just click on your lock's icon:

![When hovered, you can click the camera to customize the image](../.gitbook/assets/image%20%2825%29.png)

From there, you can upload an image \(2MM maximum\), or select an external URL:

![](../.gitbook/assets/image%20%2823%29.png)

If you select an external URL, we will hotlink to it, which means that you will need to make sure this image will remain available.

#### Customize each membership's icon

If you use an external URL, you can customize each membership from your lock in a more unique way. Indeed, the image URL that we pass includes `?id=<token id>`. 

### Advanced metadata customization

When using Unlock, by default, we provide some metadata for each token \(including the image URL\). The locks smart contracts are using the ERC721's specification method `tokenURI`. By default, we point to an Unlock hosted URI for this meta-data, but can be customized by any lock manager, by calling the method `baseTokenURI`. By doing this, the lock manager removes the only dependency on Unlock Inc.

By default, we provide the following metadata:

```text
{
  name: "Unlock Key",
  description: "A Key to an Unlock lock. Unlock is a protocol for memberships. https://unlock-protocol.com/",
  image: "http://rinkeby.locksmith.unlock-protocol.com/lock/0xc540ced80Bea41E46280476FF8B99E4193cff754/icon?id=1",
  attributes: [
    {
      trait_type: "Expiration",
      value: 1624662623,
      display_type: "date"
    }
  ],
  owner: "0xDD8e2548da5A992A63aE5520C6bC92c37a2Bcc44",
  expiration: 1624662623
}
```

The expiration is the memberships' expiration date and the owner is the current owner of the NFT membership.

