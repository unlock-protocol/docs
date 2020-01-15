---
description: >-
  Describes which post messages are sent and received at the checkout iframe
  level. Only catalogs messages that are acted upon.
---

# The Checkout Iframe

## Receiving

### Main window

| Message | Purpose |
| :--- | :--- |
| LOCKED | Receives the locked status of the paywall. Used in conjunction with the UNLOCKED message to determine which state of the checkout UI to show. |
| UNLOCKED | See above |
| USING\_MANAGED\_ACCOUNT | Main window tells the checkout iframe whether it is using a managed account or a web3 wallet |
| ERROR | Main window informs checkout iframe of _every_ error, and in _every_ case the checkout iframe responds only by dismissing the wallet check overlay \(the assumption being that any error passed through indicates a problem with whatever interaction may have caused the wallet check overlay to spawn\) |
| UPDATE\_\* | Where `*` is any of {`LOCKS`, `ACCOUNT`, `ACCOUNT_BALANCE`, `NETWORK`, `KEYS`, `TRANSACTIONS`}. All post messages collated in a hook that aggregates the data in some way. |
| CONFIG | Listens for the `window.unlockProtocolConfig` data |

## Sending

### Main window

| Message | Purpose |
| :--- | :--- |
| PURCHASE\_KEY | Forward request to purchase key to main window, which in turn forwards it to the data iframe or account iframe as necessary. |
| DISMISS\_CHECKOUT | Sent to main window to hide the checkout iframe; e.g. when the "exit" button on the checkout UI is clicked. |
| REDIRECT | _Sometimes_ called when purchasing a key. Unclear which circumstances trigger this behavior. |
| READY | Triggered as part of the `usePaywallConfig` hook, essentially requests that the main window send the paywall config. |

