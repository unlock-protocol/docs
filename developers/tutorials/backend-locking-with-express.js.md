---
description: >-
  Express.js is a popular HTTP server framework for Node.js. In this tutorial,
  we will see to use the unlock-express plugin for Express.js in order to add
  locked routes in an Express application
---

# Backend locking with Express.js

The first step is to install the `@unlock-protocol/unlock-express`, either with `npm i @unlock-protocol/unlock-express` or `yarn add @unlock-protocol/unlock-express`.

Once installed, the plugin is readily usable:

```
const configureUnlock = require('@unlock-protocol/unlock-express')
```

### Configuration

The plugin works by adding a middleware that can be used to ensure that the current visitor owns a valid membership, but before that it needs to be configured.&#x20;

The configuration step is required but has many good defaults. There are only 3 functions that you need to overwrite:

#### `yieldPaywallConfig`

This function is called by the middleware to determine what configuration should be used by the paywall application. It takes  a single argument, the `Express` `request` object and needs to yield an object [as defined in this section](https://docs.unlock-protocol.com/developers/paywall/configuring-checkout#the-paywallconfig-object). Since the request object is passed, it is possible to build a custom configuration based on the route, for example, by requiring different locks... etc.

#### `getUserEthereumAddress`

This function is called by the middleware when it needs to know the address of the current visitor. The simplest version of this would read from a cookie, but it can also read that information from a database. If the users' address is not known, just return `null`  and the user will be prompted to connect their wallet thru Unlock's checkout modal. It is called with a single argument, the `Express` `request` object.

#### `updateUserEthereumAddress`

This function is called by the middleware so the application can store the user's address. Simlarly to `getUserEthereumAddress`, the simplest version of this could be to store the address as a cookie. This function takes 4 different arguments:

* &#x20;the `Express` `request` object  (might be useful to retrieve the user's cookie to store in a database)
* &#x20;the `Express` `response` object (might be useful to store in a cookie, or prepare a message to be displayed... etc)
* the user's address, as a string.
* the user's signature, as a string.

The signature was generated using Ethereum's `personal_sign` . You can use the `ethers` library to recover the signer's address with `ethers.utils.verifyMessage` ([docs](https://docs.ethers.io/v5/api/utils/signing-key/#utils-verifyMessage)).

#### Recommanded configuration

The middleware comes with a set of defaults that we suggest you update for more reliably.,





