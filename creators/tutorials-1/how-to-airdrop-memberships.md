---
description: How to easily grant access to token-gated communities
---

# How to airdrop memberships

{% hint style="info" %}
**Edit**: the Unlock Dashboard [now has a UI to perform airdrops](https://unlock-protocol.com/blog/airdrop-nft-memberships)! The tutorial below is still applicable and accurate, but using the Dashboard will be easier.
{% endhint %}

The contract for any lock can be interfaced with directly using [Etherscan](https://etherscan.io) or similar block explorers. Using this method, it is easy for creators to grant an NFT keys to any wallet address. The way to do this is to use the "`grantKeys`" function. Here's how.

First, click on the block explorer link for your lock contract. If your lock is on Ethereum, this will take you to Etherscan. If your lock is on Polygon, this will take you to Polygonscan... etc

![](../../.gitbook/assets/etherscan-button.png)

Once there, click on "Contract". Then, click on "Write Contract". After that, press the "Connect to Web3" button to connect your wallet. This interface allows any "Lock Manager" to update elements of the contract. If your wallet created the lock on the Unlock Creator Dashboard, this will be you.

![](<../../.gitbook/assets/etherscan-connect-wallet (1).png>)

In the block explorer, you'll find a "`grantKeys`" function. This allows the owner of the contract to give a key to a particular wallet address.

![](../../.gitbook/assets/etherscan-grant-keys.png)

To do this, enter the address (not the .ENS domain) of who you want to be the recipient in `"_recipients (address[])`"

Then, add a timestamp for when you want this key to expire. Timestamps are how computers often represent time. Here is a website for generating a timestamp for the day/ time you want the key to expire: [https://timestampgenerator.com/](https://timestampgenerator.com)

Lastly, add who you want to be the key manager in "`_keyManagers (address[])`". If you want this to remain as you, enter your wallet address here. The key manager is the address that can transfer or burn the NFT, so by setting this address to be you, you prevent the person that you grant it to from transfering or cancelling it. If you put their address, they will be able transfer it or cancel it as if they had bought it themselves (they may get a refund, unless you changed the cancellation settings).

Next, click "Write" and confirm the transaction. Although this can only be done one at a time using a block explorer to interact with the contract, a script could be written in a custom application that could airdrop or grant many keys at once.
