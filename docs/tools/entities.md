# Entities

- [`Entity`](#entity)
- [`Key`](#key)
- [`UnlockDailyData`](#unlockdailydata)
- [`LockStats`](#lockstats)

# Lock

Description: get specific details of the lock

| Field              | Type           | Description                                                                                                                 |
| ------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| id                 | ID!            | Transaction hash                                                                                                            |
| address            | Bytes!         | Address of the lock                                                                                                         |
| name               | String         | A descriptive name for a collection of NFTs in this contract                                                                |
| symbol             | String         | Gets the token symbol                                                                                                       |
| expirationDuration | BigInt!        | duration is set the on the lock when you deploy and the expiration which is set on each key when they are minted            |
| tokenAddress       | Bytes!         | Unique adddress for each token                                                                                              |
| price              | BigInt!        | Price of the lock                                                                                                           |
| lockManagers       | [Bytes!]!      | An assigned role set on a Lock contract which gives the highest level of permissions to the wallet address set to that role |
| version            | BigInt!        | Unlock Protocol version of a "minting contract".                                                                            |
| totalKeys          | BigInt!        | number of keys owned by keyOwner (expired or not)                                                                           |
| maxNumberOfKeys    | BigInt!        | Setting for the max number of keys                                                                                          |
| mayKeyPerAddress   | BigInt!        | the maximum number of key allowed for a single address                                                                      |
| keys               | [`Key!`](#key) | Refer to key entity                                                                                                         |
| createdAtBlock     | BigInt         | Which block the lock was created                                                                                            |
| lastKeyMintedAt    | BigInt         | The block the last key was minted                                                                                           |

# Key

Description: get specific details of the Key

| Field          | Type    | Description                                                                                                             |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| id             | ID!     | Transaction hash                                                                                                        |
| lock           | Lock!   | In the Unlock ecosystem, a “Lock” is a smart contract that creates (or “mints”) NFTs                                    |
| tokenId        | BigInt! | tokenId for a given user                                                                                                |
| owner          | Bytes!  | The address of the key owner                                                                                            |
| manager        | Bytes   | An assigned title set on an Unlock key which gives a specific wallet address authorization to transfer, share or cancel |
| expiration     | BigInt! | Time the key expires                                                                                                    |
| tokenURI       | String  | The tokenURI on an NFT is a unique identifier                                                                           |
| createdAtBlock | BigInt! | Block key was created                                                                                                   |
| cancelled      | Boolean | Invoked by a Lock manager to expire the user's key and perform a refund and cancellation of the keyThrows               |

# UnlockDailyData

Description: get specific details of the Daily Data Unlock

| Field               | Type     | Description                                                                              |
| ------------------- | -------- | ---------------------------------------------------------------------------------------- |
| id                  | ID!      | Transaction hash                                                                         |
| lockDeployed        | BigInt!  | Create lock This deploys a lock for a creator. It also keeps track of the deployed lock. |
| keysSold            | BigInt!  | Daily number of keys sold                                                                |
| activeLocks         | [Bytes!] | Daily number of active locks                                                             |
| grossNetworkProduct | BigInt!  | Total value exchanged in the network                                                     |

# LockStats

Description: get specific details of LockStats

| Field              | Type    | Description          |
| ------------------ | ------- | -------------------- |
| id                 | ID!     | Transaction hash     |
| totalLocksDeployed | BigInt! | Total locks deployed |
| totalKeysSold      | BigInt! | Total keys sold      |
