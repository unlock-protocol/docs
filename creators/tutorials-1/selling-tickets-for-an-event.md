---
description: >-
  A ticket to a conference, a concert or a meetup is a membership to that event.
  With Unlock, you can easily sell tickets to events you organize!
---

# Selling tickets for an event

To get started, please check [this demo website](https://unlock-event-ticket.glitch.me/) which shows an example of a fake event selling tickets through Unlock.

## Deploying the lock\(s\)

This is the first step. The [Unlock Dashboard](https://app.unlock-protocol.com/dashboard/) provides the easiest interface to deploy your lock.

Please, follow [these indications](https://docs.unlock-protocol.com/#create-a-lock) on how to create your lock.

You can deploy one or more locks. One approach is to create 1 lock per class of tickets. For example, a limited number of "early bird" tickets, or tickets which provides multiple admissions \(day 1 workshops & day 2 conference... etc\)

## Selling tickets on your own site

Once your lock\(s\) has\(ve\) been deployed, you can deploy it\(them\) on your own site using our paywall application. Of course, in this context, you probably do not want to actually lock any content \(but you could if needed, for example, to provide the location information only to people have a ticket!\).

First, add the following snippet to load Unlock's paywall application.

```bash
<script> (function(d, s) {
var js = d.createElement(s),
sc = d.getElementsByTagName(s)[0];
js.src="https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
sc.parentNode.insertBefore(js, sc); }(document, "script"));
</script>
```

Then, you need to configure the paywall application to work on your own site. Here's a basic configuration:

```bash
var unlockProtocolConfig = { 
  locks: {
    '0xabc': { // 0xabc is the address of a lock, obtained from the dashboard
      name: 'Developer Conference' // this is optional
    }
  },
  icon: 'https://url-of-your-logo', 
  callToAction: { 
    default: 'Purchase your ticket to attend the conference!',
    pending: 'Your transaction was sent. It may take a few minutes to go through and you will receive it once it did.',
    confirmed: 'You already have a ticket. Please make sure to check your key chain to view it!',
    noWallet: 'You do not have a wallet yet. Please install one.',
  }
}
```

After this, you need to add a button to your web page that future attendees have to click on in order to purchase their tickets. This button needs to handle the `onClick` event and call the following function `window.unlockProtocol.loadCheckoutModal()`.

Here is an example:

```bash
<button onclick="window.unlockProtocol.loadCheckoutModal()">Purchase ticket</button>
```

## Collecting attendee information

Most events will need to gather some attendee information \(name, email address or tee-shirt size for example\). For this, you can simply add some configuration to your paywall. Please refer to the [advanced paywall configuration page](https://docs.unlock-protocol.com/applications/paywall/advanced-paywall-configuration) for more details.

In a nutshell, you just need to add a field called `metadataInputs`to your configuration. This field contains an array of of values you want to collect. Here is for example how you would collect email addresses and names.

```bash
var unlockProtocolConfig = { 
  locks: {
    ... // see above
  },
  metadataInputs: [{
    name: string,
    type: 'text',
    required: true,
   }, {
    emailAddress: string,
    type: 'email',
    required: true,
   }
  ]
}
```

If you decide to collect `emailAddress`, then, we will automatically send an email to that address when their purchase is complete!

## Listing all attendees

As an event organizer, you may want to list the attendees coming to your event. This is possible through the [Unlock Dashboard](https://app.unlock-protocol.com/dashboard/). On that page, click on the members icon ![](../../.gitbook/assets/members%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29.png) on your lock in the list of locks. On the next page, you will be able to list all of the key owners \(attendees who have RSVP\) as well as the information that you have collected.

You can export the list as CSV from that page.

## QR Codes

Attendees receive a Non Fungible Token in their wallet when they purchase a ticket. This NFT _is their ticket_. However, to prove that they own the NFT, they can generate a unique QR code.

For this, they can use the [Unlock key-chain](https://app.unlock-protocol.com/keychain/). The key-chain lets user manage all of their Unlock keys, including, of course, their tickets to your event.

On each of their keys, a button lets them generate a QR code which is a cryptographic signature of their NFT. They can even chose to receive this QR code by email, should they want to use it without their crypto-wallet or the key chain.

The QR code cannot be forged, which means that a verifier can instantly make sure that it is valid and was indeed signed by the owner of a ticket.

## Checking attendees in

On the day of your event, you will ask attendees to show you their QR codes \(see section above\). The QR code can be scanned with a mobile phone camera application. The application will prompt the web browser to open the verification URL. This URL, once loaded, will show whether the ticket is indeed valid.

Additionally if the verification URL is loaded from a web browser which has the same crypto-wallet as the lock creator, then the verification page will show all of the tickets' collected attendee information.

Additionnaly, a button will be visible to mark the ticket as "checked-in". This step can be done at any point, and after that, the ticket will forever be marked as having been used. This means that the next time the ticket is scanned, a message will indicate that the ticket has already been checked-in. This prevents someone from "re-using" the QR code that someone else already used.

