---
description: An NFT ticketing Dapp for checking ticketholders into a venue at an event.
---

# NFT Ticket Verifier

The [Verifiers](app.unlock-protocol.com/verifiers) page is a new page added to the Unlock [Dashboard](/basics/new-to-unlock/deploying-a-lock) that enables a Lock Manager to note one or more wallet addresses as *verifiers*. Verifiers can use a smart phone camera to scan a ticket QR code at the check-in to a venue and mark a ticket as checked-in, to prevent double-use of NFT tickets. Once a ticket has been checked in, it is marked as such. Only wallets that have been set up as verifiers can check-in tickets.

**Page example**

![Screenshot 2022-07-13 at 13.49.44.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c4fd688-9694-4381-a979-a484ff4c8709/Screenshot_2022-07-13_at_13.49.44.png)

## Verifiers page

In this page the lock manager can do this operations for a specific lock: 

- See list of all the verifiers
- Add new verifiers
- Delete an existing verifiers

from Verifiers point, when ticket QR-code is scanned this will allow to:

- Mark a ticket as checked-in
- See the metadata as the lock manager

With this intro we can split thing's we need to check to make sure that everything is in place:

## For testing

- Go to the verifiers page
    - `https://staging-app.unlock-protocol.com/verifiers?lock=${LOCK_ADDRESS}&network=${NETWORK_ID}
- Try to add/remove/show list of verifiers
- With a verifier role, try to Mark a ticket as checked-in

### by Lock manager

- [ ]  can add new verifiers from verifiers page
- [ ]  can remove verifiers from verifiers page
- [ ]  can see the list of verifiers from verifiers page
- [ ]  can mark a ticket as checked-in
- [ ]  can see metadata for the scanned ticket

### by a Verifiers

- [ ]  can mark a ticket as checked-in
- [ ]  can see metadata for the scanned ticket
