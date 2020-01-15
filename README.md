---
description: Integrating Unlock on Your Site
---

# Getting Started

We will walk through the process of setting up Unlock from the creator's perspective as a starting point to provide context around how things work.

Things can be broken in the following steps:

* [Create a Lock](https://docs.unlock-protocol.com/#create-a-lock)
* [Install a Lock on a Web Page](https://docs.unlock-protocol.com/#install-a-lock-on-a-web-page)
* [Configure the Lock](https://docs.unlock-protocol.com/#configure-the-lock)
* [Handle Events](https://docs.unlock-protocol.com/#handle-events)
* [Initiate Checkout](https://docs.unlock-protocol.com/#initiate-checkout)

## Create a Lock

Locks are smart contracts on the Ethereum blockchain. This provides creators with unmediated control over who can access their creations, and how much they want to charge for this. Unlock Inc. provides a simple dashboard to create a lock at :

{% embed url="https://unlock-protocol.com/" caption="https://unlock-protocol.com" %}

_note: this currently requires an_ [_Ethereum wallet_](https://metamask.io)_._ 

When creating a lock, the creator can select the following attributes:

* The name of the lock \(easier to identify it than its Ethereum address\)
* The duration of each key \(how long they are valid for\)
* The price consumers need to pay to get a key, including its currency
* How many keys at most can be sold

The UI only offers to chose between DAI and Ether, but any ERC20 can be used. You can configure the UI to display any ERC20 token, by adding the `erc20` and `ticker` query parameters to the dashboard URL. For example, [this URL](https://app.unlock-protocol.com/dashboard/?ticker=USDc&erc20=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) let's use deploy a [USDc](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) lock when you click on the "Create Lock" button.

Once deployed the lock will have its own address and is fully owned by the creator \(no-one, including Unlock Inc. can change or remove it\). Locks can also be transferred to a different owner after they've been created.

## Install a Lock on a Web Page

The first part of this requires embedding a script on the web page where the lock should be installed. You need to achieve this in the `​<head>` section of the HTML body. The script to be loaded is located at the following address: `https://paywall.unlock-protocol.com/static/unlock.1.0.min.js`

We recommend loading the script using the following approach:

```markup
<script> (function(d, s) {
var js = d.createElement(s),
sc = d.getElementsByTagName(s)[0];
js.src="https://paywall.unlock-protocol.com/static/unlock.1.0.min.js";
sc.parentNode.insertBefore(js, sc); }(document, "script"));
</script>
```

## Configure the Lock

The following snippet should also be placed in the ​`<head>`​ section of the HTML document and will let you configure the behavior of the paywall.

```javascript
var unlockProtocolConfig = { 
  locks: {
    '0xabc': { // 0xabc is the address of a lock.
      name: 'One Week'
    }, 
    '0xdef': {
      name: 'One Month' 
    },
    '0xghi': {
      name: 'One Year'
    } // you can add as many locks as you want.
  },
  icon: 'https://staging-app.unlock-protocol.com/static/images/svg/default.svg', 
  callToAction: {
    default: 'This content is locked. Pay with cryptocurrency to access it!',
    expired: 'This is what is shown when the user had a key which is now expired',
    pending: 'This is the message shown when the user sent a transaction to purchase a key which has not be confirmed yet',
    confirmed: 'This is the message shown when the user has a confirmed key',
    noWallet: 'This is the message shown when the user does not have a crypto wallet which is required...',
  }
}
```

`​unlockProtocolConfig​` is a global object which includes the locks indexed by their address on the Ethereum blockchain. Each lock is an object which can have an optional name \(string\).

The object has the following optional attributes: icon and callToAction. `​icon​` references an image to be shown on the modal and the `​callToAction`​ object with a ​default​ value set to the text shown on the checkout modal.

## Handle Events

Once loaded the unlock script will trigger events on the page’s ​`window`​ object. These events will indicate to the page whether the current visitor owns a key to any of the lock \(the state should be `​unlocked`​ or if they do not, and the state should be `​locked​`\).

On your site, you can now implement the behavior based on whether the current visitor has a key to any of the locks or not.

Here is an example:

```javascript
window.addEventListener('unlockProtocol', function(e) {
  var state = e.detail
  // the state is a string whose value can either be 'unlocked' or 'locked'...
  // If state is 'unlocked': implement code here which will be triggered when 
  // the current visitor has a valid lock key  
  // If state is 'locked': implement code here which will be
  // triggered when the current visitor does not have a valid lock key
})
```

Note: the callback can be invoked several times. For example, a visitor might purchase a key while they are on the page, going from the `unlocked` to the `locked` state. Similarly, the key that the visitor owns may expire during a visit which would result in the state going from `unlocked` to `locked`.

## Initiate Checkout

In order to purchase keys, Unlock provides a modal which lets the user pick the lock of their choice \(based on the configuration above\). The modal can be loaded by invoking the following:

```javascript
window.unlockProtocol && window.unlockProtocol.loadCheckoutModal()
```

It is good practice to ensure that the ​unlockProtocol​ object is defined before invoking the `loadCheckoutModal()` ​function.

[Our blog](https://unlock-protocol.com/blog/) shows multiple example of integration on existing CMS or front end web frameworks.

