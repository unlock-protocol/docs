---
description: This page provides documentation for the Unlock Wordpress plugin.
---

# Wordpress Plugin

Unlock provides a [Wordpress Plugin](https://wordpress.org/plugins/unlock-protocol/) which integrates our [Paywall](../../developers/paywall/) application into any WordPress.org site. This is the easiest way to lock content inside of pages and posts so that only your members can access them.

We maintain a WordPress.org site which lets you experience the membership experience from a visitor's point of view: [wordpress-demo.unlock-protocol.com](https://wordpress-demo.unlock-protocol.com/).

#### Pre-requisites

1. You have deployed your own Lock [following the instructions on this page](https://docs.unlock-protocol.com/#create-a-lock).
2. You are using wordpress.org to host a WordPress site yourself \(wordpress.com website will not work as plugins are restricted on that platform.\)

### Install the Unlock plugin 

Inside the admin section of your WordPress site, click on Plugins &gt; Add New

![](../../.gitbook/assets/image%20%283%29.png)

In the search bar on the plugins page, search for "Unlock Protocol"

![Search for the plugin](../../.gitbook/assets/image%20%286%29%20%281%29%20%281%29.png)

![Click on &quot;Install Now&quot;, and then on &quot;Activate&quot;.](../../.gitbook/assets/image%20%2810%29%20%281%29%20%281%29%20%281%29%20%281%29.png)

After this, you're all set and you can start locking content on your posts or pages!

### Using the Unlock plugin 

You can easily add one or more lock to each page or post. Inside of the Editor, click on the Document settings:

![Enter the configuration for this specific page or lock](../../.gitbook/assets/image%20%2816%29.png)

The configuration is very flexible and lets you customize the number of locks, the calls to actions, the images... and more! Please [read this section to get a list of options](https://docs.unlock-protocol.com/#configure-the-lock).

### Locking content

The plugin also adds 2 "blocks" to your Gutenberg Editor. The first block lets you hide/show content based on whether the current visitor owns a key to your lock. This block can include other blocks so you can easily lock images or any other content.

The second block is actually a button to let your visitors purchase an access key to your lock.

#### Showing content to members only \(hiding it for non members\)

Like any other block, click on the ⊕ sign to add an "Unlock Protocol Block".

![](../../.gitbook/assets/image%20%2818%29.png)

Once added to the page, the block contains a visual indication \(only when editing the post!\) to show the block's status: you can easily toggle between content that's only available for members and content that is not available for members.

![](../../.gitbook/assets/image%20%2810%29%20%281%29%20%281%29%20%281%29.png)

From there you can add more content which will only be visible by members. The Unlock Blocks can include their own  nested blocks, making it easy to lock images, videos, or even attachments.



![You can click on the &#x244; at any point to display the setting for this block.](../../.gitbook/assets/image%20%2811%29%20%282%29%20%282%29%20%282%29%20%282%29%20%282%29.png)

#### Showing a button to let visitors become members

The Editor also lets you chose a "Checkout Button" which users can click on to become members! You might want to add this button inside of a "non-members only" block!

![](../../.gitbook/assets/image%20%281%29.png)



Once added to the page you can customize its text. The button defaults to the template style.

![](../../.gitbook/assets/image%20%285%29%20%281%29.png)

Make sure you save your post or page once it's been configured! 

