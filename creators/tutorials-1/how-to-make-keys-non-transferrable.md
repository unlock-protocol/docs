# How to make keys non-transferrable

The contract for any lock can be interfaced with directly using Etherscan (or similar block explorers). Using this method, it is easy for creators to make the NFT keys for their lock contract be non-transferrable. The way to do this is to update the "transfer fee" to its maximum (100%). When it is 100%, the transfer will simply fail. Here's how.

First, click on the block explorer link for your lock contract. If your lock is on Ethereum, this will take you to Etherscan. If your lock is on Polygon, this will take you to Polygonscan... etc.

![](../../.gitbook/assets/dashboard-etherscan-link.png)

Once there, click on "Contract". Then, click on "Write Contract" as you will change its settings. After that, press the "Connect to Web3" button to connect your wallet. This interface allows any "Lock Manager" to update elements of the lock they manage. If your wallet created the lock on the Unlock Creator Dashboard, this will be you.

![](<../../.gitbook/assets/Screen Shot 2021-12-06 at 2.43.01 PM (1).png>)

In the block explorer, you'll find "`updateTransferFee`". The transfer fee is the amount of time taken from the membership when it gets transferred. If you set the transfer fee of 100%, this will make it so that keys can't be transferred because they would immediately expire.

The inputs are in basis points, where each number = 1/100th of a percent. Therefore, to set the transfer fee at 100%, input 10000 into this field and click "Write".

![](<../../.gitbook/assets/Screen Shot 2021-12-06 at 2.42.32 PM (1).png>)

By updating this field, all of the keys that are part of the lock contract will become non-transferrable. If you set a different value, for example, 5000 (or 50%), transfers will still be possible, but the recipient would only receive a membership valid for half of the time that it was before the transfer.

This is how you update the contract via a block explorer to make it so that keys are non-transferrable.
