---
description: >-
  The Unlock Paywall has a few knobs you can turn to customize the checkout
  experience
---

# Advanced Paywall Configuration

## Collecting User Metadata

In some cases, it may be valuable to collect information from purchasers before they purchase a key. For example, you may want to know the email address of all key holders so that you can send updates to them. In that case, you will want to work with [user-specific metadata](../metadata.md#user-specific-metadata).

To achieve this, add a property called `metadataInputs` to your configuration object:

```text
{
  ...
  metadataInputs: [ /* input fields */ ],
  ...
}
```

The members of this array should have the following shape:

```bash
{
  name: string,
  type: 'text' | 'date' | 'color' | 'email' | 'url',
  required: boolean,
  defaultValue?: 'string',
  public?: true,
}
```

All fields are required except for `public`, which defaults to `false` and `defaultValue`. Metadata is considered protected by default, so the only people who can view it are the lock owner and the user associated with the metadata. If any metadata should be visible to everyone, mark the `public` field as `true`.

If any input has `required: true`, it will render on the form with a red asterisk next to it and the metadata form will not submit until it is filled appropriately.

Name fields should be unique; if they are not then there may be collisions when storing the data.

The `type` field maps to a certain subset of HTML `<input>` types, which influences how the form renders \(see image\).

![In this example, first and last names are required and all other fields are optional.](../../.gitbook/assets/metadataformexample.png)

After the user fills out the form and clicks the Continue button, they will be prompted to sign a message so the data can be verified as coming from then. After they sign, the key purchase will initiate.

Note: you can customize the `callToAction` value for the metadata form by adding a `metadata` value to this `callToAction` object.

## Accepting card payments

For some selected locks, Unlock Inc provides the ability to purchase a key through their credit or debit cards. For this, you currently need approval from our team \(the payment will not go through if your lock has not previously been manually approved\). You can reach out to us via hello@unlock-protocol.com.

Once your lock has been approved, you just need to add the following to the top level of your paywall script configuration: `unlockUserAccounts: true`.

## Pessimistic Unlocking

One of the features of the paywall application is that it [optimistically unlocks the page](https://unlock-protocol.com/blog/hello-optimistic-unlocking/). This feature improves the customer experience by immediately emitting the `unlocked` event when a transaction is sent, as long as the transaction is likely enough to eventually succeed.

In some cases, your application may want to _not_ unlock until the transaction is fully confirmed. For this you should add `pessimistic: true` to the paywall configuration.

When doing this, you should ensure that your application handles the events such as `unlockProtocol.authenticated` and `unlockProtocol.transactionSent` to show valuable feedback to the user. See the [Handle Event](https://docs.unlock-protocol.com/getting-started/locking-page#handle-events) section on this page.

