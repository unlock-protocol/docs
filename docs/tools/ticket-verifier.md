---
description: An NFT ticketing Dapp for checking ticketholders into a venue at an event.
---

# NFT Ticket Verifier

The Verifiers page is a page in the Unlock [Dashboard](/basics/new-to-unlock/deploying-a-lock) that enables a Lock Manager to set one or more wallet addresses as *verifiers*. Verifiers are trusted users at an event who can use a smart phone camera to scan a ticket QR code at the check-in to a venue and mark a ticket as checked-in. Checking a ticket in prevents double-use of NFT tickets. Once a ticket has been checked in, it is marked as such. 

While anyone can use a smartphone camera to scan a ticket for validity, *only wallets that have been set up as verifiers can check-in tickets and mark them as "used."*

![verifier-screen.png](/img/more/verifier-screen.png)

When a Verifier's mobile wallet is connected and the Verifier scans a ticket's QR code with their smart phone, the Verifier can:

- Mark a ticket as checked-in
- See the ticket's metadata

## Verifiers page and Lock Managers

The Lock Manager can perform the following actions on the Verifiers page: 

- See list of all the verifiers
- Add new verifiers
- Delete an existing verifier

## Testing the Verifier Dapp

- Go to the Verifiers page
    - [https://staging-app.unlock-protocol.com/verifiers?lock=LOCK_ADDRESS&network=NETWORK_ID](https://staging-app.unlock-protocol.com/verifiers?lock=LOCK_ADDRESS&network=NETWORK_ID)
    - Replace `LOCK_ADDRESS` with the address of the lock for the NFT tickets
    - Replace `NETWORK_ID` with the correct network ID ([list](https://docs.unlock-protocol.com/core-protocol/unlock/networks/))
- Try to add/remove/show list of verifiers

### Lock manager tests

A Lock Manager should test that they can perform the following actions for their ticketing lock:
- Add new verifiers from Verifiers page
- Remove verifiers from Verifiers page
- View the list of verifiers from Verifiers page
- Mark a ticket as checked-in
- View metadata for a scanned ticket

**Note:** If a large number of individuals will act as verifiers for a particular event, the Lock Manager may choose to set up a single [Unlock Account](https://docs.unlock-protocol.com/basics/new-to-unlock/unlock-accounts) with an email and password, and have all the verifiers sign into the verification system using that shared account. This reduces the complexity, having a single shared verifier account, instead of managing a large number of verifier wallet addresses in the verification system (one of each verifier).

### Verifiers tests

- Mark a ticket as checked-in
- View metadata for the scanned ticket

## Using the Verifiers page in production

- Connect your wallet at [https://app.unlock-protocol.com/dashboard](https://app.unlock-protocol.com/dashboard)
- Go to the Verifiers page at [https://app.unlock-protocol.com/verifiers?lock=LOCK_ADDRESS&network=NETWORK_ID](https://app.unlock-protocol.com/verifiers?lock=LOCK_ADDRESS&network=NETWORK_ID)
- Add and manage verifiers as needed for your event

Please also check the *[How to Sell NFT Tickets for an Event](https://unlock-protocol.com/guides/how-to-sell-nft-tickets-for-an-event/)* guide for on-site check-in details and a training guide for verifiers.
