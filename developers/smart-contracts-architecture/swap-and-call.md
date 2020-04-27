# Swap and Call

This contract allows users to transfer funds and then make a series of arbitrary calls. Any funds remaining afterwards are refunded to the user.

For Unlock, this allows end users to purchase keys using any currency regardless of what the lock is actually priced in. e.g. I could spend ETH or SAI to purchase a key from a lock that's priced in DAI.

## How it works

In order to spend ERC-20 tokens, the user first calls `approve` on the token to allow the `TokenSpender` contract to transfer funds. It is safe to approve more than what is needed for the desired swap-and-call transaction. This step is not necessary if the user is spending ETH.

A transaction to swap-and-call includes an array of contracts and callData allowing it to interact with any other contracts. Nothing about this implementation is specific or limited to Uniswap or Unlock-Protocol. The details about what will happen is driven by the frontend implementation itself.

After completing the series of calls any funds remaining are refunded to the user.

## Frontend integration

The integration is going to differ a lot depending on what you want to accomplish with swap-and-call. For Unlock and these docs we are focused on using Uniswap to exchange one currency type for another and then call Unlock in order to make a purchase.

When presenting the price for a lock to users, we can check which currencies they actually have in their wallet. So if a lock is priced in DAI but the user only owns ETH and BAT, we can display the price in those currencies and allow the user to spend whichever they prefer.

Since we are using Uniswap for the exchange there will be a small amount of slippage so the prices are not exact, but should be reasonably close and we will only charge exactly what is required at the time the transaction is mined.

When a user attempts to purchase using a different currency than the lock expects, we first need to `approve` the `TokenSpender`. If the user has already interacted with swap-and-call then we may be able to leverage a previous approval. And if the user is spending ETH we can skip this step all together.

Then we construct the data needed for the call to swap-and-call. Ultimately the call we will be making is to this function:

```javascript
function swapAndCall(
  IERC20 _sourceToken,
  uint _sourceAmount,
  address[] calldata _contracts,
  bytes calldata _callDataConcat,
  uint[] calldata _startPositions,
  uint[] calldata _values,
  IERC20 _tokenToRefund
) external payable
```

* `_sourceToken` is the address of the ERC-20 token the user is spending. If the user is spending ETH than this should be set to 0.
* `_sourceAmount` is the number of tokens the user is making available for this transaction. The user must have at least this amount in their wallet and have approved `TokenSpender` to transfer these funds. If this value is higher than what is required, the remaining tokens will be refunded. If the user is spending ETH than this should be set to 0.
* `_contracts` is an array of contract addresses to call after retrieving the tokens or ETH from the end user. There can be any number of calls and if you are making several calls to the same contract just include the same address multiple times in this array.
* `_callDataConcat` is the ABI for each contract call to make. You can get the bytes for each call using web3's `encodeABI()`. This allows swap-and-call to call any function on each of the contracts. The data is appended together into a single blob of bytes.
* `_startPositions` is an array with an entry for each contract call to make. It defines where the appropriate call data is in the `_callDataConcat` for each individual call \(since depending on the parameters call data varies in length\). The first call is not included in this array as we can assume it starts at position 0.
* `_values` is an array defining the call `value` to include with each contract call. The `value` is used for transferring ETH and not applicable to ERC-20 tokens. Use MAX\_UINT to include the contract's entire balance at the time of the call.
* `_tokenToRefund` is an additional ERC-20 token to refund after all the calls complete if any balance remains. ETH and `_sourceToken` are always refunded by default. This may be useful for scenarios where we the purchase call we are making may not have a known fixed price when the transaction occurs.

For Unlock's use case we want swap-and-call to do the following:

* Collect tokens from the user
* Approve Uniswap to spend those tokens
* Call Uniswap to exchange for the token the lock is priced in
* Approve the lock to spend those tokens
* Call purchase on the lock, sending the key to the end user
* Refund any tokens remaining

The details are too much to describe completely here. Check out [the tests](https://github.com/unlock-protocol/unlock/blob/master/smart-contract-extensions/test/uniswapAndCall.js) to see how this may be done. The core calls used are the following:

* Uniswap's `getEthToTokenOutputPrice` and `getTokenToEthOutputPrice` are used to calculate the conversion rate. Add a bit more so that there is room for slippage in case the price goes up before the user's transaction is mined.
* ERC-20 `approve` is called for Uniswap \(if spending tokens instead of ETH\) and for Unlock \(unless the lock is priced in ETH\).
* Uniswap's `ethToTokenSwapOutput` and `tokenToTokenSwapOutput` are used to do the exchange itself, getting exactly the number of tokens requested \(which can be set to the lock's `keyPrice`\).
* Unlock's `purchase` is called with the purchase recipient set to the end user so that the key is delivered to them directly.

## Security

Do not ERC-20 `approve` the swap-and-call contract's address. This is very important as if you do anyone will be able to steal your funds.

The `approve` step is only for the `TokenSpender` address. This is a separate contract allowing us to add a layer of security ensuring that the arbitrary calls people are making with swap-and-call are not abusing approvals.

`TokenSpender` allows just one contract, the swap-and-call implementation to transfer funds from a user's wallet. When calling swap-and-call, the `_sourceToken` and `_sourceAmount` is the only way that the `TokenSpender` can perform a transfer.

