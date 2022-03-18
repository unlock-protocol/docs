---
description: >-
  In this tutorial, we will see how to use the a subgraph in order to retrieve
  large amounts of data from the protocol.
---

# Using Subgraphs

RPC endpoints are only able to return a single piece of information at a time, such as the name of a single lock, or the expiration date of a single key... etc.

Retrieving multiple attributes of an object or a list of objects is generally costly and not recommended. For that, subgraphs are a better solution. The way to think about Subgraphs is as "views" of the data stored on chains that is organized and indexed using different dimensions. They use the popular [GraphQL](https://graphql.org) API query language to make it trivial to quickly retrieve large amounts of data.

In this tutorial, we will write a function that uses Unlock's subgraphs to retrieve a list of locks managed by a given address. We actually use a similar approach to load a user's lock on [our dashboard](https://app.unlock-protocol.com/dashboard).

## Building the request

The first step is to build the request itself. For this, The Graph offers a convenient _Playground_ tool. Let's look at an example with our xDAI subgraph (all networks share the same schema).

![Subgraph Explorer](/img/developers/subgraph-explorer.png)

In the left column, you can see a query builder that you can use to customize your queries. The right column provides a convenient way to inspect the schema and auto-complete your queries.

In order to get the locks managed by a given address, we build the following request:

```javascript
{
  lockManagers(where: { address: "0xDD8e2548da5A992A63aE5520C6bC92c37a2Bcc44" }) {
    lock(orderBy: creationBlock, orderDirection: desc) {
      address
      name
      price
      tokenAddress
      expirationDuration
      totalSupply
      maxNumberOfKeys
    }
  }
}
```

We first get the `lockManager` whose address matches the one we're looking for, and then, retrieve the locks, sorted by the creation block in a descending order (first in the list is the most recent). For each lock, we get their address, name, price, token (if it is an ERC20 lock), duration, as well as total supply and maximum number of memberships.

## Sending the request

There are exists multiple GraphQL libraries in many languages. Here we will focus on the most basic approach: using JavaScript's fetch function that is available in any web browser environment, but also in node.js using [`node-fetch`](https://www.npmjs.com/package/node-fetch).

```javascript
// We build the query, with a variable $owner
const query = `query Locks($owner: String!) {
  lockManagers(where: { address: $owner }) {
    lock(orderBy: creationBlock, orderDirection: desc) {
      address
      name
      price
      tokenAddress
      expirationDuration
      totalSupply
      maxNumberOfKeys
    }
  }
}`;

// We set the variable's value to the the user's address
const variables = { owner: userAddress };

// We send a POST request to the subgraph endpoint of our choice (change if using a different network!)
// The body of the request must include a stringified version of and object built with the query and variables
const result = await fetch(
  "https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }
).then((r) => r.json());
```

The `result` variable will be populated with the result of the query. It will be an array, with all of the information that was retrieved, and matching the query's format. More specifically, here it includes the following: a `data` object that includes a single property: `lockManagers` and a list of matching locks!

```json
{
  "data": {
    "lockManagers": [
      {
        "lock": {
          "address": "0x0dbcdfef8f5b0f8bb3de068cdc56d4c6b6d68914",
          "expirationDuration": "864000",
          "maxNumberOfKeys": null,
          "name": "xDAI Lock",
          "price": "100000000000000000",
          "tokenAddress": "0x0000000000000000000000000000000000000000",
          "totalSupply": "0"
        }
      },
      {
        "lock": {
          "address": "0x18c39c5ed5c28681a1b44e31488a5639439419a1",
          "expirationDuration": "31536000",
          "maxNumberOfKeys": null,
          "name": "Ouvre-Boite",
          "price": "5000000000000000000",
          "tokenAddress": "0x0000000000000000000000000000000000000000",
          "totalSupply": "0"
        }
      }
    ]
  }
}
```

## Next steps

GraphQL lets developers build complex queries to retrieve data from the blockchain that can be used to populate fields in your web3 application!
