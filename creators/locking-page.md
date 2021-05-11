---
description: >-
  Once created, you need to embed your lock(s) in your web page or application.
  There are many ways to do this, but the easiest way is to use our Paywall
  application.
---

# Adding a Lock to Web Page

Adding a lock to any webpage is simple, using [Unlock's Paywall application](https://paywall.unlock-protocol.com/). Note that the Unlock Community has built integrations for Content Management Systems or other applications \(such as chat messaging applications, e-commerce stores or even gaming engines!\). See the _Plugins and Integrations_ section.

## Embedding the paywall

The first part of this requires embedding a script on the web page where the lock should be installed. You need to achieve this in the `​<head>` section of the HTML body. The script to be loaded is located at the following address: `https://paywall.unlock-protocol.com/static/unlock.latest.min.js`

We recommend loading the script using the following approach:

```javascript
<script>
(function(d, s) {
  var js = d.createElement(s),
    sc = d.getElementsByTagName(s)[0];
  js.src="https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
  sc.parentNode.insertBefore(js, sc); }(document, "script"));
</script>
```

## Configure the Paywall

The second step required is to configure the paywall so that it uses your lock. There again, you will need to use a `<script>`element added to your page's HTML.  Ideally, it should also be placed in the ​`<head>`​ section will let you configure the behavior of the paywall.

```javascript
<script>
var unlockProtocolConfig = {
  network: 1, // Network ID (1 is for mainnet, 4 for rinkeby... etc)
  locks: {
    '0xabc': { // 0xabc is the address of a lock.
      name: 'One Week',
      network: 1 // you can customize the network for each lock
    }, 
    '0xdef': {
      name: 'One Month' 
      network: 100 // lock on the xDai chain
    },
    '0xghi': {
      // if no name is used, the default from the contract is used
    } // you can add as many locks as you want.
  },
  icon: 'https://app.unlock-protocol.com/static/images/svg/default.svg', 
  callToAction: {
    default: 'This content is locked. Pay with cryptocurrency to access it!',
    expired: 'This is what is shown when the user had a key which is now expired',
    pending: 'This is the message shown when the user sent a transaction to purchase a key which has not be confirmed yet',
    confirmed: 'This is the message shown when the user has a confirmed key',
    noWallet: 'This is the message shown when the user does not have a crypto wallet which is required...',
  },
  referrer: '0xreferrer' // Address of the referrer who will earn UDT governance tokens if the transaction is elligible.
}
</script>
`
```

### Details

`​unlockProtocolConfig​` is a global object.

`network` is the configuration required to switch from Ethereum's main net to other networks such as xDai. If no network config is provided Etherum mainnet is the default. For reference, Ethereum's main net uses the network id of `1`rinkeby uses `4`inkeby and xDai uses `100`

The `locks` object should contain all of the locks which are available on the page. They are indexed by their addresses. Each lock can have an optional name displayed on the checkout interface, as well as an optional network id on which it has been deployed. This enables embedding multiple locks from different networks.

The object has the following optional attributes: `icon` and `callToAction`. `​icon​` references an image to be shown on the modal and the `​callToAction`​ object with a ​default​ value set to the text shown on the checkout modal.

Finally, the `referrer` key should point to the address which will receive newly minted [UDT governance](../governance/the-unlock-token/) tokens. 

For more advanced configuration settings, including the collection of user metadata before a key purchase, see [Advanced Paywall Configuration](https://docs.unlock-protocol.com/applications/paywall/advanced-paywall-configuration).

## Handle Events

Once loaded the unlock script will trigger events on the page’s ​`window`​ object. These events let your web application adjust its behaving or the content it displayed based on the the status.

There are types of events being triggered:

### Paywall status

* Event Name: `unlockProtocol.status`
* Values `event.detail.state`:  `locked`or `unlocked`.

### User info

* Event Name: `unlockProtocol.authenticated`
* Values `event.detail.address`:  the Ethereum address of the connected user.

### Transaction status

* Event Name:  `unlockProtocol.transactionSent`
* Values `event.detail.hash`:  the Ethereum transaction,
* Values `event.detail.lock`:  the Ethereum address of the lock.

Here is an example:

```javascript
window.addEventListener('unlockProtocol.status', function(e) {
  var state = e.detail
  // the state is a string whose value can either be 'unlocked' or 'locked'...
  // If state is 'unlocked': implement code here which will be triggered when 
  // the current visitor has a valid lock key  
  // If state is 'locked': implement code here which will be
  // triggered when the current visitor does not have a valid lock key
})
```

Note: the callback can be invoked several times. For example, a visitor might purchase a key while they are on the page, going from the `locked` to the `unlocked` state. Similarly, the key that the visitor owns may expire during a visit which would result in the state going from `unlocked` to `locked`.

## Initiate Checkout

In order to purchase keys, Unlock provides a modal which lets the user pick the lock of their choice \(based on the configuration above\). The modal can be loaded by invoking the following:

```javascript
window.unlockProtocol && window.unlockProtocol.loadCheckoutModal(/* optional configuration*/)
```

In some cases, you may want to customize what locks are available for purchase, or even the messaging. For this, the `loadCheckoutModal` call accepts an optional configuration object. This configuration object has the same shape then the global `unlockProtocolConfig`

## Full code example

Use this [JSFiddle](https://jsfiddle.net/unlockprotocol/x53c0yak/).

{% embed url="http://jsfiddle.net/unlockprotocol/x53c0yak/" caption="" %}

