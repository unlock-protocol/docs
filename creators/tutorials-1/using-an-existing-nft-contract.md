---
description: >-
  Your lock is an NFT contract, but you can also plug-in an existing ERC721
  contract easily to make sure any of the holder is treated as a valid member
---

# Using an existing NFT contract

Locks are membership contracts that can "mint" their own NFT (ERC721) as membership cards. However in some cases, you may want to consider other users as "members" even though they might not have one of the actual membership cards from the lock itself (we call them keys). In that case, you would hook your lock to an external contract that would itself provide its own membership cards.

We have deployed these hook contracts on each of the networks that we currently support:

* Rinkeby: [`0x910F56Fb797D9c7a978a08e73D7280e67eb81372`](https://rinkeby.etherscan.io/address/0x910F56Fb797D9c7a978a08e73D7280e67eb81372)
* Gnosis Chain: [`0xE4c2f9281ec03a1956c3756C66E73f22233323D3`](https://blockscout.com/xdai/mainnet/address/0xE4c2f9281ec03a1956c3756C66E73f22233323D3/contracts)
* Polygon: [`0xf705b2dd649bbcb9418d08c1ff508a983f923516`](https://polygonscan.com/address/0xf705b2dd649bbcb9418d08c1ff508a983f923516)
* Mainnet: [`0xFcD6f91e144F2F4B219a760F3Bf0D235DE37d1FE`](https://etherscan.io/address/0xFcD6f91e144F2F4B219a760F3Bf0D235DE37d1FE#code)
* Optimism: [`0xFcD6f91e144F2F4B219a760F3Bf0D235DE37d1FE`](https://optimistic.etherscan.io/address/0xFcD6f91e144F2F4B219a760F3Bf0D235DE37d1FE)
* BSC: [`0xAC82F15D80b8D98E3fBb7707C9736EEbE1F655F2`](https://bscscan.com/address/0xAC82F15D80b8D98E3fBb7707C9736EEbE1F655F2)

Note: the Lock contract and the pre-existing ERC721 contract _need_ to be on the same network...

### What happens exactly

When someone visits a site or application that offers member benefits, it uses a function called `hasValidKey` on the smart-contract (or `balanceOf`). Internally, the lock contract keeps track of the list of members thru the expiration of their membership. So when `hasValidKey` is checked, it simply verifies that the expiration for that specific address is in the future.

However, we also added a _**hook**_ to that the `hasValidKey` method so that a 3rd party application could also "override" the default behavior of the `hasValidKey` function. If the hook is set, then the contract will call it and use the hook's response to determine if indeed the address should be treated as having a valid key.

### Hooking things together

The first step is to register your lock on the hook by mapping it to the existing NFT contract.

Using the block explorer (linked from the contract addresses above) for the mapping contract, click on the `Contract` and then the `Write Contract` buttons.

![](<../../.gitbook/assets/image (30).png>)

Now, connect your wallet by clicking on the `Connect to Web3` button in the block explorer. It is important that you do that from an address that is a Lock Manager on your lock (the account you used to deploy the lock is a lock manager).

Then, in the `createMapping` form, enter the following values:

* `_lockAddress`: this is the address for your lock (you can get it from your Unlock Dashboard)
* `_nftAddress`: that is the address for your pre-existing NFT contract (ERC721)

Then click on `Write`. You will be prompted to send a transaction by your wallet. Validate and wait for this to have been executed.

Once done, head to your lock in the block explorer. You can click on the ![](<../../.gitbook/assets/image (27).png>)button on the dashboard, or just type your lock's address in the search box of the block explorer. Once on your lock's page, follow the same steps as above by clicking on `Contract` and then `Write as Proxy`. Proceed to connect your wallet.

Then, look for the `SetEvenHooks` function:

![](<../../.gitbook/assets/image (28) (1).png>)

Hooks are 3rd party contract that can be called when your lock itself is called. Here we are interested in changing the behavior of the `validKey` function, so you will enter the address of the hook contract for your network (see list above!) in the `_onValidKeyHook` field. Make sure you add `0x0000000000000000000000000000000000000000` in all the other fields to leave them unset.

Click on `Write`, confirm the transaction in your wallet and you should be all set!

### Going further

Here you are hooking a special "hook" contract that we created to match existing ERC721 contracts, but you could actually create your own custom hook for a dedicated contract! You could for example check that an URL owns a specific balance for an ERC20 token, or even create a hook where every address is considered to be a valid member on special days... etc.

Check our Developer Docs on the hook for more details!
