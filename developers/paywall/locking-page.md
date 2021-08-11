---
description: >-
  Once created, you need to embed your lock(s) in your web page or application.
  There are many ways to do this, but the easiest way is to use our Paywall
  application.
---

# Adding a Lock to Web Page

Adding a lock to any webpage is simple, using [Unlock's Paywall application](https://paywall.unlock-protocol.com/). Note that the Unlock Community has built integrations for Content Management Systems or other applications \(such as chat messaging applications, e-commerce stores or, even gaming engines!\). See the [_Plugins and Integrations_](../../creators/plugins-and-integrations/) section.

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

The second step required is to configure the paywall so that it uses your lock. There again, you will need to use a `<script>`element added to your page's HTML. Ideally, it should also be placed in the ​`<head>`​ section and will let you configure the behavior of the paywall.

Please see this section on [how to build the configuration](configuring-checkout.md).

```javascript
<script>
var unlockProtocolConfig = {
  // paywallConfig object 
}
</script>
```

Important: `​unlockProtocolConfig​` is a global object \(it should be defined on the `window` object\).

## Handle Events

Once loaded the unlock script will trigger events on the page’s ​`window`​ object. These events let your web application adjust its behaving or the content it displayed based on the status.

There are types of events being triggered:

### Paywall status

* Event Name: `unlockProtocol.status`
* Values 
  * `event.detail.state`:  `locked`or `unlocked`.

### User info

* Event Name: `unlockProtocol.authenticated`
* Values 
  * `event.detail.address`:  the Ethereum address of the connected user.
  * `event.detail.signedMessage`: the signature perform by the user if your configuration includes a  `messageToSign`option \([more info](https://docs.unlock-protocol.com/developers/paywall/configuring-checkout#the-paywallconfig-object)\)

_Note:_ if the even is triggered without any payload, please consider that the user has "logged out".

### Transaction status

* Event Name:  `unlockProtocol.transactionSent`
* Values
  * `event.detail.hash`:  the Ethereum transaction,
  * `event.detail.lock`:  the Ethereum address of the lock.

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

_Note_: the callback can be invoked several times. For example, a visitor might purchase a key while they are on the page, going from the `locked` to the `unlocked` state. Similarly, the key that the visitor owns may expire during a visit which would result in the state going from `unlocked` to `locked`.

## Initiate Checkout

In order to purchase keys, Unlock provides a modal that lets the user pick the lock of their choice \(based on [the configuration](configuring-checkout.md)\). The modal can be loaded by invoking the following:

```javascript
window.unlockProtocol && window.unlockProtocol.loadCheckoutModal(/* optional configuration*/)
```

In some cases, you may want to customize what locks are available for purchase, or even the messaging. For this, the `loadCheckoutModal` call accepts an optional configuration object. This configuration object has the same shape as the global `unlockProtocolConfig`

## Full code example

You can easily configure the following with your lock by replacing the lock address and setting up a network if your lock is not on the main network.

Use this [JSFiddle](https://jsfiddle.net/unlockprotocol/x53c0yak/).

{% embed url="http://jsfiddle.net/unlockprotocol/x53c0yak/" caption="" %}

