# Key Purchaser

## KeyPurchaser

The `KeyPurchaser` allows users to purchase a single key or start a regular subscription to a lock. End users only need to broadcast a single transaction \(ERC-20 `approve`\) or a single signed message \(`permit`\). 

This enables the implementation of recurring memberships where a soon-to-be-members approves a an amount which corresponds to a multiple of the key price. 

Note: this only applies to ERC20 locks. Locks priced in Ether cannot use this feature. It also requires the use of a v7 lock.

* Deployed Key Purchase factory contract (you could also deploy your own if you wanted): 
  * Mainnet: [`0xe66f332d24a7aabdbc97fb38cea7259137e2f2e9`](https://etherscan.io/address/0xe66f332d24a7aabdbc97fb38cea7259137e2f2e9),
  * Rinkeby: [`0x7cc3573b8d6d4a4162d624fbdceed242acbe9690`](https://rinkeby.etherscan.io/address/0x7cc3573b8d6d4a4162d624fbdceed242acbe9690)
* [Code for the KeyPurchaserFactory](https://github.com/unlock-protocol/unlock/blob/master/smart-contract-extensions/contracts/KeyPurchaserFactory.sol)
* [Code for the KeyPurchaser](https://github.com/unlock-protocol/unlock/blob/master/smart-contract-extensions/contracts/KeyPurchaser.sol).

### How it works

The `KeyPurchaser` is deployed via the `KeyPurchaserFactory` contract. There are a few settings to enter at this time and they may not be changed. This allows us to set terms (such as allowing the subscription to continue so long as the `keyPrice` does not increase by more than 10%). These terms can and should be communicated to the end user before they approve.

After that, prospective members approve a "large" ERC20 amount to be spent by the keyPurchaser contract. The total amount will cover multiple key purchases (12 times the keyPrice for a year long membership renewing every month.. etc), a potential increase to the key price, and a "reward" for the 3rd party service (see below) which would execute transactions.

Users can remove the allowance (by calling ERC-20 `approve` again with `0`) to cancel their recurring membership anytime.

A backend 3rd party service monitors approvals and issues a transaction to the `KeyPurchaser` to execute the purchase as appropriate. In the future Unlock Inc will host this but there are no restrictions - anyone could perform this service. The transaction to purchase keys will succeed only if the following requirements are met:
* The user has approved a large enough ERC20 amount
* The user has an outstanding balance of ERC20 which is high enough
* the user does not currently have a key, or owns a key to the lock which is either expired or soon to be expired

### Security

The `KeyPurchaser` guarantees that a rogue lock will not be able to steal all the funds from a given user, as transactions will only succeed if the key price is not larger than what the KeyPurchaser allows (and that the user approved), and if they do not already own a valid key.

### Limitations

Risk: if the user transfers or cancels the key, they would naturally expect that also cancels the subscription but it does not. This should be handled by the frontend.

## KeyPurchaserFactory

This contract acts as a registry to discover `KeyPurchasers` for a given lock.

## Future improvements

* Merge with `swap-and-call` to allow users to subscribe using any ERC-20 token, regardless of what the lock is priced in. This is hard to do safely due to possible price manipulation - I think we should revisit this after UniswapV2 is released.

