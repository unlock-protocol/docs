---
id: Checkout
title: Checkout
description: >-
  Explainer on the what the checkout endpoint is which exists as part of
  the Unlock Protocol app.
---

# Checkout

Unlock Protocol has an app, most people are familiar with the Dashboard, Members
and Keychain portions, but that app has an endpoint called checkout which accepts
a configuration object as params and returns a custom configured checkout experience.

## The experience
This experience can also be used in a few different ways:
1. To implement an Unlock enabled sign-in with Ethereum ([SIWE](../sign-in-with-ethereum/))
1. Stand-alone as a link you distribute to your members via email, Discord, etc.
   for minting your membership/ticket/credential NFT
1. Embedded in your website directly
1. In combination with the Paywall our javascript library which is a thin
    wrapper around the checkout and Unlock APIs

## Examples
There are two places you can experience what that looks like without
having to write any code or configure your own URL.

We use it on our [homepage](https://unlock-protocol.com/)
so people can get an Unlock Membership and get members-only access in our Discord
server.

<p>
  <img alt="unlock homepage membership button" width="300" src="/img/tools/checkout/unlock-homepage-member-button.png"/>
</p>

From the Unlock [Dashboard](https://app.unlock-protocol.com/dashboard).
After you [deploy your first "Lock"](../../basics/new-to-unlock/deploying-a-lock) and
the transaction has been confirmed then you can click on the "demo" button and
that will pull up an example webpage with the checkout embedded based on the default
configuration and using the information from your lock.

![unlock dashboard demo button](/img/tools/checkout/unlock-dashboard-demo-button.png)
