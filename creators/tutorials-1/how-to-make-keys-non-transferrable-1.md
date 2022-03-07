# How to change the name of an existing lock

_Time required: 3-5 minutes_

### **What you'll need:**

* The Unlock Protocol Dashboard\

* The wallet you used to create the lock (the "lock manager" wallet)\


### Steps:

#### 1) Go to the Unlock Protocol dashboard

#### 2) Go to the block explorer of the lock you want to update 

![](../../.gitbook/assets/lock-block-explorer-min.png)

#### 3) Click Contract

![](../../.gitbook/assets/contract.png)

#### 4) Click "**Write as Proxy"**  NOTE: If you don't see "Write as Proxy" in your block explorer, you may need to enable it. For example, on Polygonscan, you'll need to… 

_Click "Is this a proxy"_

![](../../.gitbook/assets/is-this-a-proxy.png)

_Verify the proxy_

![](../../.gitbook/assets/verify-proxy.png)

_Click Save_

![](../../.gitbook/assets/click-save.png)

_Return to the contract_

![](../../.gitbook/assets/return-to-contract.png)

Now the "Write as Proxy" option should be available. Click "Write as Proxy."

#### 5) Connect wallet

![](../../.gitbook/assets/connect-wallet.png)

#### 6) Scroll down to `updateLockName` to update lock name 

![](../../.gitbook/assets/update-lock-name.png)

#### 7) Update the name, click "Write," and wait for transaction to complete



At this point, if you refresh your Unlock Dashboard, you'll see the new lock name.

