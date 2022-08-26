---
description: >-
  Learn how to configure the checkout process in order to collect members
  information.
---

# Collecting Metadata

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

<img alt="In this example, first and last names are required and all other fields are optional." class="half-width" src="/img/tools/checkout/checkout-metadata.png" />

After the user fills out the form and clicks the "Continue" button, they will be prompted to sign a message so the data can be verified as coming from them. After they sign, the key purchase will initiate.

Note: you can customize the `callToAction` value for the metadata form by adding a `metadata` value to this `callToAction` object.

:::warning
If the user already has an active membership, they will not be prompted to
complete the metadata form!
:::
