# Unlock Contract

The Unlock Smart contract is only deployed once. It has several roles:

* Deploying Locks: locks are deployed through the Unlock smart contract. This is important because the Locks will actually invoke the Unlock smart contract when keys are sold and the Unlock smart contract will check that the invoking lock has been deployed through it.
* Keeping Track of the Unlock Discount Tokens. Unlock Discount Tokens are ERC20 tokens \(TODO\) which implement the Unlock network loyalty program. The Discount Tokens are granted when keys are purchased, either thru referrals or when a creator grants a discount.
* Granting Discount. The Unlock smart contract will compute the available discount for each key purchase based on the amount of discount tokens owned by the key buyer.

This smart contract needs to be "upgradable" to deploy changes. It is critical that its address does not change however so that all the Locks deployed by it can still access it. We are using zeppelinOS \(zOS\) to enable upgradeability. This requires us to use openzeppelin-eth \(instead of openzeppelin-solidity\), as its contracts have been modified to use init functions instead of constructors. Openzeppelin-solidity does not work correctly!

### **Structs**

**LockBalances**

The LockBalances is a struct which encapsulate data relative to an individual lock deployed through the smart contract. Keeping these balances will help us assess how many discount tokens a given lock can yield optimaly.

It has the following fields:

* _deployed_ \(boolean\) : A boolean to indicate that a lock has been deployed \(this is required because both default values for `tokenSales` and `yieldedDiscountTokens` are 0 which is the same for non deployed locks\).
* _totalSales_ \(unsigned integer\) : An unsigned integer to keep track of the total sales for this lock.
* _yieldedDiscountTokens_ \(unsigned integer\): An unsigned integer to keep track of the total number of discount tokens yielded through that lock.

**Data**

1. Owner of the Unlock Discount Token smart contract. This is by default the deployer of the Unlock smart contract but all discount token holders can eventually vote to replace that owner.
2. Max available discount share \(TODO\): this is the first golden rule of the protocol, fixed at 20% for now. The owner only can adjust that value.
3. Max growth rate for the token supply \(TODO\): this is the 2nd golden rule of the protocol, fixed at 50% of the network growth for now. The owner only can adjust that value.
4. The total network's gross product \(TODO\): this is the total sales generated on the network for all keys sold from all locks. We should also "snapshot" that value at intervals to keep track of the network's growth rate.
5. This is the total amount of discounts granted \(TODO\). This is akin to the total network's gross product and used to compute the total available discount at any point in time.
6. A mapping of lock addresses into LockBalances which is used to ensure that only deployed locks are invoking certain methods. The data is also used to make sure each Lock only distributes an "appropriate" number of discount tokens.
7. Token name \(ERC20 TODO\)
8. Symbol \(ERC20 TODO\)
9. Decimals \(ERC20 TODO\)
10. Total supply of discount tokens \(ERC20 TODO\)
11. Balances of Discount Tokens balances \(ERC20 TODO\)
12. Allowed transfers of Discount Tokens \(ERC20 TODO\)

**Methods**

**ERC20**

See [https://theethereum.wiki/w/index.php/ERC20\_Token\_Standard](https://theethereum.wiki/w/index.php/ERC20_Token_Standard)

**Locks**

The Unlock smart contract provides several functions to handle locks. One of them is to deploy them and previously deployed locks \(and only them\) can invoke a set of functions on the Unlock Smart Contract.

* createLock: This function can be invoked by anyone and will deploy a lock which belongs to them. The Lock can be deployed with its key release mechanism \(public, restricted, private\), the duration for each key, the price for each key and the maximum number of keys per lock.
* computeAvailableDiscountFor: This function does not change the state. When provided a user's address, and the price of a key, it will return a pair which corresponds to the maximum discount available to a user. That pair includes both the amount of discount \(in Eth\) and the balance of the user's discount tokens used to provide that discount.
* recordKeyPurchase: This function can only be invoked by previously deployed locks. This function keeps track of the added GDP, as well as grants of discount tokens to the referrer, if applicable. The number of discount tokens granted is based on the value of the referal, the current growth rate and the lock's discount token distribution rate.
* recordConsumedDiscount: This function can only be invoked by previously deployed locks and keeps track of consumed discounts by a given user. It also grants discount tokens to the creator who is granting the discount based on the amount of discount and compensation rate.

**Modifiers**

We use modifiers to restrict calls to certain functions.

* onlyFromDeployedLock: this method can only be invoked by a previously deployed lock.

**Events**

TODO

