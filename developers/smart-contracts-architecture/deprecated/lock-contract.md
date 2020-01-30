# Lock Contract

A Lock contract is a smart contract “class”, deployed on an Ethereum Blockchain and written in Solidity. Each instance is owned by a creator and represents access to a given resource \(or set of resources\). The Lock keeps track of its keys, which are non fungible tokens. We do not expect any deployed lock to be upgraded, however we will likely introduce more complex versions of the Lock with more features or characteristics.

One of its characteristics is that instances of it are deployed **from the Unlock Protocol smart contract**. The goal of this is to guarantee that the Unlock Protocol smart contract can keep track of revenue it generates as well as decides of discounts when users purchase them. As such the “address” of the Unlock Smart Contract is kept in each Lock contract and can only be changed by the Unlock Smart Contract itself.

The Lock Smart Contract should implement [ERC721](https://github.com/ethereum/eips/issues/721) . We should also make sure the token can be used with existing ecosystem elements such as protocols \(0x\) and existing applications \(Metamask, Toshi, Rarebits…\) which would ease user adoption.

One of the design decisions shaping the lock contract was to make it customizable so it can adapt to the very large set of capabilities which locks can cover.

It is worth considering whether we have a single "Lock" smart contract, or multiple different Lock smart contracts inheriting from the "base" Lock smart contract. The latter may actually a lot more cost efficient.

The Lock Smart Contract has multiple capabilities:

* _Administrative_: these are the functions which change ownership of the lock or change the address of the Unlock Protocol smart contract, as well as the maximum number of keys, their release mechanism \(public, pre-validated, private\) or their expiration \(period, date or interval\) and of course their price \(including the mechanism used to set the price: fixed or variable\). Finally, there is a method to withdraw funds from the lock contract itself.
* _Transfering key ownership_: keys can be purchased from the lock smart contract itself or from another user who purchased one previously. Another element is that keys can be purchased on behalf of somebody else \(this is important because this lets somebody pay gas fees on behalf of somebody else\)
* _Changing key attributes_: the keys have an expiration date which can be changed \(for an earlier date by the lock owner\) as well as data attributes which can be changed to something else.

## **Structs**

### **Key**

The key is a struct which encapsulate data relative to an individual key. It has the following fields:

* tokenId \(uint\): A unique identifier for each key on a given lock.
* expirationTimestamp __ \(uint\): the timestamp at which the key is not considered valid anymore. The lock owner only can change this value, effectively expiring individual keys.

### **Data**

1. Unlock Protocol address \(UPC\): This is the address of the Unlock Protocol Contract. It is set upon creation of the Lock and will be used to invoke the Lock when recording key purchases and more.
2. Owner address: Address of the owner of the Lock smart contract. This address is able to withdraw funds from the contract as well as grant keys, authorize individual purchases \(if applicable\)… etc.
3. Keys: This is a mapping of addresses to keys which represents the list of keys. In our approach each address can own at most one key per lock. We anticipate that smart contracts can themselves be key owners, allowing for shared ownership of a given key.
4. Owners: This is an array of all the owners of keys. It can be used to iterate over the keys.
5. Expiration Duration: This is the number of seconds during which each created key for this lock is valid by default when purchased. Lock owners can change individual key duration at their own discretion but the “default” is fixed.
6. Price: This is the price, expressed in Ether, of each individual key, set by the owner. This price can/should \(TODO\) be changed by the owner to reflect conversion rates if they want to provide a stable fiat currency price.
7. Max number of keys: The beneficiary can decide of a maximum number of keys to be sold publicly. If none is set \(TODO\), the contract can sell an unlimited number of keys.
8. List of approved transfers. This is applicable to both the lock owner approving new key purchasers or key owners approving another user to take over their key.

## **Methods**

### **Administrative**

These are the function which change some parameters for the Lock or check its status

* setKeyPrice \(TODO\) : updates the price of new keys
* totalSupply : get the number of outstanding keys
* numberOfOwners : get the total number of unique owners \(both expired and valid\). This may be larger than totalSupply.
* balanceOf \(ERC721\) : get the number of keys for a given owner \(0 or 1\)
* ownerOf \(ERC721\) : get the owner of a key \(if applicable\)
* keyDataFor : get the value of the data field for a key
* keyExpirationTimestampFor : get the expiration date for a key
* getApproved \(ERC721\) : get the address of the approved recipient for a key \(\)
* withdraw : lets the owner of the lock withdraw the funds on the lock

**Transfering key owner:**

Keys can be purchased from the lock smart contract itself or from another user. Another important element is that keys can be purchased on behalf of somebody else \(this is important because this lets somebody pay Eth fees on behalf on somebody else\)

* purchaseFor : purchases a key for a given address and sets its data field
* purchaseForFrom : purchases a key for a given address after a referral and sets its data field.
* transferFrom \(ERC721\) : transfers ownership of a key
* approve \(ERC721\) : approve transfer of a key

**Changing key attributes:**

The keys have an expiration date which can be changed \(for an earlier date by the lock owner\), or data attributes which can be changed to something else, by their owner only.

* expireKeyFor : Expires an existing
* changeKeyData \(TODO\) : change the data field for a given key

**Modifiers**

We use modifiers to restrict calls to certain functions.

* onlyPublic : can only be called on public locks
* onlyLockOwnerOnRestrictedOrKeyOwnerInPublic : can only be called by the lock owner on a restricted or public lock or by the key owner on a public lock.
* hasKey : can only be called for existing key
* hasValidKey : can only be called for existing and valid key
* onlyKeyOwner : can only be called by the owner of the key
* onlyPublicOrApproved : Ensures that the lock is public or that the sender has been approved on restricted locks
* onlyKeyOwnerOrApproved : Ensures that the caller has a key or that the caller has been approved for ownership of that key
* notSoldOut : Ensures that not all keys have been sold.

**Events**

TK

