---
description: A mechanism to refund gas when a key is purchased
---

When purchasing a membership, the high gas costs can quickly become prohibitive. In order to address these issues sadly to common on Ethereum mainnet and other chain, we have developed a mechanism for lock owners to refund gas to members purchasing a key.

## How it works

The amount of gas refunded is set by the lock managers as an absolute value in ETH or any ERC20-compatible tokens. The defined value will be refunded to the key owner during the key purchase - in the same transaction.

## API

### `setGasRefundValue`

Lock managers can use this function to set the amount of ETH or ERC20 they want to refund to the key purchasers. The amount is an `uint256` describing the price in wei or token amount in smallest price unit - e.g. 18 decimals

To cancel gas refund, just set this value back to 0.

### `gasRefundValue`

Reads and returns the gas refund value currently set in the lock contract

### `GasRefunded` event

To keep track of gas refunds, a `GasRefunded` event is fired when a refund is processed with the amount refunded, the token used and the beneficiary address.