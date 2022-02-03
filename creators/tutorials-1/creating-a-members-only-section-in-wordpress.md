---
description: >-
  You may want to have a "members-only" category on your WordPress site that is
  accessible only to NFT-holders who have an Unlock key. Below is one approach
  to doing so.
---

# Creating a members-only section in WordPress

You may want to have a "members-only" category on your WordPress site that is accessible only to NFT-holders who have an Unlock key. Below is one approach to doing so that was explored as an experiment for [TalesOfRonin.com.](https://ww.talesofronin.cm)

Out of the box, the [Unlock Protocol WordPress plugin](../plugins-and-integrations/wordpress-plugin.md) creates a new type of Gutenberg block that token-gates the content nested inside of that block. These blocks can be used on pages and posts, and are great for applications where you want to lock a portion of the content on a page or post. But what if you want to lock an entire _section_ of a site? What do you do?

In the prototype shown here, we have shown that it is possible to pair the Unlock plugin up with a "permissions" plugin (there are many in the WordPress plugin repository) to achieve this functionality.

On this demo site, notice there is NOT an `Elatora` menu item.

![Image](https://media.discordapp.net/attachments/925791695642177556/938652954469220392/Screen\_Shot\_2022-02-02\_at\_8.28.31\_PM.png?width=800\&height=330)

A site visitor who is viewing that site can scroll down to the `JOIN THE CLUB` section and grab an Unlock key to join the club.

![Image](https://media.discordapp.net/attachments/925791695642177556/938653101580226630/Screen\_Shot\_2022-02-02\_at\_8.28.39\_PM.png?width=800\&height=401)

Now that i have the NFT and have connected my wallet to the site, there is an `Elatora` menu item. Interesting! This menu item was not visible when I was simply an anonymous visitor to the site. However, now that I have the NFT and have connected my wallet to the site, it appears.

![Image](https://media.discordapp.net/attachments/925791695642177556/938653291158568980/Screen\_Shot\_2022-02-02\_at\_8.28.55\_PM.png?width=800\&height=291)

I can click through into all the `Elatora` content now.

![Image](https://media.discordapp.net/attachments/925791695642177556/938653420829675532/Screen\_Shot\_2022-02-02\_at\_8.29.07\_PM.png?width=684\&height=601)

Let's try one more thing. When i am logged in with the Unlock key, i can go right to the URL of a specific page in the site that's for members only.

![Image](https://media.discordapp.net/attachments/925791695642177556/938654107567276052/Screen\_Shot\_2022-02-02\_at\_8.35.31\_PM.png?width=800\&height=432)

However, if i am logged out (or don't have the NFT) and try to go to that same URL...nothing.

![Image](https://media.discordapp.net/attachments/925791695642177556/938654312857473104/Screen\_Shot\_2022-02-02\_at\_8.34.31\_PM.png?width=800\&height=388)

In other words, all the content sections are visible if you're logged in with the NFT, and WordPress correctly treats particular content categories as if they don't even exist if you don't have the NFT or aren't logged in.

This particular example was implemented with a WordPress plugin called `PublishPress Permissions` and a little bit of configuration through their menus. I put the `Elatora` posts in a specific "category" in WordPress called "Elatora," and configured the plugin to "block" "everyone" from that category and "allow" folks who were "subscribers" to be able to see that category.

This is the first experiment where we've done content locking at an entire category level in WordPress, and it appears to work seamlessly for this initial experiment. We'll create and share other tutorials like this as Unlock is implemented further across the WordPress ecosystem.









