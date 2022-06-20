# Unlock Dashboard

The [Unlock Dashboard](https://app.unlock-protocol.com/dashboard) is a fully optional UI that developers and creators can use to deploy their locks and manage them. The dashboard interracts with the smart contracts and other tools like our subgrapgs to retrieve data and let lock manager change their state. It is perfectly possible to reproduce the experience into other applications, or even use the command-line to perform any of the operations that the dashboard offers!

## Deploying a lock

If you are building an integration, or a plugin that uses Unlock, you will likely start by deploying a lock (the membership smart contract) on a test network.

<iframe width="750" height="422" src="https://www.youtube.com/embed/jKj3l4Ei-i4" title="Create a Lock" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Locks are smart contracts on an Ethereum compatible blockchain. This provides creators with **unmediated control over who can access their work**, and how much they want to charge for this. Unlock Labs provides a simple dashboard to create a lock [here](https://app.unlock-protocol.com/dashboard).&#x20;

When creating a lock, the creator can select the following attributes:

- The name of the lock (easier to identify it than its Ethereum address)
- The duration of each key (how long they are valid for)
- The price consumers need to pay to get a key, including its currency
- How many keys at most can be sold

Once deployed the lock will have its own address and is **fully owned** by the creator (no one, including Unlock Inc. can change or remove it). The initial creator of the lock can also add other "lock managers" who are able to co-manage the lock.

Once deployed, the dashboard will show you details about your lock.

Finally, and this is critical, the smart contracts are _verified_, click on the explorer icon to inspect it or interact with it from the block explorer.
