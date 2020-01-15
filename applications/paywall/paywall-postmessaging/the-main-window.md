---
description: >-
  Describes which post messages are sent and received at the main window level.
  Only catalogs messages that are acted upon.
---

# The Main Window

## Intro

This catalog of post messages coming into and out of the main window is complete. It doesn't paint the whole picture, because some of these messages are sent and received in multiple places. The future refactor _must_ simplify this.

It is very likely that with a little work on the design we can vastly reduce the total number of messages needed to make the app run.

## Receiving

### Checkout Iframe

| Message | Purpose |
| :--- | :--- |
| READY | When the main window receives this message, it knows that the checkout iframe is ready to listen to messages. Because the main window maintains a buffer of messages to send before the checkout iframe is ready, it flushes the buffer at this time, sends the paywall config, and starts sending blockchain data. |
| DISMISS\_CHECKOUT | This message indicates a request from the checkout iframe to hide itself. That message comes up to the top window because the checkout iframe is not able to modify the top-level DOM on its own, so the main window handles it. The checkout iframe never requests to show itself -- that decision always comes from the main window. |
| PURCHASE\_KEY | Passes the key purchase request through to data iframe |

### Data Iframe

| Message | Purpose |
| :--- | :--- |
| LOCKED | When the data iframe determines that the page is locked \(current user does not own a key to any lock on the paywall\), it messages the main window, which emits an event indicating the locked state to the host application. |
| UNLOCKED | Same as above, but current user _does_ own a key to at least one lock on the paywall. Emits an event indicating the unlocked state to the host application. |
| ERROR | The data iframe may send any error message to the main window. However, only if the error message is `'no ethereum wallet is available'` does the main window respond. If there is no wallet available, the page locks down. |
| UPDATE\_\* | Where `*` is any of {`LOCKS`, `ACCOUNT`, `ACCOUNT_BALANCE`, `NETWORK`, `KEYS`, `TRANSACTIONS`}. When any of these messages is received, the main window updates its internal mirror of the relevant blockchain data with the value contained in the payload. Additionally, `UPDATE_LOCKS` is passed through to the account iframe. |
| READY | Main window waits to hear if data iframe is ready before sending paywall config. |
| READY\_WEB3 | On receiving this message, commences sending wallet information for data iframe to use |
| WEB3 | Receives a web3 method call from the data iframe |

### Account Iframe

| Message | Purpose |
| :--- | :--- |
| SHOW\_ACCOUNTS\_MODAL | When the account iframe requests to be shown, the main window responds to that request in a manner analogous to the display state of the checkout iframe. |
| HIDE\_ACCOUNTS\_MODAL | Same as above, but hiding the iframe. |
| READY | If using a user account, the main window listens for the READY message |
| UPDATE\_ACCOUNT | If using a user account, the account update comes directly from the account iframe |
| UPDATE\_NETWORK | Same as above, but network |
| INITIATED\_TRANSACTION | When a managed key purchase is initiated, the account iframe tells the main window |
| UPDATE\_LOCKS | Sends the lock updates from the data iframe to the user account iframe |
| CONFIG | Sends the paywall config to the user account iframe |

## Sending

### Checkout Iframe

| Message | Purpose |
| :--- | :--- |
| UPDATE\_\* | Where `*` is any of  {`LOCKS`, `ACCOUNT`, `ACCOUNT_BALANCE`, `NETWORK`, `KEYS`, `TRANSACTIONS`}. Passes updates from data iframe through to the checkout iframe. |
| CONFIG | Once it receives `READY` from the checkout iframe, the main window sends the checkout iframe the paywall configuration from `window.unlockProtocolConfig` |
| LOCKED | Propagates the locked status to the checkout iframe |
| UNLOCKED | Same as above |
| ERROR | Passes all errors received to the checkout iframe |
| USING\_MANAGED\_ACCOUNT | If managed user accounts are permitted by paywall config and there _is not_ an injected web3 wallet in the browser, the main window tells the checkout that the account it will operate on is a managed user account. |
| UPDATE\_WALLET | Sends `true` as the payload until the wallet is enabled; `false` thereafter |

### Data Iframe

| Message | Purpose |
| :--- | :--- |
| SEND\_UPDATES | Once it receives `READY` from the checkout iframe, the main window asks the data iframe for every possible category of updates. |
| CONFIG | Once it receives `READY` from the data iframe, the main window sends the data iframe the paywall configuration. |
| PURCHASE\_KEY | Forwards the request to the data iframe \(originating from checkout iframe\) |
| WALLET\_INFO | Sends an object containing information about the wallet to the data iframe covering a few different cases which change how the data iframe interacts with the wallet |
| WEB3\_RESULT | Sends the result \(whether it succeeds or fails\) of a web3 method call back to the data iframe. |
| INITIATED\_TRANSACTION | After a managed key purchase commences, the main window lets the data iframe know so it can poll |

### Account Iframe

| Message | Purpose |
| :--- | :--- |
| PURCHASE\_KEY | When using a managed user account, forwards the key purchase request to the account iframe to fulfill |
| SEND\_UPDATES | Once the accounts iframe is ready, the main window requests `account` and `network` updates. |
| UPDATE\_LOCKS | Forward lock information from data iframe to account iframe |
| CONFIG | Once the accounts iframe is ready, the main window sends it the paywall config |

