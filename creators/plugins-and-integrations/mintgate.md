---
description: >-
  This page outlines how you can use Mintgate in order to create token-gated
  links for your Unlock memberships.
---

# Mintgate

## **Unlock + Mintgate**

Because Unlock’s locks use the ERC-721 standard (NFT), your lock that you create through Unlock can be integrated with other tools that build utility for NFTs as well. This includes [Mintgate](https://www.mintgate.app), which gives the ability to gate any link. So, when you create a lock on Unlock -- you can also use it to gate links through Mintgate.

Here are some examples of services you can gate using an Unlock lock + Mintgate.

* Google Docs
* Google Forms
* Google Sheets
* Youtube video
* Vimeo videos
* Soundcloud link
* Audius link

## **Gating a link example: Youtube Video**

This will allow only people with a particular token in their wallet to be able to access a link, in this case to a YouTube video.

### **Unlock: Create a Lock**

In the Unlock Creator Dashboard, create a Lock. After naming the Lock, and filling in the duration, quantity, and price fields, confirm the new lock. [See this section](https://docs.unlock-protocol.com/creators/deploying-lock) for nore details!

![](https://lh6.googleusercontent.com/lzoRqjw0febK0j13crm5Hlsu-2yde3KqJ5uW1NqvISeWC4LhFdDF7BD\_ltyZ1MA5oBrG2g-xHl88p1Yx3FAONVQsTEp-EAIK-uaglpK3AHnJbYfVC9NdC4fS5540e5lwL1yPd26A)

Once confirmed, you should find the address for the lock underneath the title. The address will start with `0x…` and be a string of letters and numbers.

This is the unique identifying address for your lock. Keep this tab open so you can have this address on hand when you use Mintgate to gate a link.

### **Mintgate: Gate A Link**

Log into MintGate. Click on the Create button and choose “Token Gated Link.”

![](../../.gitbook/assets/image1.png)

Paste the Youtube link that you would like to gate and add a title.

![](../../.gitbook/assets/image9.png)

Select the blockchain that your Unlock key was created on (MintGate currently supports redirects Unlock paywall links for locks on Ethereum, xDai, and Polygon), and choose **Unlock Protocol Lock**. Add the address associated with your Lock into the contract address field.&#x20;

![](<../../.gitbook/assets/image (26).png>)

If you’d like, you can also add other Unlock Keys or other non-Unlock Keys that can give access to this same link as well by pressing “add token”.

After you finish, you should get a link from MintGate. Using this link, only people with your Unlock Key in their wallet can access the Youtube link.

When users click on this link, they are asked to connect their wallet. If they have the correct Unlock Key, they are able to access the Youtube link.

If they do not have the right key, they get this message:

![](../../.gitbook/assets/image2.png)

If they decide to buy the key, they can click on the Buy Key on Unlock button where they will be redirected to the Unlock paywall.

![](../../.gitbook/assets/image3.png)

Once they purchase the key, they can click on the Return to mgate.io to redirect back to MintGate and access the Youtube video.
