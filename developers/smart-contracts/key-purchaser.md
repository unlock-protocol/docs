# Key Purchaser

## KeyPurchaser

The `KeyPurchaser` allows users to purchase a single key or start a regular subscription to a lock. End users only need to broadcast a single transaction \(ERC-20 `approve`\) or a single signed message \(`permit`\). 

This enables the implementation of recurring memberships where a soon-to-be-members approves a an amount which corresponds to a multiple of the key price. 

Note: this only applies to ERC20 locks. Locks priced in Ether cannot use this feature. It also requires the use of a v7 lock.

Key Purchase factory contract: [`0xe66f332d24a7aabdbc97fb38cea7259137e2f2e9`](https://etherscan.io/address/0xe66f332d24a7aabdbc97fb38cea7259137e2f2e9)

### How it works

The `KeyPurchaser` is deployed via the `KeyPurchaserFactory` contract. There are a few settings to enter at this time and they may not be changed. This allows us to set terms (such as allowing the subscription to continue so long as the `keyPrice` does not increase by more than 10%). These terms can and should be communicated to the end user before they approve.

Users can remove the allowance (by calling ERC-20 `approve` again with `0`) to cancel their recurring membership anytime.

A backend service monitors approvals and issues a transaction to the `KeyPurchaser` to execute the purchase as appropriate. Unlock-Protocol will host this but there are no restrictions - anyone could perform this service.

### Limitations

Risk: if the user transfers or cancels the key, they would naturally expect that also cancels the subscription but it does not. This should be handled by the frontend.

## KeyPurchaserFactory

This contract acts as a registry to discover `KeyPurchasers` for a given lock.

## Future improvements

* Merge with `swap-and-call` to allow users to subscribe using any ERC-20 token, regardless of what the lock is priced in. This is hard to do safely due to possible price manipulation - I think we should revisit this after UniswapV2 is released.

