---
description: >-
  The first step to using Unlock as a creator is to deploy your own lock so you
  can sell memberships to your own content! Each membership is a Non Fungible
  Token which you can customize easily.
---

# Creating a Lock

_Prerequisite: this currently requires an_ [_Ethereum wallet_](https://ethereum.org/en/wallets/)_. You can point the wallet to any network that Unlock is_ _currently deployed on_ _(including Ethereum's main network) to deploy a lock there. You will also need a little bit of the network's native currency to pay for gas._

{% embed url="https://youtu.be/jKj3l4Ei-i4" %}

Locks are smart contracts on an Ethereum compatible blockchain. This provides creators with **unmediated control over who can access their work**, and how much they want to charge for this. Unlock Inc. provides a simple dashboard to create a lock at the following address.

When creating a lock, the creator can select the following attributes:

* The name of the lock (easier to identify it than its Ethereum address)
* The duration of each key (how long they are valid for)
* The price consumers need to pay to get a key, including its currency
* How many keys at most can be sold

Once deployed the lock will have its own address and is **fully owned** by the creator (no one, including Unlock Inc. can change or remove it). The initial creator of the lock can also add other "lock managers" who are able to co-manage the lock.

Once deployed, the dashboard will show you details about your lock:

![](<../../.gitbook/assets/image (11) (1).png>)

The logo of your lock can be customized. This logo is the one [used for the NFT](../customizing-the-nft.md) that your users will purchase when they get a membership.

You will see the name (_First Euro lock_ for this example), its address (_0x09159A5..._ here), its duration (1 day), the number of existing memberships and the maximum amount that the lock can grant (_0/∞_), the price (_10 EURS_) and the current balance on the lock (_0 EURS_ since none has been sold). The icon bar lets you do the following:

* [Enable credit card payments](../enabling-credit-cards.md)
* Withdraw funds (once memberships have been sold!)
* See a demo of your lock on a _fake_ paywall-ed site
* View the list of members,
* [Easily integrate your lock in existing applications](../plugins-and-integrations/)
* Inspect your lock using a _block explorer (see below)_

The lock's behavior can also be customized even further. For example, you can easily [disable transfers](../tutorials-1/how-to-make-keys-non-transferrable.md), or [airdrop membership NFTs to anyone](../tutorials-1/how-to-airdrop-memberships.md).

Finally, and this is critical, the smart contracts are _verified_, click on the explorer icon to inspect it or interact with it from the block explorer.

![](../../.gitbook/assets/image.png)
