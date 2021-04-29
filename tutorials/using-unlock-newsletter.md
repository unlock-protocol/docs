---
description: >-
  Platforms like Substack have been very successful to help creators monetize
  with newsletters. Unlock also make it very easy to create an email based
  membership!
---

# Using Unlock for Newsletters

## Creating a lock

Start by creating your own lock. It's a smart contract deployed on the Ethereum blockchain which sets the terms of your membership \(price, curation, duration...\). You can do that from the [Unlock Dashboard](https://app.unlock-protocol.com/dashboard). Read [this section](https://docs.unlock-protocol.com/#create-a-lock) for more info.

### Prepare your Newsletter landing page

Unlock Inc. has built a custom web page where you can easily collect email addresses from members. 

You can find the application at this URL: [`https://newsletter.unlock-protocol.com/?`](https://newsletter.unlock-protocol.com/)

You can customize it by adding the following parameters in the URL:

* `locks` You can add as at least one `locks` query parameters to the URL. The value should be the address of the lock created in the first step.
* `title` The title of your newsletter
* `description` A description for your newsletter to  invite members to join it.

Make sure you separate each of these with the `&` character. For example, Camila Russo uses the [following url](https://newsletter.unlock-protocol.com/?title=The%20Defiant&description=A%20daily%20newsletter%20decrypting%20the%20intersection%20of%20blockchain%20and%20finance.&locks=0x43154Efc9cb33c80833C0dEc1E15bb9CfC1275e5&locks=0xFA7001A0310B5E69B7b95B72aeBaA66C72E084bf) which renders in the following:

![Example of landing page for a Newsletter \(title and description are set from the URL query parameters\)](../.gitbook/assets/image%20%2811%29%20%281%29.png)

### Send the URL to your fans!

You should share the link on social networks or by email with anyone you want to invite to become members.

Once they submit their email address, they crypto-wallet will prompt your members to sign a message to save their email address.

Immediately after this, they will be asked to purchase the membership.

![The checkout interface to purchase a membership and join your newsletter \(the price and name are based on your own lock...\)](../.gitbook/assets/image%20%2814%29%20%282%29.png)

### List members and email addresses

Once people have purchased a membership, the [Unlock Dashboard](https://app.unlock-protocol.com/dashboard/) lets you easily list all members, including their email addresses. For this, click on the members icon ![](../.gitbook/assets/members%20%281%29.png) on your lock in the list of locks.

![A lock in the Unlock Dashboard](../.gitbook/assets/image%20%2815%29.png)

The list of members includes the lock name, the address of the member \(key holder\), the expiration date for their membership, as well as their email address.

![](../.gitbook/assets/newsletter-members.png)

You can export that list as CSV and import it into your email sending tool, such as [Substack](https://substack.com/), [Mailchimp](https://mailchimp.com/), and more. You can also send the emails directly from your own email client.

**Important Note**: our tool does not currently provide the ability to send emails. We recommend that you use other tools for this

>

