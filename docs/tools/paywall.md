---
title: Paywall
description: >-
  Guide to the Paywall JavaScript library.
---
# Paywall

The Paywall is a simple JavaScript library which can track state and emits
events based on ownership of keys to specified locks. It can be used to trigger
a the Checkout for purchasing keys.

## Configuration

The Paywall shares a configuration object with the Checkout and you can find
everything you need to know in [Checkout / Configuration](/tools/checkout/configuration#the-paywallconfig-object) about how to build
out the JSON object you're going use.

## Events

Once loaded the script will trigger events on the page’s ​window​ object. 

Registering event listeners.

```javascript
window.addEventListener("unlockProtocol.eventName", handler);
```

### Status

<hr />

**event** `unlockProtocol.status`

Triggered when unlockProtocol status changes.

**handler**

Handler event object properties.

| name       | Description |    values |
|------------|-----------|--------------|
| state      | Representing whether or not the connected wallet has a valid key.| locked or unlocked *string*  |


### User info
<hr />

**event** `unlockProtocol.authenticated`

Triggered when a user authenticates.

| name       | Description |    values |
|------------|-----------|--------------|
| address    |Ethereum address of the connected user| *string* |
| signedMessage | the signature perform by the user if your configuration includes a messageToSignoption| *string*|


Note: if the event is triggered without any payload, please consider that the user has "logged out".

### Transaction status
<hr />

**event** `unlockProtocol.transactionSent`

| name       | Description |    values |
|------------|-----------|--------------|
| hash       |the Ethereum transaction| *string* |
| lock       | the Ethereum address of the lock| *string* |

## Pessimistic Unlocking

One of the features of the paywall application is that it [optimistically unlocks the page](https://unlock-protocol.com/blog/hello-optimistic-unlocking/). This feature improves the customer experience by immediately emitting the `unlocked` event when a transaction is sent, as long as the transaction is likely enough to eventually succeed.

In some cases, your application may want to _not_ unlock until the transaction is fully confirmed. For this you should add `pessimistic: true` to the paywall configuration.

When doing this, you should ensure that your application handles the events such as `unlockProtocol.authenticated` and `unlockProtocol.transactionSent` to show valuable feedback to the user. See the ["Events"](#events) section on this page.
