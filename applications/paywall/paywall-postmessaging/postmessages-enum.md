---
description: >-
  Describe the enumeration of possible postmessages. This table will be updated
  over time as our understanding grows. Not all of these messages may be used --
  mark them as deprecated if so.
---

# PostMessages Enum

| Member | Purpose | Payload | Consumers |
| :--- | :--- | :--- | :--- |
| LOCKED | Indicates that page is locked -- user does not have a key | none | [Main window](the-main-window.md#data-iframe) |
| UNLOCKED | Indicates that page is unlocked -- user does have a key | `string[]` lock addresses \(?\) | [Main window](the-main-window.md#data-iframe) |
| REDIRECT | Exact purpose unknown at this point | none |  |
| GET\_OPTIMISTIC | Exact purpose unknown at this point | none |  |
| GET\_PESSIMISTIC | Exact purpose unknown at this point | none |  |
| READY | Indicates that iframe in question is ready to react to postmessages \(?\) | none | [Main window](the-main-window.md#checkout-iframe) |
| CONFIG | Give paywall configuration from main window to checkout iframe \(?\) | [PaywallConfig](types-used-in-messages.md#paywallconfig) |  |
| ACCOUNT | Delivery of user account address to iframe | `string` account address |  |
| WEB3 | Indicates that a web3 method call should be performed | [web3MethodCall](types-used-in-messages.md#web-3-methodcall) |  |
| WEB3\_RESULT | Indicates the result of performing a web3 method call | [web3MethodResult](types-used-in-messages.md#web-3-methodresult) |  |
| READY\_WEB3 | Indicates that web3 wallet is connected and ready to be used \(?\) | none |  |
| WALLET\_INFO | Delivery of wallet information \(?\) | [Web3WalletInfo](types-used-in-messages.md#web-3-walletinfo) |  |
| UPDATE\_LOCKS | New information about locks whose addresses are listed in the paywall config \(?\) | [Locks](types-used-in-messages.md#locks) |  |
| UPDATE\_ACCOUNT | Delivery of changed user account address \(?\) | `string | null` | [Main window](the-main-window.md#data-iframe) |
| UPDATE\_ACCOUNT\_BALANCE | Delivery of new or changed currency balance for account | [Balance](types-used-in-messages.md#balance) | [Main window](the-main-window.md#data-iframe) |
| UPDATE\_NETWORK | Indicate changed network | `number` | [Main window](the-main-window.md#data-iframe) |
| UPDATE\_WALLET | Exact purpose unknown at this point | `boolean` | [Main window](the-main-window.md#data-iframe) |
| ERROR | Indicate that some kind of error occurred. | `string`  | [Main window](the-main-window.md#data-iframe) |
| SEND\_UPDATES | Request that the blockchain handler respond with updates corresponding to the category passed in payload | `'locks' | 'account' | 'balance' | 'network'` |  |
| PURCHASE\_KEY | Indicate that user has initiated key purchase from checkout iframe \(?\) | [PurchaseKeyRequest](types-used-in-messages.md#purchasekeyrequest) |  |
| DISMISS\_CHECKOUT | Tell the main window to hide the checkout iframe | none | [Main window](the-main-window.md#checkout-iframe) |
| INITIATED\_TRANSACTION | Tell the blockchain handler that a managed key purchase has been initiated and it should start polling for transactions | none |  |
| SHOW\_ACCOUNTS\_MODAL | Tell the main window to show the user account iframe | none | [Main window](the-main-window.md#account-iframe) |
| HIDE\_ACCOUNTS\_MODAL | Tell the main window to hide the user account iframe | none | [Main window](the-main-window.md#account-iframe) |
| UPDATE\_KEYS | Update record of user's keys \(?\) | [KeyResults](types-used-in-messages.md#keyresults) |  |
| UPDATE\_TRANSACTIONS | Update record of user's transactions \(?\) | [Transactions](types-used-in-messages.md#transactions) |  |
| USING\_MANAGED\_ACCOUNT | Indicate that the paywall will operate on a managed user account instead of an injected browser wallet | none |  |

