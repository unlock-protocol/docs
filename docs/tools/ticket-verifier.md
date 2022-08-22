---
description: An NFT ticketing Dapp for checking ticketholders into a venue at an event.
---

# NFT Ticket Verifier

The [Verifiers](https://app.unlock-protocol.com/verifiers) page is a new page in the Unlock [Dashboard](/basics/new-to-unlock/deploying-a-lock) that enables a Lock Manager to set one or more wallet addresses as *verifiers*. Verifiers can use a smart phone camera to scan a ticket QR code at the check-in to a venue and mark a ticket as checked-in, to prevent double-use of NFT tickets. Once a ticket has been checked in, it is marked as such. 

While anyone can use a smartphone camera to scan a ticket for validity, *only wallets that have been set up as verifiers can check-in tickets and mark them as "used."*

![verifier-screen.png](/img/more/verifier-screen.png)

## Verifiers page

In this page, the Lock Manager can perform the folowwing actions: 

- See list of all the verifiers
- Add new verifiers
- Delete an existing verifiers

## Scanning actions

When a Verifier's mobile wallet is connected and the Verifier scans a ticket's QR code with their smart phone, the Verifier can additionally:

- Mark a ticket as checked-in
- See the ticket's metadata

With this intro we can split things we need to check to make sure that everything is in place:

## Testing the Verifier Dapp

- Go to the Verifiers page
    - `https://staging-app.unlock-protocol.com/verifiers?lock=LOCK_ADDRESS&network=NETWORK_ID
- Try to add/remove/show list of verifiers
- With a verifier role, try to mark a ticket as checked-in

### Lock manager tests

A Lock Manager should test that they can perform the following actions for their ticketing lock
- Add new verifiers from verifiers page
- Remove verifiers from verifiers page
- View the list of verifiers from Verifiers page
- Mark a ticket as checked-in
- View metadata for a scanned ticket

### Verifiers tests

- Mark a ticket as checked-in
- View metadata for the scanned ticket

The Verifier page and Dapp can be accessed in production at:
[https://app.unlock-protocol.com/verifiers](https://app.unlock-protocol.com/verifiers)
