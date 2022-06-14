# Using a custom currency

The UI only offers to chose between DAI and Ether, but any ERC20 can be used. Locks can be configured to be backed by any token that conforms to the [ERC20](https://eips.ethereum.org/EIPS/eip-20) specification. Currently, the fastest way to achieve this is by visiting the creator dashboard with the address and ticker of your backing token appended via the `erc20` and `ticker` query parameters.

On Ethereum's main network:

* [Create a DAI Backed Lock](https://app.unlock-protocol.com/dashboard/?erc20=0x6b175474e89094c44da98b954eedeac495271d0f\&ticker=DAI)
* [Create a USDC Backed Lock](https://app.unlock-protocol.com/dashboard/?erc20=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48\&ticker=USDC)
* [Create a BAT Lock](https://app.unlock-protocol.com/dashboard/?erc20=0x0d8775f648430679a709e98d2b0cb6250d2887ef\&ticker=BAT)
* [Create a UDT Lock](https://app.unlock-protocol.com/dashboard/?erc20=0x90de74265a416e1393a450752175aed98fe11517\&ticker=UDT) - UDT is our governance token.

## Building your own URL example

The parameters for [BAT](https://basicattentiontoken.org/) are as follows:

* erc20: `0x0d8775f648430679a709e98d2b0cb6250d2887ef`
* ticker: `BAT`

Once you have the correct details you add them to the URL in the following way:

```
https://app.unlock-protocol.com/dashboard?erc20=0x0d8775f648430679a709e98d2b0cb6250d2887ef&ticker=BAT
```

This will enable an option on the dashboard to switch to your desired token.

![Switch Token](/img/creators/image7.png)
