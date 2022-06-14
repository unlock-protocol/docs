---
description: >-
  Learn how to configure the checkout process in order to collect members
  information.
---

# Collecting Metadata

In some cases, it may be valuable to collect information from purchasers before they purchase a key. For example, you may want to know the email address of all key holders so that you can send updates to them. In that case, you will want to work with [user-specific metadata](/Tools/locksmith/metadata.md#user-specific-metadata).

Warning: if the user already has an active membership, they will not be prompted to complete the metadata form!

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

![In this example, first and last names are required and all other fields are optional.](/img/developers/metadata-form-example.png)

After the user fills out the form and clicks the Continue button, they will be prompted to sign a message so the data can be verified as coming from then. After they sign, the key purchase will initiate.

Note: you can customize the `callToAction` value for the metadata form by adding a `metadata` value to this `callToAction` object. In some cases, it may be valuable to collect information from purchasers before they purchase a key. For example, you may want to know the email address of all key holders so that you can send updates to them. In that case, you will want to work with [user-specific metadata](/Tools/locksmith/metadata.md#user-specific-metadata).

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
  defaultValue?: string,
  public?: boolean,
  placeholder?: string,
}
```

All fields are required except for `public`, which defaults to `false`, `placeholder` and `defaultValue`. Metadata is considered protected by default, so the only people who can view it are the lock owner and the user associated with the metadata. If any metadata should be visible to everyone, mark the `public` field as `true`.

If any input has `required: true`, it will render on the form with a red asterisk next to it and the metadata form will not submit until it is filled appropriately.

The `placeholder` maps to HTML's `placeholder` attribute on the `<input>`element.

Name fields should be unique; if they are not then there may be collisions when storing the data.

The `type` field maps to a certain subset of HTML `<input>` types, which influences how the form renders \(see image\).

![In this example, first and last names are required and all other fields are optional.](/img/developers/metadata-form-example.png)

After the user fills out the form and clicks the Continue button, they will be prompted to sign a message so the data can be verified as coming from then. After they sign, the key purchase will initiate.

Note: you can customize the `callToAction` value for the metadata form by adding a `metadata` value to this `callToAction` object.
