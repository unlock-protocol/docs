---
description: >-
  Once your lock has been deployed, Unlock makes it easy to sell memberships in
  the form of NFT.
---

# Selling Memberships

There are multiple ways to sell memberships, and some of the integrations built by the community already include that step. However, in some context, you may want to have a single URL to share with your community so they can purchase your membership!

## Using a purchase URL

Our dashboard offers a "purchase" URL that can easily be shared.

![The Purchase URL is visible on the dashboard](/img/creators/membership-purchase-url-2.png)

You can set a custom redirect URL to which the URL is redirected when they have unlocked the membership.

There are more advanced customization options, but they will require some more advanced techniques, which you can [find in our developer section](../developers/paywall/configuring-checkout.md).

## How to get paid

Once a lock gets sold, the balance will be initially held within the smart contract for the lock, until you withdraw the funds. To withdraw your funds:

1. In the Creator Dashboard, if you see a positive balance for a Lock, you can click the circular button to withdraw funds.
2. By default, the funds are sent to the "beneficiary", which is the address which created the lock, but the beneficiary can be changed to any address by a [lock manager](https://github.com/unlock-protocol/docs/tree/075aaf67dd7225103e8bcaa72856331fa0f43cd7/developers/smart-contracts/lock-api/access-control/README.md). The beneficiary can be a 3rd party address, or even a smart contract, which would then split them between multiple addresses...
3. Once you click to withdraw funds, there will be a transaction that charges a gas fee. This will begin the transactions to move funds from the smart contract to the beneficiary.
4. You will see pending transactions on the Creator Dashboard. Once these finish, your funds will be available!

## Re(selling) memberships

Unlock memberships (called keys!) are Non-Fungible Tokens (using the ERC721 standard), which means the owner of a membership NFP can list it on marketplaces such as OpenSea and others! Learn more [here](tutorials-1/how-to-resell-a-lock.md).

## Airdropping memberships

The contract for any lock can be interfaced with directly using Etherscan. Using this method, it is easy for creators to grant keys (airdrop NFTs) to someone. [To learn more, check out this tutorial.](https://docs.unlock-protocol.com/creators/tutorials-1/how-to-airdrop-memberships)
