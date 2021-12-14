---
description: This page provides documentation for the Unlock WordPress plugin.
---

# WordPress Plugin

### **Introduction**

Welcome to Unlock Protocol WordPress plugin user manual.

This manual documents all the basic interactions with the WordPress dashboard and editing interface as relates to the plugin. It assumes a fresh install of the latest WordPress version (v5.8.2 at time of writing).

Unlock Protocol provides a paywall to unlock content inside of pages and posts so that only authorized users can access them. It is an updated version of an earlier version of this plugin.

The plugin is designed to be a plug-and-play solution for site owners who want to control access to their content by their readers or visitors.

The two main interfaces are the **Settings page** and **Gutenberg block**. Both of these items will be covered below.

### **Basics: Logging in to WordPress**

This section is written for the benefit of anyone who is new to WordPress. Skip ahead to the main section if you are already familiar with WordPress.

In order to use or configure the Unlock Protocol plugin (henceforth referred to simply as the “plugin”), you need to first access WordPress’ backend, also known as the Dashboard. To do so, replace \[Your URL] below with your website’s link.

* **Login URL:** \[YourURL]/wp-admin

You will need to login as an Admin account to install and configure the plugin.

**Figure: Unlock Protocol’s Login Screen**

![](../../.gitbook/assets/login-screen.jpeg)

Once you’ve logged in, the WordPress dashboard appears. Below is a screenshot of what your dashboard might resemble. This is where you can access the different sections of your website, including different types of content (pages, posts, comments), administrative settings & tools, as well as the plugins and themes installed. Contact your website administrator for more details.

