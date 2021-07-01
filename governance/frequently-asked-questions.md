---
description: Frequently Asked Questions
---

# FAQ

## Why is Unlock better for publishers, and for users?

With Unlock, users and publishers don't go through a middleman. This means lower friction for the user, and both better conversions and prices for the publisher. It also means that anyone can run Unlock's code - you don't have to use our services.

## Who is Unlock for?

Our first version of Unlock is for technical publishers who also control their technology platform, and whose audience is technical early adopters who use a cryptocurrency wallet.

## How does Unlock make money?

As part of our roadmap, we plan on allowing users who do not know of cryptocurrencies or have a crypto wallet to pay us \(Unlock Inc\) with their credit card in order to perform the transaction on chain for them. In that context we will charge a convenience fee on top of the \(crypto\) price of the keys. This convenience fee will cover the gas price, the credit card transaction and a small margin for us.

## What crypto wallet are supported?

Unlock is powered by Ethereum, which means that you can use your own wallet to purchase memberships \(we call them keys\).

We recommend the use of in-browser wallets such as [MetaMask](https://MetaMask.io/) \(for both Firefox and Chrome\), or browsers which include wallets directly, such as [Opera](https://www.opera.com/) or [Brave](https://brave.com/).

We added support for [WalletConnect](https://walletconnect.org/), which means any wallet which supports it can be used with Unlock.

If you do not have your own cryptocurrency wallet, you can create an account with Unlock and purchase memberships with your traditional payment \(credit or debit\) cards on _selected_ _locks_.

## Can users bypass the paywall?

Our goal is to optimize for convenience and remove as much friction as possible. We want to make it easy for most people to pay to access the content they care about. This means that yes, some users will find ways to abuse Unlock's paywall by tinkering through the JavaScript console in their web browsers.

We are working to provide lower level integrations which will make it harder to bypass limitations set by creators, but as always these will come at the expense of some usability for creators and consumers.

We strongly believe that, at this point, the biggest revenue loss for creators online is not because of fraud, but because of inconvenience.

## What is Optimistic Unlocking?

When you purchase a lock and you see a Confirming Purchase notification we're using Optimistic Unlocking to confirm your purchase.

Usually a transaction needs to be confirmed on the Ethereum Blockchain before it is validated – this can take a few minutes, depending on how busy the network is. Optimistic Unlocking provides you access while the transactions is confirming rather than after. We do this to create a faster purchase and more seamless user experience. Read more about it in our release [blog post](https://medium.com/unlock-protocol/optimistic-unlocking-a539d08bf756).

## Are the smart contract audited?

No. We will hire an independent team to perform an audit of our smart contracts, but we have decided that it is too early for this. We decided to take a very incremental approach to implementing the full protocol and we believe that there will be a lot of changes which would make an audit irrelevant at this point.

We strongly advise lock owners to frequently withdraw funds on their locks. Funds are safer when "owned" by an address than by a contract, even if audited. We will also make what it takes in case of fraud to help recover lost revenue until the contracts have been under audit.

## Can Unlock be used for more than text?

Yes! Even though our earliest iterations are around paywalls for text, we are designing and building the protocol so that it can be applied to any kind of media \(audio, video\) or even software. This will require more integration points \(not all content is just HTML in a web page\), and we're happy to take suggestions and contributions!

## Do I need cryptocurrencies to access the content of my favorite sites with a Lock?

Right now: yes.

Eventually: no. Our roadmap is to start with the most "crypto-friendly" crowds because they know and understand some of the constraints that arise from using cryptocurrencies ... but it is our goal to make it trivial for anyone to use Unlock, whether they want, care or even know about cryptocurrencies.

## Do I need a crypto-wallet to access the content of my favorite sites with a Lock?

Right now: yes.

Eventually: no. We plan on making it easy for people who do not have a crypto wallet to use an Unlock application which can help them manage their keys.

## Does Unlock work on mobile devices?

Yes - if you are using an Ethereum-enabled web browser such as Opera or Coinbase's Wallet.

## What networks are supported?

Unlock aims at supporting any EVM compatible blockchain and layer 2. Here is a list of networks and the addresses of the contracts on each of them. Please [open a governance proposal](https://snapshot.org/) if you want us to be deployed on more networks!

Production networks:

1. Ethereum mainnet: [`0x3d5409cce1d45233de1d4ebdee74b8e004abdd13`](https://etherscan.io/address/0x3d5409cce1d45233de1d4ebdee74b8e004abdd13)
2. Xdai: [`0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863`](https://blockscout.com/xdai/mainnet/address/0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863) \(configure [MetaMask for xDAI](https://www.xdaichain.com/for-users/wallets/metamask)\)
3. Polygon \(ex-Matic\): [`0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863`](https://polygonscan.com/address/0x14bb3586Ce2946E71B95Fe00Fc73dd30ed830863) 

Test networks:

* Rinkeby: [`0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b`](https://rinkeby.etherscan.io/address/0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b)
* Kovan: [`0x0B9fe963b789151E53b8bd601590Ea32F9f2453D`](https://kovan.etherscan.io/address/0x0B9fe963b789151E53b8bd601590Ea32F9f2453D)

## As a creator, can I set a recurring membership?

Yes! The "lock" itself does not include the logic for recurring memberships, but we provide another contract, called the [KeyPurchaser](https://docs.unlock-protocol.com/developers/smart-contracts/key-purchaser), whose logic enables recurring membership. At a high level, this only works for ERC20 locks, and leverages the _allowance_ mechanism of the ERC20 specification. Instead of purchasing a key themselves, members have approve the `keyPurchaser` contract to spend some of the ERC20 tokens. They will approve a multiple of the key price, which will let the creator \(or a third party, like Unlock Inc\) call the `keyPurchaser` contract to purchase keys for them. The `keyPurchaser` contract guarantees that not all ERC20 tokens are withdrawn at once, by only performing successful key purchases when a an existing key is soon to be expired.

## How much gas does it cost to purchase a key to a lock?

When purchasing a key to a lock, the member has to also pay for gas to the Ethereum network in order to get the transaction mined. Here are rough indication of the gas amount to be paid to purchase a key a a lock when the purchases did not have a key previously \(this can vary base on some lock specific parameters, such as the lock version\):

* ETH lock: 160,000 gas,
* ERC20 lock: 175,000 gas, to which we should add 45,000 for the ERC20 approval

  When performing renewals, the user should expect to spend 70,000 gas.

Note for ERC20 locks, if your application uses the key purchaser pattern, then, the user only has to pay for the ERC20 approval, while the entity sending the transaction has to pay for the key purchase gas.

We are well aware that the Ethereum mainnet may soon become impractical as gas fees are skyrocketing. Please use Unlock on other EVM chains, such as xdai \(just point your wallet to the xDAI chain\)

## What are the Credit Card Fees?

When you pay with credit card we charge fees to cover stripe credit card processing, the blockchain transaction fees and an Unlock Inc. fee.

## Can I use a custom token instead of ETH or xDAI for my lock?

Yes! You can use any ERC20 token. Check out the instructions [here](https://docs.unlock-protocol.com/creators/deploying-lock#creating-a-lock-for-a-custom-erc20-token).

