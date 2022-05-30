---
description: >-
  As a lock manager, you can always cancel someone else's membership (and
  optionally refund them)
---

# How to cancel a user's membership

The contract for any lock can be interfaced with directly using Etherscan (or similar block explorers). Using this method, it is easy for creators (lock managers) to cancel/ expire a membership. The way to do this is to update the "expireAndRefundFor" field. Here's how.

First, click on the block explorer link for your lock contract. If your lock is on Ethereum, this will take you to Etherscan. If your lock is on Polygon, this will take you to Polygonscan... etc.

![Dashboard Etherscan Link](/img/creators/dashboard-etherscan-link.png)

Once there, click on "Contract". Then, click on "Write Contract" as you will change its settings. After that, press the "Connect to Web3" button to connect your wallet. This interface allows any "Lock Manager" to update elements of the lock they manage. If your wallet created the lock on the Unlock Creator Dashboard, this will be you.

![Etherscan Connect Wallet](/img/creators/etherscan-connect-wallet-2.png)

In the block explorer, you'll find "`expireAndRefundFor`". The "`_keyOwner (address)"` field is where you enter the wallet address of the person with the key/ membership you would like to make expire. The `amount` field is the amount of the refund, based on the currency it is priced in. By inputting 0, there will be no refund.

![Etherscan Expire Key](/img/creators/etherscan-expire-key.png)

By updating this field, the key owner will still technically have the NFT, but it will be expired, thus ending the membership.

This is how you update the contract via a block explorer to cancel/ expire someone's membership.
