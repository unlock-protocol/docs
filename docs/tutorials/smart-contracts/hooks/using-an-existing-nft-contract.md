---
title: Using an Existing Contract
description: >-
  Your lock is an NFT contract, but you can also plug-in an existing contract
  (ERC721, ERC1155 or ERC20) to make sure any visitor is treated as a valid
  member.
---

# Using an Existing Contract

Locks are membership contracts that can "mint" their own NFT (ERC721) as membership cards. However in some cases, you may want to consider other users as "members" even though they might not have one of the actual membership cards from the lock itself (we call them keys). In that case, you would hook your lock to an external contract that would itself provide its own membership cards.

Note: the Lock contract and the pre-existing contract NFT (ERC721 or ERC1155) or ERC20 _need_ to be on the same network...

### The hook contracts

We have deployed these hook contracts on each of the networks that we currently support:

**Using an ERC20**

- Rinkeby : [`0xA316437719A1595659237c86FeCB93f20c689209`](https://rinkeby.etherscan.io/address/0xA316437719A1595659237c86FeCB93f20c689209)
- Polygon: [`0xd4C62b84eb42c03A118639c39dF1Fb680FF9E776`](https://polygonscan.com/address/0xd4C62b84eb42c03A118639c39dF1Fb680FF9E776#code)
- xdai: [`0xd10DF26AEaE179521D6195Cf6f3b2701B5089Fb6`](https://blockscout.com/xdai/mainnet/address/0xd10DF26AEaE179521D6195Cf6f3b2701B5089Fb6#code)
- mainnet: [`0x807D3E3564f25b43eDd8Fb8300BCb17b415d9Ee8`](https://etherscan.io/address/0x807D3E3564f25b43eDd8Fb8300BCb17b415d9Ee8#code)
- bsc: [`0x972987a2a7cFb3Ea162Eee91d2C637790d18638d`](https://bscscan.com/address/0x972987a2a7cFb3Ea162Eee91d2C637790d18638d#code)
- optmism: [`0x4C223b83c480371795aD4f456206472E199d28d3`](https://optimistic.etherscan.io/address/0x4C223b83c480371795aD4f456206472E199d28d3#code)

**Using an ERC721**

- Mainnet: [`0xFcD6f91e144F2F4B219a760F3Bf0D235DE37d1FE`](https://etherscan.io/address/0xFcD6f91e144F2F4B219a760F3Bf0D235DE37d1FE#code)
- Rinkeby: [`0x910F56Fb797D9c7a978a08e73D7280e67eb81372`](https://rinkeby.etherscan.io/address/0x910F56Fb797D9c7a978a08e73D7280e67eb81372)
- Gnosis Chain: [`0xE4c2f9281ec03a1956c3756C66E73f22233323D3`](https://blockscout.com/xdai/mainnet/address/0xE4c2f9281ec03a1956c3756C66E73f22233323D3/contracts)
- Polygon: [`0xf705b2dd649bbcb9418d08c1ff508a983f923516`](https://polygonscan.com/address/0xf705b2dd649bbcb9418d08c1ff508a983f923516)
- Optimism: [`0xFcD6f91e144F2F4B219a760F3Bf0D235DE37d1FE`](https://optimistic.etherscan.io/address/0xFcD6f91e144F2F4B219a760F3Bf0D235DE37d1FE)
- BSC: [`0xAC82F15D80b8D98E3fBb7707C9736EEbE1F655F2`](https://bscscan.com/address/0xAC82F15D80b8D98E3fBb7707C9736EEbE1F655F2)

**Using an ERC1155**

- Mainnet: [`0x8ec9FB8FCC5ab6E0bD04EfD9e42A8f6Be45eaeC2`](https://etherscan.io/address/0x8ec9FB8FCC5ab6E0bD04EfD9e42A8f6Be45eaeC2)
- Rinkeby : [`0xD7477B7c0CdA4204Cf860e4c27486061b15a5AC3`](https://rinkeby.etherscan.io/address/0xD7477B7c0CdA4204Cf860e4c27486061b15a5AC3)
- Gnosis Chain: [`0x4F44e968961f5ff818b788E626564BBAF2c96bAC`](https://blockscout.com/xdai/mainnet/address/0x4F44e968961f5ff818b788E626564BBAF2c96bAC)
- Polygon: [`0x0C0cEEcF5C14EBF1Fcf6779F92766128eeE7098C`](https://polygonscan.com/address/0x0C0cEEcF5C14EBF1Fcf6779F92766128eeE7098C)
- Optimism: [`0xF867712b963F00BF30D372b857Ae7524305A0CE7`](https://optimistic.etherscan.io/address/0xF867712b963F00BF30D372b857Ae7524305A0CE7)
- BSC: [`0x3952787d8Ec653E9179a3Fa5D8c018d7bD8e94c7`](https://bscscan.com/address/0x3952787d8Ec653E9179a3Fa5D8c018d7bD8e94c7)

## What happens exactly

When someone visits a site or application that offers member benefits, it uses a function called `hasValidKey` on the smart-contract (or `balanceOf`). Internally, the lock contract keeps track of the list of members thru the expiration of their membership. So when `hasValidKey` is checked, it simply verifies that the expiration for that specific address is in the future.

However, we also added a _**hook**_ to that the `hasValidKey` method so that a 3rd party application could also "override" the default behavior of the `hasValidKey` function. If the hook is set, then the contract will call it and use the hook's response to determine if indeed the address should be treated as having a valid key.

## Hooking things together

The first step is to register your lock on the hook by mapping it to the existing NFT contract.

Using the block explorer (linked from the contract addresses above) for the mapping contract, click on the `Contract` and then the `Write Contract` buttons.

![Etherscan Contract Write Selected On Dashboard](/img/creators/etherscan-contract-write.png)

Now, connect your wallet by clicking on the `Connect to Web3` button in the block explorer. It is important that you do that from an address that is a Lock Manager on your lock (the account you used to deploy the lock is a lock manager).

Then, in the `createMapping` form, enter the following values:

- `_lockAddress`: this is the address for your lock (you can get it from your Unlock Dashboard)
- `_nftAddress`: that is the address for your pre-existing NFT contract (ERC721 or ERC1155). Note that this field is called `_tokenAddress` in the case of an ERC20.
- `_tokenTypeId`: (only for ERC1155) the id of the type of token to check
- `_minAmount`: (only for ERC20) the minimum amount of ERC20 that should be held

Then click on `Write`. You will be prompted to send a transaction by your wallet. Validate and wait for this to have been executed.

Once done, head to your lock in the block explorer. You can click on the etherscan button on the dashboard, or just type your lock's address in the search box of the block explorer. Once on your lock's page, follow the same steps as above by clicking on `Contract` and then `Write as Proxy`. Proceed to connect your wallet.

![Etherscan Button](/img/creators/etherscan-button.png)

Then, look for the `SetEvenHooks` function:

![Set Events Hook Etherscan Dashboard](/img/creators/set-events-hook-etherscan.png)

Hooks are 3rd party contracts that can be called when your lock itself is called. Here we are interested in changing the behavior of the `validKey` function, so you will enter the address of the hook contract for your network (see list above!) in the `_onValidKeyHook` field. Make sure you add `0x0000000000000000000000000000000000000000` in all the other fields to leave them unset.

Click on `Write`, confirm the transaction in your wallet and you should be all set!

## Going further

Here you are hooking a special "hook" contract that we created to match existing ERC721 contracts, but you could actually create your own custom hook for a dedicated contract! You could for example check that an URL owns a specific balance for an ERC20 token, or even create a hook where every address is considered to be a valid member on special days... etc.

Check our Developer Docs on the hook for more details!
