# Lock Contract

## Overview

The Lock Smart Contract has multiple capabilities:

* _Administrative_: these are the functions which change ownership of the lock or change the address of the Unlock Protocol smart contract, as well as the maximum number of keys, their release mechanism \(public, pre-validated, private\) or their expiration \(period, date or interval\) and of course their price \(including the mechanism used to set the price: fixed or variable\). Finally, there is a method to withdraw funds from the lock contract itself.
* _Transferring key ownership_: keys can be purchased from the lock smart contract itself or from another user who purchased one previously. Another element is that keys can be purchased on behalf of somebody else \(this is important because this lets somebody pay gas fees on behalf of somebody else\)
* _Changing key attributes_: the keys have an expiration date which can be changed \(for an earlier date by the lock owner\) as well as data attributes which can be changed to something else.

## Structs

###  Key

The key is a struct which encapsulate data relative to an individual key. It has the following fields:

* **`tokenId`** **\(** _**uint**_ **\)**: A unique identifier for each key on a given lock.
* **`expirationTimestamp`** __ **\(** _**uint**_ **\)**: the timestamp at which the key is not considered valid anymore. The lock owner only can change this value, effectively expiring individual keys.

