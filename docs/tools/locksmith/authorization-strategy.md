---
description: Understanding Locksmith's Authorized Request Approach
---

# Authorization Strategy

The Locksmith service leverage's signatures allowing authorized requesters to retrieve and write to data. 

Using standard signing methods provided with most Ethereum libraries, Locksmith makes this process relatively straight forward. 

### Authorization Header

Request must include an `Authorization` header

Signing using 'Typed data'  the header should conform to the following:

```solidity
Bearer Base64 Encoded(Typed data signature of payload)
```

When signing using a simple signature, the header should conform to the following: 

```solidity
Bearer-Simple Base 64 Encoded(Simple signature of stringified payload)
```

### Constructing a payload

Locksmith generally expects the payloads signed to conform to the[ EIP712 specification](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md). In noted scenarios the "stringified" JSON version of the payload may be accepted.   





 



