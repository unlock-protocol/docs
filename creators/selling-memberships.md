---
description: >-
  Once your lock has been deployed, Unlock makes it easy to sell memberships in
  the form of NFT.
---

# Selling Memberships

There are multiple ways to sell memberships, and some of the integrations built by the community already include that step. However, in some context, you may want to have a single URL to share with your community so they can purchase your membership!

### Using a purchase URL

Our dashboard offers a "purchase" URL that can easily be shared. 

![The Purchase URL is visible on the dashboard](../.gitbook/assets/image%20%2828%29%20%282%29%20%282%29%20%282%29%20%281%29.png)

You can set a custom redirect URL to which the URL is redirected when they have unlocked the membership.

There are more advanced customization options, but they will require some more advanced techniques, which you can [find in our developer section](../developers/paywall/configuring-checkout.md).

### How to get paid

Once a lock gets sold, the balance will be initially held within the smart contract for the lock, until you withdraw the funds. To withdraw your funds:

1. In the Creator Dashboard, if you see a positive balance for a Lock, you can click the circular button to withdraw funds.
2. Once you click to withdraw funds, there will be a transaction that charges a gas fee. This will begin the transactions to move funds from the smart contract to your connected wallet.
3. You will see pending transactions on the Creator Dashboard. Once these finish, your funds will be available in the wallet you are connected to the Creator Dashboard with.

### Re\(selling\) memberships

Unlock memberships are Non-Fungible Tokens \(using the ERC721 standard\), which means the owner of a membership NFP can list it on marketplaces such as OpenSea and others! Learn more [here](tutorials-1/how-to-resell-a-lock.md).



