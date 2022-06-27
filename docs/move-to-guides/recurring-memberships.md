---
description: >-
  Making your memberships automatically recurring is a critical step to reduce
  friction for your members while at the same time increase your revenues.
---

# Recurring Memberships

When you [create your lock](https://unlock-protocol.com/guides/how-to-create-a-lock/), you will be prompted for a base duration for each membership. When your members purchase their memberships, their "keys" will be set to expire based on that duration. After that, depending on how you setup your checkout URL and depending on how you configure your lock, these memberships could be automatically recurring!

### Requirements

Not all locks are eligible for recurring memberships and not all memberships can be renewed automatically. It should also be noted that members can stop their recurring membership(s) _at any point._

#### Locks

First, the lock needs to be an ERC20 lock. This means that the lock needs to be "priced" in a token that supports the _approval_ mechanism. In order to be renewed, the member will explicitly approve the lock contract to spend their ERC20 tokens for an amount that correspond to the _total_ amount to be spent for all the renewal. If you want to create recurring memberships in any chain's native currency, you will need to use the "wrapper" version of that token, like [WETH](https://weth.io/), or [`WXDAI`](https://www.xdaichain.com/for-developers/developer-resources/wrapped-xdai) or [WMATIC](https://polygonscan.com/token/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270).

For example, let's consider a lock uses USDC as its currency and the keys are sold for 5 USDC for 30 days. As a lock manager, you can ask users to approve a total of 60 USDC if you want the memberships to be automatically renewed for 1 year (5 x 12 = 60).

Additionally, the lock _should_ include a gas refund. When configuring a lock, a lock manager can set an amount of tokens that should be paid back to the sender of a transaction. This creates an economic incentive for miners to execute the renewal transaction, as long as the gas refund itself exceeds in value the amount of gas paid.

It is also important to note that the price AND duration of the memberships on a lock need to be _stable_. If the price or duration are changed, all the existing memberships that would have succeeded will fail.

#### Membership

First of all, only memberships that have been explicitly bought _once_ by their owner can be renewed. It means that it is not possible to renew a membership that was airdropped or one that was initially transferred from another member.

Then, the membership needs to be in an "expired" state in order to be renewed. That means that if a user purchases a membership today for 30 days, the renewal transaction cannot be triggered until it has been expired, or 30 days from today.

Finally, the owner of the membership needs to have approved a large enough amount of the ERC20 used by the lock, and still own enough of that ERC20 when the renewal transaction will be sent. If their balance or approval amount are less than the price of the memberships, the renewal will not be triggered.&#x20;

Importantly, the user does _not_ need to have the full balance of ERC20 available at the time of the first purchase, or at the renewal time. They only need to have the sufficient balance for a single membership.

### How to enable recurring memberships

If your lock follows the pre-requisites stated above, it can be enabled with recurring memberships. The dashboard includes a link to enable recurring transactions:&#x20;

![Keys on this lock cost 1 USDC per day. Clicking on the "Enable Recurring" will enable recurring memberships.](/img/developers/recurring-membership-screen.png)

Once enabled, you can easily build checkout urls that include the attribute `recurringPayments` inside of a lock's configuration (see [Configuring Checkout](../Tools/Paywall/configuring-checkout.md)). This value is the number of times you want the membership to be renewed and the users will approve the lock to spend a total of `recurringPayments` multiplied by the current key price.

> Example: [this checkout URL](https://app.unlock-protocol.com/checkout?redirectUri=https%3A%2F%2Fapp.unlock-protocol.com%2Fdashboard&paywallConfig=%7B%22locks%22%3A%7B%220x17172Be00C2143Ce8c4e84d19413EeBCAbb81C77%22%3A%7B%22network%22%3A4%2C%22recurringPayments%22%3A365%7D%7D%2C%22pessimistic%22%3Atrue%2C%22persistentCheckout%22%3Atrue%2C%22icon%22%3A%22https%3A%2F%2Flocksmith.unlock-protocol.com%2Flock%2F0x17172Be00C2143Ce8c4e84d19413EeBCAbb81C77%2Ficon%22%7D) lets use purchase a recurring membership for [this lock on the Rinkeby network](https://rinkeby.etherscan.io/address/0x17172Be00C2143Ce8c4e84d19413EeBCAbb81C77). For this you will need some Rinkeby Ether to pay for gas on the first transaction, as well as some Rinkeby USDc (a total of 365 since it will renew every day for 1 year). [You can get both of this faucet](https://faucet.paradigm.xyz/).&#x20;

Any user who goes through that process will be then prompted to approve the total amount. After that, you are all set.&#x20;

### Managing recurring memberships

We are working on adding features to the dashboard so that a creator can easily view if memberships are renewable and if they failed to renewed.

Similarly, we are adding capabilities for members themselves to manage their memberships (through the keychain) as well as stop or change any recurring memberships.&#x20;

### Decentralization and economic incentives

The Public Lock contract now includes a function called `renewMembershipFor` that can be called by _anyone_ to renew an existing membership. This function will only succeed if the price and duration on the lock are unchanged from when the owner of that membership purchased it for themselves, as well as if the key is actually expired.&#x20;

If it succeeds, this function will withdraw from the key owner's ERC20 balance, and extend the expiration for that specific key. The lock will issue a token transfer to the sender in order to cover the gas spent. Additionally, that function also takes a `referrer` argument and will[ yield UDT token](../governance/the-unlock-token/) to that address in order to distribute ownership and governance of the protocol.

Unlock Inc. is already running a worker to issue transactions that will renew expired memberships. We expect other actors to issue similar workers. In that instance, and if 2 transactions are emitted to renew an expired key, only the first one to be mined will succeed (as the 2nd one will try to extend a key that is not expired anymore), resulting in a waste of gas. Using [flash-bots](https://docs.flashbots.net/) and other MEV mechanisms provides the ability to avoid wasting gas in these scenarios.
