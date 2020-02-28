# Key Purchaser

## KeyPurchaser

The KeyPurchaser allows users to purchase a single key or start a regular subscription to a lock. End users only need a single transaction \(erc20.approve\) or a single signed message \(dai.permit\).

Note that this has not yet been launched, but coming soon!

### How it works

The lock manager deploys a KeyPurchaser via the KeyPurchaserFactory contract. There are a few settings to enter at this time and they may not be changed. This allows us to set terms \(such as support no more than a 10% keyPrice increase\) which can be communicated to the end user before they approve.

Users can remove the allowance to cancel anytime.

A backend service monitors approvals and issues a transaction to the KeyPurchaser to execute the purchase as appropriate. Unlock-Protocol will host this but there are no restrictions - anyone could perform this service.

### Limitations

Risk: if the user transfers or cancels the key, they would naturally expect that also cancels the subscription but it does not. This should be handled by the frontend.

Locks priced in ETH are not supported, however you could use WETH instead. KeyPurchases supports any lock where the keyPrice is 0 \(even if the tokenAddress is ETH\).

## KeyPurchaserFactory

A factory for creating keyPurchasers. This contract acts as a registry to discover purchasers for a lock, guarantees a consistent implementation of KeyPurchaser, and that confirms it was created by the lock owner.

## Future improvements

* Merge with swap-and-call: allow users to subscribe using any ERC20 token, regardless of what the lock is priced in. This is hard to do safely due to possible price manipulation - I think we should revisit this after UniswapV2 is released.
* Introduce a financial reward to cover the gas fees.

