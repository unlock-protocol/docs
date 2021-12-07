# How to airdrop memberships

The contract for any lock can be interfaced with directly using Etherscan. Using this method, it is easy for creators to grant an NFT keys to any wallet address. The way to do this is to use the "grant key" function. Here's how.

First, click on the block explorer link for your lock contract. If your lock is on Ethereum, this will take you to Etherscan. If your lock is on Polygon, this will take you to Polygonscan.

![](<../../.gitbook/assets/Screen Shot 2021-12-06 at 2.43.55 PM.png>)

Once there, click on "Contract". Then, click on "Write Contract". After that, press the "Connect to Web3" button to connect your wallet. This interface allows the "Key Manager" to update elements of the contract. If your wallet created the lock on the Unlock Creator Dashboard, this will be you.

![](<../../.gitbook/assets/Screen Shot 2021-12-06 at 2.43.01 PM (1).png>)

In the block explorer, you'll find a "grantKeys" function. This allows the owner of the contract to give a key to a particular wallet address.&#x20;

![](<../../.gitbook/assets/Screen Shot 2021-12-07 at 10.07.14 AM.png>)

To do this, enter the address (not the .ENS domain) of who you want to be the recipient in "\_recipients (address\[])"

Then, add a timestamp for when you want this key to expire. Timestamps are how computers often read time. Here is a website for generating a timestamp for the day/ time you want the key to expire: [https://timestampgenerator.com/](https://timestampgenerator.com)

Lastly, add who you want to be the key manager in "\_keyManagers (address\[])". If you want this to remain as you, enter your wallet address here.

Next, click "Write" and confirm the transaction. Although this can only be done one at a time using a block explorer to interact with the contract, a script could be written in a custom application that could airdrop or grant many keys at once.

