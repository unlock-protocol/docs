# How to change the name of an existing lock

## What you'll need

- The Unlock Protocol Dashboard\

- The wallet you used to create the lock (the "lock manager" wallet)\

### Steps

#### 1) Go to the Unlock Protocol dashboard

#### 2) Go to the block explorer of the lock you want to update

![Lock Block Explorer](/img/creators/lock-block-explorer-min.png)

#### 3) Click Contract

![Contract Button](/img/creators/contract.png)

#### 4) Click "**Write as Proxy"** NOTE: If you don't see "Write as Proxy" in your block explorer, you may need to enable it. For example, on Polygonscan, you'll need to…

- _Click "Is this a proxy?"_

![Is this a proxy button?](/img/creators/is-this-a-proxy.png)

- _Verify the proxy_

![Verify Proxy button](/img/creators/verify-proxy.png)

- _Click Save_

![Click Save button](/img/creators/click-save.png)

- _Return to the contract_

![Return to the contract button](/img/creators/return-to-contract.png)

Now the "Write as Proxy" option should be available. Click "Write as Proxy."

#### 5) Connect wallet

![Connect wallet button](/img/creators/connect-wallet.png)

#### 6) Scroll down to `updateLockName` to update lock name

![UpdateLockName button](/img/creators/update-lock-name.png)

#### 7) Update the name, click "Write," and wait for transaction to complete

At this point, if you refresh your Unlock Dashboard, you'll see the new lock name.
