---
description: >-
  In this tutorial, we will see how to create a simple HTML and JavaScript page
  to lock media content (audio or video) so that only the creators' members can
  play it.
---

# Locking media content

Unlock makes it easy for creators to monetize their work by only allowing their members to access some of their work. In this tutorial, we will see how to create a simple HTML and JavaScript page to lock media content (audio or video) so that only the creators' members can play it. Non-members will be able to see a small preview before being prompted to unlock the rest of the video.

## Create a lock

The first step is to create a lock. For this, refer [to this article](/basics/deploying-a-lock#deploying-a-lock). Once the lock is deployed, keep track of its address and network as we'll use them next.

## Create the web document

In this example, we want to lock up access to [this video](https://ia801602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4).

HTML5 actually makes it very easy to embed any video in a document. Here's what it takes:

```markup
<video controls>
  <source src="https://ia801602.us.archive.org/11/items/Rick_Astley_Neve  r_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4 type="video/mp4">
</video>
```

## Loading and configuring Unlock for the page

For any web page which includes a lock, we use the same approach. First, we load the Paywall script, and then, we set the configuration for it.

```javascript
<script>
  (function(d, s) {
    var js = d.createElement(s),
      sc = d.getElementsByTagName(s)[0];
    js.src="https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
    sc.parentNode.insertBefore(js, sc); }(document, "script"));

  // Check this page for details https://docs.unlock-protocol.com/developers/paywall/configuring-checkout
  var unlockProtocolConfig = {
    network: 4,
    locks: {
      '0x61e9210b61C254b28cc7Aea472E496339D2D3265': {
        network: 4,
        name: 'Rick\'s membership'
      }
    },
    callToAction: {
      "default": "Become a member to access the rest of the video!"
    },
    pessimistic: true
  }
</script>
```

## Locking the video

JavaScript provides us with an API to control the video. We can use that to lock its access. The following sample provides details of how this can work. Note there are multiple ways of doing this; feel free to tinker around!

```bash
<script>
(function() {
  // Set a few default variables.
  let isUnlocked = true;
  const previewTime = 30;

  window.addEventListener('unlockProtocol.status', function(e) {
    var unlock = e.detail
    isUnlocked = (unlock.state === 'unlocked')
    // Optional: call video.play() to resume the video!
  })


  // This assumes there is a single video on the page. Otherwise use class selectors.
  const video = document.querySelector('video');
  video.addEventListener('timeupdate', (event) => {
    // This event gets triggered every time there is an update in the current time.
    // If the video is locked and the time is above previewTime seconds
    if (!isUnlocked && video.currentTime > previewTime) {
      // We stop the video go back to previewTime and pause the video
      video.currentTime = previewTime
      video.pause()
      // We ask the user to get a membership by loading the checkout UI
      unlockProtocol.loadCheckoutModal()
    }
  })
})();
</script>

```

After this, you are all done!

_**Note:** This tutorial implements a front-end locking approach, which is possible to circumvent; a determined actor could tinker with the JavaScript console of their web browser and inspect the code to find a workaround. It is absolutely possible to address this using an approach that is more difficult to circumvent, but that requires a back-end integration, which is more advanced and is outside the scope of this tutorial._
