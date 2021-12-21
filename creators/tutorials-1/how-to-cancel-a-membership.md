# How to cancel a membership

The contract for any lock can be interfaced with directly using Etherscan (or similar block explorers). Using this method, it is easy for creators (lock managers) to cancel/ expire a membership. The way to do this is to update the "expireAndRefundFor" field. Here's how.

First, click on the block explorer link for your lock contract. If your lock is on Ethereum, this will take you to Etherscan. If your lock is on Polygon, this will take you to Polygonscan... etc.

![](<../../.gitbook/assets/Screen Shot 2021-12-06 at 2.43.55 PM (2).png>)

Once there, click on "Contract". Then, click on "Write Contract" as you will change its settings. After that, press the "Connect to Web3" button to connect your wallet. This interface allows any "Lock Manager" to update elements of the lock they manage. If your wallet created the lock on the Unlock Creator Dashboard, this will be you.

![](<../../.gitbook/assets/Screen Shot 2021-12-06 at 2.43.01 PM (1).png>)

In the block explorer, you'll find "`expireAndRefundFor`". The "`_keyOwner (address)"` field is where you enter the wallet address of the person with the key/ membership you would like to make expire. The `amount` field is the amount of the refund, based on the currency it is priced in. By inputting 0, there will be no refund.

![](<../../.gitbook/assets/Screen Shot 2021-12-17 at 10.54.01 AM.png>)

By updating this field, the key owner will still technically have the NFT, but it will be expired, thus ending the membership.

This is how you update the contract via a block explorer to cancel/ expire someone's membership.