Read more about the [**Dashboard on the WordPress.org.**](https://wordpress.org/support/article/dashboard-screen/)

**Figure: WordPress default Dashboard**

![](../../.gitbook/assets/wp-dashboard.jpeg)

### **The Unlock Protocol Plugin**

Once installed and configured, the Unlock Protocol plugin will provide a way to add locks to content inside of WordPress. Only authorized users can access this locked content.

#### **How to Install the Plugin**

1. Go to **Plugins** > **Add New**
2. Click on the **Upload plugin**
3. Upload the provided plugin zip and click on **Install Now**
4. Once the plugin is installed, click on **Activate Plugin**

**Figure: Install a plugin**

![](../../.gitbook/assets/install-plugin.jpeg)

This and other plugins can be managed from the Plugins tab in the left navigation menu. Read more about [managing plugins.](https://wordpress.org/support/article/plugins-screen/)

#### **Special Notes**

1. For the plugin to work as expected, make sure that **Settings** > **General** > **Anyone can register** is enabled. On a fresh install of WordPress this option is disabled by default. The Unlock Protocol plugin will display a warning in the Dashboard if this is the case.
2. If you are upgrading from an earlier version of the plugin (earlier than v3.0.0), briefly deactivate and re-activate the plugin in order for the default networks to show up in the Network Settings and in the **Ethereum Network** setting of the Gutenberg block **** as noted below.

**Figure: Dashboard warning to the website admin if new user registration is blocked.**

![](../../.gitbook/assets/dashboard-warning.png)

### **Plugin Settings**

Once installed and activated, no change will appear on the website from an end user’s perspective. The plugin activates with a reasonable set of presets so that it can even be used as-is.

However, customization of the Unlock & Checkout buttons and addition of new Ethereum networks is also possible through the plugin’s settings. To access them, go to the **WordPress Dashboard** > **Settings** > **Unlock Protocol**. This will open up a page with two tabs at the top — General & Networks.

#### **General Settings**

Settings in this tab are related to customization of the Unlock and Checkout buttons.

**Figure: General settings**

![](../../.gitbook/assets/login-button-settings.jpeg)

* **Login button text**

Used to define text that will appear within the button that prompts your users to log into WordPress using their WordPress credentials or via Unlock Protocol OAuth. If left blank, the button will display “Login with Unlock”. **Note:** The button that appears on the login screen will always display the string “Connect Your Crypto Wallet”. This is hard coded into the plugin.

* **Login button type**

If enabled, the Unlock button will output a preset or user defined image (via the **Upload login background image** field). For best results, the image should not exceed 300px in height. The width of any uploaded image will be either the width of the uploaded image or the width of the content block within which it is placed, whichever is smaller.

You can select an image from your media library or upload a new one, which is then added to your media library.

* **Call to action text**

Defines the string displayed above the Login button in the image block. Uses the same color as the Login button text color by default. Can be changed via hooks.

* **Login button background color**

Defines the background color of the Login button in hex, RGB or HSL formats. By default, the color is black (#000000).

* **Login button text color**

Defines the background color of the Login button in hex, RGB or HSL formats. By default, the color is white (#ffffff).

* **Checkout button text**

Used to define text that will appear within the button that prompts your users to purchase a key to any locked content. If left blank, the button will display “Purchase this”.

* **Checkout button type**

If enabled, the Checkout button will output a preset or user defined image (via the **Upload checkout background image** field). For best results, the image should not exceed 300px in height. The width of any uploaded image will be either the width of the uploaded image or the width of the content block within which it is placed, whichever is smaller.

You can select an image from your media library or upload a new one, which is then added to your media library.

* **Call to action text**

Defines the string displayed above the Checkout button in the image block. Uses the same color as the Checkout button text color by default. Can be changed via hooks.

* **Checkout button background color**

Defines the background color of the Checkout button in hex, RGB or HSL formats. By default, the color is black (#000000).

* **Login button text color**

Defines the background color of the login button in hex, RGB or HSL formats. By default, the color is white (#ffffff).

#### **Network Settings**

This tab is used to register new Ethereum networks. When the plugin is first activated, the following Ethereum networks are added by default:

* Mainnet
* Ropsten
* Rinkeby
* Kovan
* xDAI
* Polygon
* Arbitrum
* Binance

**Figure: Network settings**

![](../../.gitbook/assets/network-settings.jpeg)

You can add more networks by providing a name, ID and RPC endpoint. The name and ID are arbitrary; however, the ID has to be unique.

### **Unlock Protocol Gutenberg Block**

On activation, the plugin will make a new Unlock Protocol block available that can be used via WordPress’ [Gutenberg editor. ](https://wordpress.org/support/article/wordpress-editor/)This block acts as a “container” block for any content you want to put behind a lock. This means that by itself, it adds no content or markup on the page.

The Unlock Protocol block pulls double duty, depending on your users’ login status:

1. If NOT logged in, the block will obscure any content within the Unlock Protocol container block, instead prompting your users to log in to your website using either their WordPress credentials or via a one click login button linked to their Ethereum wallet.
2. If logged in, the block will obscure any content within the Unlock Protocol container block, instead prompting your users to purchase a key to the lock that you have placed on the content.

#### **Configuring an Unlock Block**

The Unlock Protocol block can be added like any other Gutenberg block to any post or page. See [WordPress documentation](https://wordpress.org/support/article/adding-a-new-block/) for instructions.

The block has two settings that need to be configured in order for it to work:

* **Ethereum Network**

Select the Ethereum network where you have deployed your lock from this dropdown. If the network is not displayed, it needs to first be registered from the Network settings.

* **Lock Address**

Add your lock address into this field. Only Ethereum addresses are accepted, validated via the following regex: <mark style="color:blue;background-color:yellow;">/^0x\[a-fA-F0-9]{40}$/</mark>

**Note**: If an Unlock Protocol block is added to a post or page and left unconfigured, it will throw an error and block the page from being published or updated.

To avoid accidental access issues, Unlock Protocol blocks cannot be nested; ie., placing one block within another has been restricted. However, a workaround to this is to register an Unlock Protocol block as a [reusable block ](https://developer.wordpress.org/block-editor/explanations/architecture/key-concepts/#reusable-blocks)and add that into another block, effectively nesting them. This cannot be patched due to a limitation with how WordPress handles reusable blocks.

Multiple Unlock Protocol blocks (with the same or different locks) on a page or post are permissible and work as expected.

#### **Full Page Locked Content**

The Unlock Protocol block can contain all the content on any page post, or any subset. The title and footer components of a page cannot be locked.

If all the content on any page or post is locked, archives containing that page or post will only display the [excerpt content](https://wordpress.org/support/article/excerpt/). If no excerpt is set, the archive page will only display the other metadata associated with the post.

What exactly is output will depend on the theme in use, but it will usually include the title, published data and taxonomy data of the post. The content on the archive page will be empty as in the screenshot below.

**Figure: Archive pages display only excerpt content when all other content on a post is locked.**

![](../../.gitbook/assets/excerpt.jpeg)

### **Hooks**

Hooks are [the WordPress way](https://developer.wordpress.org/plugins/hooks/) of providing you with extensibility to build on top of the plugin. The plugin has several hooks built into its codebase that can be used to interact or modify its output at specific points in the runtime. Each of them are specified below.

#### **Actions**

Actions allow you to add extra functionality at specific points. The actions should be added in the functions.php file or somewhere callable.

****

**do\_action( 'unlock\_protocol\_user\_created', $user\_id, $user );**&#x20;

Fires when a user is created by the plugin.

&#x20; **Parameters:**

&#x20;   $user\_id

&#x20;     (int) ID of the user.

&#x20;   $user

&#x20;     (Object) User data fields.&#x20;

**Source:** inc/classes/class-login.php

****

**do\_action( 'unlock\_protocol\_network\_deleted', $removed\_network, $new\_updated\_networks );**

Fires when a network is deleted.

**Parameters:**

&#x20;   ****    $removed\_network

&#x20;     (array) Contains the network ID, name and RPC endpoints.&#x20;

&#x20;   $new\_updated\_networks

&#x20;     (array) Multidimensional array of existing networks.&#x20;

**Source:** inc/classes/rest-api/class-settings.php

****

**do\_action( 'unlock\_protocol\_network\_updated', $new\_updated\_networks );**

Fires when a network is added.

**Parameters:**

&#x20;   ****    $new\_updated\_networks

&#x20;     (array) Multidimensional array of existing networks.&#x20;

**Source:** inc/classes/rest-api/class-settings.php

****

**do\_action( 'unlock\_before\_checkout\_button' );**

Used to add content before the Checkout button.

**Source:** templates/login/checkout-button.php

****

**do\_action( 'unlock\_after\_checkout\_button' );**&#x20;

Used to add content after the Checkout button.&#x20;

**Source:** templates/login/checkout-button.php



**do\_action( 'unlock\_before\_login\_button' );**&#x20;

Used to add content before the Login button.&#x20;

**Source:** templates/login/button.php

****

**do\_action( 'unlock\_after\_login\_button' );**

Used to add content after the Login button.

**Source:** templates/login/button.php



#### **Filters**

Filters are functions that are used to pass data through. Using filters, you can modify the content returned from WordPress. Filters should be added in the functions.php file or somewhere callable.

****

**apply\_filters( 'unlock\_protocol\_user\_validate\_params', $data );**

Used to change the parameters of user validation.&#x20;

**Parameters:**

&#x20;   ****    $data:

&#x20;     (array): array of user params.&#x20;

**Source:** inc/classes/blocks/class-unlock-box-block.php

****

**apply\_filters( 'unlock\_protocol\_validate\_auth\_code\_params', $data );**&#x20;

Used to add or change the parameter while authentication of code validation.

**Parameters:**

&#x20;   ****    $data:

&#x20;     (array): array of authentication code parms.

**Source:** inc/classes/class-unlock.php

****

**apply\_filters( 'unlock\_protocol\_paywall\_config', $data );**&#x20;

Used to modify the network ID or lock address.&#x20;

**Parameters:**

&#x20;   $data:

&#x20;     (array): Paywall configuration.

**Source:** inc/classes/class-unlock.php

****

**apply\_filters( 'unlock\_protocol\_get\_client\_id', $host );**&#x20;

Used to modify the client for login URL or email address.&#x20;

**Parameters:**

&#x20;   $host:

&#x20;     (String): Domain name.

**Source:** inc/classes/class-unlock.php



**apply\_filters( 'unlock\_protocol\_get\_redirect\_uri', $url );**&#x20;

Used to modify the URL rendered after OAuth validation.&#x20;

**Parameters:**

&#x20;   $url:

&#x20;     (String): Redirect URL.

**Source:** inc/classes/class-unlock.php

****

**apply\_filters( 'unlock\_protocol\_get\_login\_url', $url);**&#x20;

Used to modify the login URL.&#x20;

**Parameters:**

&#x20;   $url:

&#x20;     (String): Unlock Protocol login OAuth URL.

**Source:** inc/classes/class-unlock.php



**apply\_filters( 'unlock\_protocol\_register\_user', $ethereum\_address);**&#x20;

Used when a new user needs to be registered.&#x20;

**Parameters:**

&#x20;   ****    $ethereum\_address:

&#x20;     (String): Ethereum address of the user.

**Source:** inc/classes/class-login.php

