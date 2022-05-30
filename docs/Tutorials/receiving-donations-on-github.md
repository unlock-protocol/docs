---
description: >-
  Patronage is a form of membership where patrons show their support publicly
  for the work of a creator.
---

# Receiving donations on Github

Are you an Open Source developer? Are you an artist? Do you want to monetize your work without necessarily limiting access to it? A lot can be used to receive donations!

1. The first step is to deploy a lock. Follow [these steps](https://docs.unlock-protocol.com/#create-a-lock) from the Unlock Dashboard. For patronage, it may make sense to limit the maximum number of patrons for example.
2. Then, you should use our [donation page generator](https://donate.unlock-protocol.com/generate.html). It lets you build the configuration to use for your donation lock. It lets you change the logo, the call to action \(which is shown to users before they purchase your membership keys\) and the thank you message displayed for them.
3. After this, you need to add the lock address from the first step in this tutorial. You can add more than one lock if you want to give multiple options to your supporters
4. After this, click on the **Generate** button.This will generate a blob of JSON like the one below. Save it inside of your repository with the name `.unlock-protocol.config.json`

```javascript
{
  "network": 1,
  "persistentCheckout": true,
  "icon": "https://assets.unlock-protocol.com/tmp/my-crypto.png",
  "callToAction": {
      "default": "Support the MyCrypto team and unlock your membership today!\n\nYou can make a donation by purchasing a key using your Ethereum wallet. The key is a non fungible token which represents your membership. ",
      "confirmed": "Thank you for choosing to be a MyCrypto supporter! ❤️\n\n\n\nAt this time, your support is a simple donation that helps us continue working to bring you products.\n\n\n\nIn the future we'll be further developing this functionality with the Unlock Protocol team to reward supporters with things like custom themes, swag, and more.\n\n\n\n-Taylor & Team MyCrypto"
  },
  "locks": {
      "0x14e81196e60b128527db03d40bdba00710777805": {
          "name": "MyCrypto Members"
      }
  }
}
```

1. Finally you need to configure Github to show its donation button on your repository. At its root, just a add the following file `.github/FUNDING.yml` . The content of the file should be the following, where `<USERNAME>` or `<ORG>` as well as `<REPO>` have been replaced with the right values.

```yaml
custom: https://donate.unlock-protocol.com/?r=<USERNAME/ORG>/<REPO>
```

1. Upload all this to Github and you should see the ![Sponsor Button](/img/creators/sponsor-button.png) button on your repository.

An optional, but recommended step is to add the members wall to your Github page! This is a way to show all the avatars of your patrons and supporters! Just add the following to your Github README page where you replaced `<LOCKS>` with a coma separated list of lock addresses.

```yaml
![Members](https://member-wall.unlock-protocol.com/api/members?locks=<LOCKS>&maxWidth=3000)
```

It will add an image like this one, which is the list of all Unlock blog members as of writing ;\)

![Blog Members](https://member-wall.unlock-protocol.com/api/members?locks=0xB0114bbDCe17e0AF91b2Be32916a1e236cf6034F&maxWidth=1000)
