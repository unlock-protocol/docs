---
description: >-
  Purchasing keys to a lock can also be performed with a credit card payment.
  Here is how to enable credit cards payments for any lock.
---

# Enabling Credit Cards

## Introduction

Not all users have a crypto wallet. Similarly, even users with a crypto wallet may not have the cryptocurrency required to purchase a membership. Unlock Inc. has built a convenience layer which allows these users to easily purchase a membership to your lock with their credit cards.

For this, we rely [Stripe Connect](https://stripe.com/connect), which means that you will receive payments "off-chain" directly on the bank account that you have set-up with Stripe. The funds do not transit through Unlock and they go directly from your member's card payments to your Stripe account.

## How to enable credit cards on your lock

#### Prerequisites

- Your lock needs to be priced in a currency for which [Coinbase has a conversion price](https://developers.coinbase.com/api/v2#show-a-payment-method) in USD.
- Your lock's price in USD needs to be at least $0.50.

### Connecting a Stripe Account

The first step, if your lock is eligible, is to connect your lock to a Stripe account. For this, connect to the Unlock Dashboard. Then, click on the Credit Card button on your lock's toolbar.

![Click on the Credit Card button in your lock's toolbar](<../.gitbook/assets/image (14).png>)

Once the Credit Card pane is displayed, click on the "Connect Stripe" button. When clicking you will first be prompted to **sign** a message confirming that you own that lock (any lock manager can do that) and that you want to enable credit card payments for it. Once confirmed, you will be redirected to the Stripe Website, where you need to follow multiple steps, including connecting a bank account and providing information about your identity.

![Follow Stripe's required steps](<../.gitbook/assets/image (21).png>)

Once your application is completed, Stripe will redirect you back to the Unlock Dashboard. It may take a few days for Stripe to approve your application. Until then your lock won't be able to receive card payments.

![Stripe has been connected, but the application has not been fully approved.](../.gitbook/assets/image19.png)

### Allow Key Granting

While you are waiting for Stripe's final approval, you can perform the last step: giving Unlock Inc. the ability to grant keys to users whose credit card payment has been successfully processed (see [roles](https://docs.unlock-protocol.com/developers/smart-contracts/lock-api/access-control)). Once Unlock Inc. has charged your member's card, we will then send them the NFT so that they can use it to prove their membership. In order to do this, we need a lock manager to grant us the role of "key granting". This role can be revoked at any point (but this will disable credit card payments) and we do not receive any permission or capability on your lock.

![Once both steps are completed, your lock can now receive credit card payments.](<../.gitbook/assets/image (17).png>)

## Credit card Purchase flow

If you use Unlock's paywall application, the credit card flow is directly integrated in the checkout experience. The following screenshots illustrate the user flow.

![In this example, there is a single lock, whose price is 0.01Eth (or about $24.50 at time of writing).](<../.gitbook/assets/image (10).png>)

![The user is prompted to select their payment method.](<../.gitbook/assets/image (22).png>)

![If they select Credit card, they need to complete this information.](<../.gitbook/assets/image (12).png>)

In order to allow them to re-identify themselves, this flow creates an account for them using their email and a password of their choice that they can use to log in if they want to. Unlock Inc. does not store credit card numbers.

![Once their information was saved, they are prompted once last time to confirm the transaction.](<../.gitbook/assets/image (20).png>)

![After this, they are all set and their wallet has received the NFT from your lock.](<../.gitbook/assets/image (8).png>)

## Frequently Asked Questions

### What are the fees?

The fees are a combination of Stripe's fees (2.9% + $0.30) as well as Unlock's fees used to pay for the blockchain transaction costs (gas).

### How is fraud prevented?

When a key/NFT is purchased via credit card, Unlock Inc., as the granter, retains the key manager title (see [roles on a lock contract](https://docs.unlock-protocol.com/developers/smart-contracts/lock-api/access-control)). This role means that the NFT owner cannot sell or cancel their membership themselves directly. This mechanism prevents malevolent users from using stolen cards, as they would not be able to monetize the NFT by selling or canceling it.

### How to handle chargebacks?

When a credit card transaction has been reversed, it is recommended that the lock owners cancel the existing user's membership as this user should not be able to benefit from their canceled membership anymore.
