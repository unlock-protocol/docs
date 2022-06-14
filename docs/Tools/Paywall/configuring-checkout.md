---
description: >-
  When building a checkout URL or configuring the paywall, you can customize
  things. Here are docs on how to achieve this.
---

# Configuring Checkout

## Building a Purchase address

If you are using the paywall application, you can skip this section and move to the next one (the `paywallConfig` object).

All of the purchase URsL start with the following base

```
https://app.unlock-protocol.com/checkout?
```

After this, you will need to include the following parameters:

<<<<<<< HEAD:docs/Tools/Paywall/configuring-checkout.md
- `paywallConfig=...` where `...` is replaced with the URL-encoded version of a JSON `paywallConfig` object. The next section will show you how to build this object.
- `redirectUri=...` where `...` is replaced with the URL-encodded address of a webpage where the user will be redirected when their membership is valid.
=======
* `paywallConfig=...` where `...` is replaced with the URL-encoded version of a JSON `paywallConfig` object. The next section will show you how to build this object.
* `redirectUri=...` where `...` is replaced with the URL-encodded address of a webpage where the user will be redirected when their membership is valid.
>>>>>>> 10c3efe6e24bbe45dd21784e682067419bc73d40:docs/Basics/tools/paywall/configuring-checkout.md

These parameters are all separated by the `&` sign and you can use online tools such as [https://www.urlencoder.io/](https://www.urlencoder.io/) to build the encoded version of the parameters.

### Example

```text
https://app.unlock-protocol.com/checkout?redirectUri=https://ouvre-boite.com&paywallConfig=%7B%22locks%22%3A%7B%220x15F67811Beb43aCE162693fe1415916F87B8C5C2%22%3A%7B%22network%22%3A137%7D%7D%2C%22persistentCheckout%22%3Atrue%2C%22icon%22%3A%22https%3A%2F%2Frinkeby.locksmith.unlock-protocol.com%2Flock%2F0x15F67811Beb43aCE162693fe1415916F87B8C5C2%2Ficon%22%7D
```

This URL will redirect members to this page [`https://ouvre-boite.com/`](https://ouvre-boite.com/).

## The paywallConfig object

The `paywallConfig` is a JSON object which includes a set of customizations for your experience. It includes the following elements:

<<<<<<< HEAD:docs/Tools/Paywall/configuring-checkout.md
- `locks` : _required object_, a list of lock objects \(see below\).
- `icon`: _optional string_, the URL for a icon to display in the top left corner of the modal.
- `callToAction`: _optional object_, a list of messages shown based on the state of the checkout modal \(see below\).
- `metadataInputs`: _optional array_, a set of input fields [as explained there](collecting-metadata.md).
- `persistentCheckout`: _optional boolean_: `true` \_\_if the modal cannot be closed, defaults to `false` when embedded. When closed, the user will be redirected to the `redirect` query param when using a purchase address \(see above\).
- `useDelegatedProvider`: _optional boolean._ To be announced.
- `network`: _optional integer._ defaults to `1`. See below.
- `referrer`: _optional string_. The address which will [receive UDT tokens](../../governance/the-unlock-token/) \(if the transaction is applicable\)
- `messageToSign`: _optional string_. If supplied, the user is prompted to sign this message using their wallet. If using a checkout URL, a `signature` query param is then appended to the `redirectUri` \(see above\). If using the embedded paywall, the `unlockProtocol.authenticated` includes the `signature` attribute.
- `pessimistic`: _optional boolean._ defaults to `false`_._ By default, to reduce friction, we do not require users to wait for the transaction to be mined before offering them to be redirected. By setting this to `true`, users will need to wait for the transaction to have been mined in order to proceed to the next step.
=======
* `locks` : _required object_, a list of lock objects (see below).
* `icon`: _optional string_, the URL for a icon to display in the top left corner of the modal.
* `callToAction`: _optional object_, a list of messages shown based on the state of the checkout modal (see below).
* `persistentCheckout`: _optional boolean_: `true` \_\_if the modal cannot be closed, defaults to `false` when embedded. When closed, the user will be redirected to the `redirect` query param when using a purchase address (see above).
* `useDelegatedProvider`: _optional boolean._ To be announced.
* `network`: _optional integer._ defaults to `1`. See below.
* `referrer`: _optional string_. The address which will [receive UDT tokens](../../../governance/the-unlock-token/) (if the transaction is applicable)
* `messageToSign`: _optional string_. If supplied, the user is prompted to sign this message using their wallet. If using a checkout URL, a `signature` query param is then appended to the `redirectUri` (see above). If using the embedded paywall, the `unlockProtocol.authenticated` includes the `signature` attribute.
* `pessimistic`: _optional boolean._ defaults to `false`_._ By default, to reduce friction, we do not require users to wait for the transaction to be mined before offering them to be redirected. By setting this to `true`, users will need to wait for the transaction to have been mined in order to proceed to the next step.
* `captcha`: _optional boolean._ defaults to `false`_._ If set `true`, the users will be prompted to go through a captcha during the checkout process. This is better used in conjunction with a purchase hook that verifies that captcha is valid.
>>>>>>> 10c3efe6e24bbe45dd21784e682067419bc73d40:docs/Basics/tools/paywall/configuring-checkout.md

### Locks

The locks object is a list of objects indexed by the lock address, where each object can include the following:

<<<<<<< HEAD:docs/Tools/Paywall/configuring-checkout.md
- `network`: _recommended integer_. See below.
- `name`: _optional string_. name of the lock to display.
=======
* `network`: _recommended integer_. See below.
* `name`: _optional string_. name of the lock to display.
* `recurringPayments`: optional number. The number of time a membership should be renewed automatically. This only applies to ERC20 locks. [Read more about recurring memberships](../../../creators/recurring-memberships.md).\`
* `metadataInputs`: _optional array_, a set of input fields [as explained there](collecting-metadata.md).
* ``
>>>>>>> 10c3efe6e24bbe45dd21784e682067419bc73d40:docs/Basics/tools/paywall/configuring-checkout.md

### Calls to action

The `callToAction` object lets you customize the messages displayed on the checkout UI. They are all optional strings:

- `default` : displayed by default
- `expired` : displayed when the user had a membership previously that expired
- `metadata`: displayed when the user is prompted for metadata

### Network values

(Make sure you use a number and not a string!)

<<<<<<< HEAD:docs/Tools/Paywall/configuring-checkout.md
- `1`: mainnet,
- `4`: rinkeby,
- `100`: xdai,
- `137`: polygon.
=======
* `1`: mainnet,
* `4`: rinkeby,
* `100`: xdai,
* `137`: polygon.
>>>>>>> 10c3efe6e24bbe45dd21784e682067419bc73d40:docs/Basics/tools/paywall/configuring-checkout.md

### Full example

```javascript
{
    "pessimistic": true,
    "locks": {
        "0x250a0153DfB52B44c560524283A6629C1d347545": {
           "network": 1,
           "name": "Unlock members"
        }
    },
    "icon": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.10UUFNA8oLdFdDpzt-Em_QHaHa%26pid%3DApi&f=1",
    "callToAction": {
        "default": "Please join the Amber membership!"
    },
    "metadataInputs": [
        {
            "name": "Name",
            "type": "text",
            "required": true
        }
    ]
}
```
