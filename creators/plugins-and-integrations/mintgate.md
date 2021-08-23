---
description: >-
  This page outlines how you can use Mintgate in order to create token-gated
  links for your Unlock memberships.
---

# Mintgate

## **Unlock + Mintgate**

Because Unlock’s locks use the ERC-721 standard \(NFT\), your lock that you create through Unlock can be integrated with other tools that build utility for NFTs as well. This includes Mintgate, which gives the ability to gate any link. So, when you create a lock on Unlock -- you can also use it to gate links through Mintgate.

Here are some examples of services you can gate using an Unlock lock + Mintgate.

* Calendly
* Zoom
* Google Docs
* Google Forms
* Google Sheets
* Youtube video
* Vimeo videos
* Soundcloud link
* Audius link

## **Gating a link example: Calendly**

This will allow only people with a particular token in their wallet to be able to access a link, in this case to a Calendly link to book a meeting.

### **Unlock: Create a Lock**

In the Unlock Creator Dashboard, create a Lock. After naming the Lock, and filling in the duration, quantity, and price fields, confirm the new lock.

![](https://lh6.googleusercontent.com/lzoRqjw0febK0j13crm5Hlsu-2yde3KqJ5uW1NqvISeWC4LhFdDF7BD_ltyZ1MA5oBrG2g-xHl88p1Yx3FAONVQsTEp-EAIK-uaglpK3AHnJbYfVC9NdC4fS5540e5lwL1yPd26A)

Once confirmed, you should find the address for the lock underneath the title. The address will start with “0x…” and be a string of letters and numbers.

This is the unique identifying address for your lock. Keep this tab open so you can have this address on hand when you use Mintgate to gate a link.

### **Mintgate: Gate A Link**

Log into Mintgate. Under the “Create” section, choose “Gate A Link”. 

![](https://lh5.googleusercontent.com/lJT95sLsA6r1GRqQkf8IzdCxHAuU6en8b9koRMNW11FpLFpYKaIW4qiErpbs1f4Yab_sFsK20GTVyPuEtM_SSwJOjveVqJQjSiUkfXQOLTEnDnYeu9r29FCH4n7Ngd6eiMAOmMSP)

Paste the Calendly link that you would like to gate, add a title, select the blockchain that your Unlock key was created on \(ex: Ethereum mainnet or xDAI\), and choose NFT ERC-721 Collectibles.

Add the address associated with your Lock into the contract address field. You can leave the 721 Token ID field blank.

If you’d like, you can also add other Unlock Keys that can give access to this same link as well by pressing “add token”.

![](https://lh6.googleusercontent.com/oin5Y0FvwLe_rGe8C4KxOskJ_TjHSTKOcvERDFrTlAjzAVcz6PO64t3-gEkgZ1VykL3jBUcU-jjrlPxSTmOYMUWLLNU-YNH1cDjUN-wH0ODtQ0ASyEYRhoh0n1iU16fPrri_eluw)

After you finish, you should get a link from Mintgate. Using this link, only people with your Unlock Key in their wallet can access the Calendly link. 

![](https://lh5.googleusercontent.com/ra7nQ3LOg7GZQU99gWBKJN5-IM7TSMPRGmrIs1nIncJ0MEV8pMvyEH8F8k_igAHS_05SAOQrwlEO6P-Hgr8_2i7ObH4t0Xai0I8CwaIkAsFNaidO2-xgto2XBvKwlSoqjzJcuUp8)

When users click on this link, they are asked to connect their wallet. If they have the correct Unlock Key, they are able to access the Calendly link.

If they do not have the right key, they get this message:

![](https://lh6.googleusercontent.com/m1sDmZ5gNpulaHaouLaYHl7AxyL3wxZPPaG82klFxyruIClLZRsNzCn4rUAxFTB5zskr3Nlg6WEgi21pATjj0pqs3gU1PZXVD-Q2U-Qm92xM4U9xaGP6IorSBkuuG8dRkJEEmfnh)

