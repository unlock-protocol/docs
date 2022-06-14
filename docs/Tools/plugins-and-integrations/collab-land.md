# Discord with Collab.Land

## Unlock: Create a Lock

In the Unlock Creator Dashboard, create a Lock. After naming the Lock, and filling in the duration, quantity, and price fields, confirm the new lock.

![](https://lh3.googleusercontent.com/OHPNAe3h5Si9xGO3MLyFEYR6kRaqSiloTUsbQsW7wRtC7o2V9odknf8RtAKIv_yxy-NgY3SHbB_-VacASkltpyuXqRwNjSKrIeJpCKB3Qb8gx8htH3zdZhrvGH8Vg1ZTdulZeZbr)

Once confirmed, you should find the address for the lock underneath the title. The address will start with “0x…” and be a string of letters and numbers.  


This is the unique identifying address for your lock. Keep this tab open so you can have this address on hand when you set up Collab.Land.

## Discord: Install Collab.Land

Invite Collab.Land to your Discord server via [this link](https://discord.com/oauth2/authorize?client_id=704521096837464076&scope=bot&permissions=8).

In Discord, go to Server Settings &gt; Roles &gt; Create Role

Create a role that you would like the Collab.Land bot to assign to anyone holding the new Lock you have made. When creating roles, place Collab.Land above any roles the bot is assigning.

Add a private channel and give select roles access \(always give Collab.Land access\). 

Users of certain token holdings will be granted roles with this specific access through the token permissioned roles configuration.

### Configuring token permissioned roles

In Discord, there should be a new private channel called “\#collabland-config”. In this channel, type “!setup role”.

![](https://lh6.googleusercontent.com/pWPEhqJZnFMavAPaLuOI8uwZU6Y1OFPr22Q0Fx8MAQLZmJ-eh8BVd87ak5D7liAI6rDrUAlX4w3cNbkM0pLXvE4ZA2I0ErryGeaGJkIrJPNR-oodCZdFsYpKNLk1qZNMTwAKe4Fx)

If you have created the Lock using Ethereum Mainnet, choose the corresponding emoji reaction for “Mainnet”. If you used xDAI to create the lock, choose xDAI.

![](https://lh6.googleusercontent.com/_rOobALzgJmQMFG1iGpMtRL4bp5YJ7JfZplCXUs4MhSCkBKGSUjB58FRS8TDmcLtL1i8kn_hMpZxtCITcVUFODLh2tiDPMG2zulZTIUpELnYcEHtgEvt_Ezem-pQmAMd1K4pMuTe)

Next, choose a token based role. Because Unlock are NFTs, choose the option for ERC-721.

![](https://lh5.googleusercontent.com/aa29nW7oVOuy1o3l9mbZ1mIMHZpG2-mU1aWHlkxVzSaPa71KcKs7khDnjlng5wG-r4ia8fkF0lqoyPsLVRo1QFNqsrY4V0upkAcZvvFZ8vMwDalC1i75QOJkVVEV913ok3thCDa2)

Then, copy the lock address that you generated in your Unlock dashboard and paste here. Then, add a space and type the minimum number of tokens \(likely 1\) and then the maximum number of tokens to gain access \(Collab.Land suggests -1 for no limit\). Omit the &lt;&gt; brackets.

Once successful, confirm by pressing the emoji reaction for “Add Role”.

Now your Discord and Unlock membership lock should work together to allow members to gain private access to a new Discord channel.  


{% hint style="info" %}
Written by Community Member [Austin Robey](https://twitter.com/austinrobey_)
{% endhint %}

