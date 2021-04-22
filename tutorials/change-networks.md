---
description: >-
  Being interoperable is important to us! 
  Here is a simple example to switch the network the purchase will take place on.
---


## Creating a config

A config is crucial for use of the paywalls, here is an example.

```bash
var unlockProtocolConfig = { 
  locks: {
    '0xabc': { // 0xabc is the address of a lock, obtained from the dashboard
      name: 'Developer Conference' // this is optional
    },
  metadataInputs: [{
    name: string,
    type: 'text',
    required: true,
   }, {
    emailAddress: string,
    type: 'email',
    required: true,
   }
  ]
}
```


### Switching networks

If no network config is provided the scripts will default to Etherum mainnet.

Here is an example of a network config for xDai:
```bash
network:100
```

Adding that to the previous config will look like this:
```bash
var unlockProtocolConfig = { 
  locks: {
    '0xabc': { // 0xabc is the address of a lock, obtained from the dashboard
      name: 'Developer Conference' // this is optional
    },
  metadataInputs: [{
    name: string,
    type: 'text',
    required: true,
   }, {
    emailAddress: string,
    type: 'email',
    required: true,
   }
  ],
  network:100
}
```

### Network Options

The current network options are:

xDai
```bash
network:100
```

Etherum mainnet
```bash
network:1
```
Rinkbey
```bash
network:4
```


>
