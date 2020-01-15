---
description: These are the types referred to as the payloads for post messages.
---

# Types used in messages

## Balance

```typescript
// Mapping of currency name or address (?) to the amount held in
// user's wallet.
export interface Balance {
  [currency: string]: string
}
```

Because the balances associated with an address are chain data, the likely originator in all cases is the `BlockchainHandler`, which probably sends it to the checkout iframe. Managed user accounts have their balances intercepted and modified to present the checkout iframe the idea that user accounts always have exactly the amount that will enable a purchase on DAI locks.

## KeyResults

```typescript
export interface KeyResult {
  lock: string
  owner: string | null
  expiration: number
}

export type KeyResults = { [key: string]: KeyResult }
```

Sent from `BlockchainHandler`, at the moment it is not directly consumed by any iframe except as part of the lock composite. Discrete payloads of keys, locks, and transactions will be used in the future instead of having the `BlockchainHandler` massage all the data into shape.

## Locks

```typescript
// Massaged by BlockchainHandler to include a reference to a key,
// even if no key actually exists. This behavior will change in 
// the near future.
export interface Lock {
  name: string
  address: string
  keyPrice: string
  expirationDuration: number
  key: Key
  // null if eth lock, address of currency if ERC20
  currencyContractAddress: string | null
  asOf?: number
  maxNumberOfKeys?: number
  outstandingKeys?: number
  balance?: string
  owner?: string
}

// Maps lock address to lock object
export interface Locks {
  [address: string]: Lock
}
```

Produced by `BlockchainHandler` and sent to checkout iframe in `PostMessages.UPDATE_LOCKS`

## PaywallConfig

```typescript
// Just a record containing a name override to display on the Paywall.
// Seemingly required, unclear what happens with a blank string.
export interface PaywallConfigLock {
  name: string
}

// Maps lock address to name override above
export interface PaywallConfigLocks {
  [address: string]: PaywallConfigLock
}

// Messages displayed on the paywall in various states (not all used?)
export interface PaywallCallToAction {
  default: string
  expired: string
  pending: string
  confirmed: string
  noWallet: string
}

// Represents window.unlockProtocolConfig -- must be present for paywall to work
export interface PaywallConfig {
  icon?: string
  unlockUserAccounts?: true | 'true' | false
  callToAction: PaywallCallToAction
  locks: PaywallConfigLocks
}
```

Originates in the main window. Inference is that main window sends the paywall configuration to the checkout using `PostMessages.CONFIG`, but we should investigate more to be sure that's the only use.

## PurchaseKeyRequest

```typescript
// In practice, extraTip is always '0'
export interface PurchaseKeyRequest {
  lock: string // lock address
  extraTip: string // extra value to add in addition to key price
}
```

Received by the accounts iframe and used to intitiate a managed key purchase.

## Transactions

```typescript
export enum TransactionStatus {
  SUBMITTED = 'submitted',
  PENDING = 'pending',
  MINED = 'mined',
  STALE = 'stale',
  FAILED = 'failed',
  NONE = '', // for testing purposes
}

export enum TransactionType {
  LOCK_CREATION = 'LOCK_CREATION',
  KEY_PURCHASE = 'KEY_PURCHASE',
  WITHDRAWAL = 'WITHDRAWAL',
  UPDATE_KEY_PRICE = 'UPDATE_KEY_PRICE',
}

export interface Transaction {
  status: TransactionStatus
  confirmations: number
  hash: string
  type: TransactionType
  blockNumber: number

  createdAt?: Date
  to?: string
  for?: string
  from?: string
  lock?: string
  name?: string
  key?: string
}

// Maps from transaction hash to transaction object
export interface Transactions {
  [hash: string]: Transaction
}
```

Transactions are retrieved by the `BlockchainHandler` and are likely consumed only by the checkout iframe

## web3MethodCall

```typescript
export interface web3MethodCall {
  method: string
  params: any[]
  jsonrpc: '2.0'
  id: number
}
```

## web3MethodResult

```typescript
interface web3MethodErrorResult {
  id: number
  error: string
  jsonrpc: '2.0'
}

interface web3MethodSuccessResult {
  id: number
  jsonrpc: '2.0'
  result: {
    id: number
    jsonrpc: '2.0'
    result: any
  }
}

export type web3MethodResult = web3MethodErrorResult | web3MethodSuccessResult
```

## Web3WalletInfo

```typescript
export interface Web3WalletInfo {
  noWallet: boolean
  notEnabled: boolean
  isMetamask: boolean
}
```

