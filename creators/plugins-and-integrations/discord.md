# Discord with Swordy Bot

## Swordy Bot

Swordy Bot allows you to give access to Discord private channels by assigning a role to a user that has an Unlock Key (NFT). Once installed the plugin communicates via private chat with your server members and sends them to a website where they can verify key ownership.

[Swordy Bot Website](https://swordybot.com) | Created by [Patrick Gallagher](https://patrickgallagher.dev) | [Blog Post](https://unlock-protocol.com/blog/swordy-bot-intro)

### Install

1. **Install Swordy Bot:** Add the bot to your server at [swordybot.com](http://swordybot.com)
2. **Create and Add Role:** Next you need to create a role that Swordy Bot can assign to Lock Members and permission a channel by adding that role to it.
3. **Add Lock to Server:** Add the lock and role parameters to your channel via the !add-lock command. Below the syntax (omit the <> brackets but ensure to use " " on the role name) and an example command.

```
!add-lock <chain ID> <contract address> <required balance> <"role name"> <purchase url (optional)>

!add-lock 100 0xef6389F33ac557405C961030Efcc3b1CE3e6bc17 1 "subscriber" https://unlock-integration.webflow.io/
```

### Onboard Users

Users can get access by using the `!unlock` command. They will receive a private message from Swordy Bot asking them to follow a unique link to a page where they can connect with either metamask or walletconnect. Once thats successful they will receive another message confirming their member ship and the member only channel will be visible.
