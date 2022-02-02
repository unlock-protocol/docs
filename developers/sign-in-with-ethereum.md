---
description: >-
  In most applications, the first step is to identify users, Unlock provides an
  easy way to identify users.
---

# Sign-in With Ethereum

In many contexts, your application does not need a full "web3" provider, but just a way to identify the user's address. Unlock offers a flow that allows any application to easily identify the user by requiring them to sign a message. For this, we use a flow that's based on the [EIP 4361](https://eips.ethereum.org/EIPS/eip-4361) and that's inspired by the OpenId Connect and OAuth flows where the user is redirected back to the application once they have authenticated.

{% hint style="info" %}
"_Ethereum_" here does not refer to any network in particular but to the type of wallet that can used. Since Polygon, Gnosis Chain or Optimism for example are all using the same wallet, you can (should!) absolutely use the same "Sign In with Ethereum".
{% endhint %}

By using Unlock's "Sign-In with Ethereum", users who do not have a crypto wallet can also easily create an [Unlock Account](../creators/unlock-accounts.md), as well as sign in to their existing account with their email and passwords.

### Building a "Sign-in With Ethereum" URL

Your application just needs to build these URLs using the following:

Endpoint: [`https://app.unlock-protocol.com/checkout?`](https://app.unlock-protocol.com/checkout?client\_id=ouvre-boite.com\&redirect\_uri=https://ouvre-boite.com/)``

Required query parameters:

* `redirect_uri`: the URL toward which the user is redirected once they have connected their wallet and signed the message to authenticate them
* `client_id` : a string to identify your application. It MUST match the "host" part of the `redirect_uri`.

Optional query parameters:

* `paywallConfig` : a JSON object built using the same structure in purchase URLs. You can customize the `messageToSign` and `icon` elements in particular.

### Redirects

If the user refuses to connect and/or sign a message in their wallet, they will be redirected back to the `redirect_uri` and a new query string parameter will be attached `?error=access-denied`.

If the user connected their wallet and signed the messages, they will also be redirected to your application, this time with a `code` extra query parameter. The value of this parameter is base64 encoded and can be decoded by your application in order to retrieve the signature message along with the message that was signed. Using these 2 values, you can "recover" the address of the signer.&#x20;

Most Ethereum libraries include a function to compute the signer's address from a message and the corresponding signature:

* `verifyMessage` in [Ethers](https://docs.ethers.io/v5/api/utils/signing-key/#utils-verifyMessage)
* `recover` in [web3.js](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-accounts.html#accounts-recover)
* ... etc

#### Sample code:

```javascript
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const code = JSON.parse(atob(params.code));
// The code object has 2 properties:
// d: digest (the signed string)
// s: signature (the signature)
const address = ethers.utils.verifyMessage(code.d, code.s)
```

You can try the Sign-In-With Ethereum flow [on this site for example](https://ouvre-boite.com) (click Sign-In). It is also used in our [WordPress plugin](../creators/plugins-and-integrations/wordpress-plugin.md).
