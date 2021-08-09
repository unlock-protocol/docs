---
description: >-
  In some contexts, you may want to require the user to wait for the transaction
  to have been mined before providing the unlocked experience.
---

# Pessimistic Unlocking

One of the features of the paywall application is that it [optimistically unlocks the page](https://unlock-protocol.com/blog/hello-optimistic-unlocking/). This feature improves the customer experience by immediately emitting the `unlocked` event when a transaction is sent, as long as the transaction is likely enough to eventually succeed.

In some cases, your application may want to _not_ unlock until the transaction is fully confirmed. For this you should add `pessimistic: true` to the paywall configuration.

When doing this, you should ensure that your application handles the events such as `unlockProtocol.authenticated` and `unlockProtocol.transactionSent` to show valuable feedback to the user. See the [Handle Event](https://docs.unlock-protocol.com/getting-started/locking-page#handle-events) section on this page.



