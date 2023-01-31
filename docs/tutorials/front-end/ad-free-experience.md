---
title: Building an Ad Free Experience
description: Utilizing Unlock Protocol to provide an ad free experience to members.
---

# Building an Ad Free Experience

The Unlock Protocol and its supporting software can be used for a multitude of use cases. One of these use cases currently in the wild is leveraging the Unlock Protocol to provide an [Ad Free Experience ](https://www.forbes.com/sites/cbovaird/2020/01/15/what-really-drove-bitcoins-new-years-rally)to key holders.

The general approach to towards the implementation follows the generic steps outlined below.

1. The first step is to deploy a lock. Follow [these steps](https://docs.unlock-protocol.com/#create-a-lock) from the Unlock Dashboard.
2. Add the Unlock paywall application JavaScript to your page:

```markup
<script> (function(d, s) {
var js = d.createElement(s),
sc = d.getElementsByTagName(s)[0];
js.src="https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
sc.parentNode.insertBefore(js, sc); }(document, "script"));
</script>
```

1. Configure the display of the paywall component:

```javascript
var unlockProtocolConfig = {
  locks: {
    '0xabc': { // 0xabc is the address of a lock.
      name: 'Ad Free Experience'
    }
  },
  icon: 'https://staging-app.unlock-protocol.com/static/images/svg/default.svg',
  callToAction: {
    default: 'Remove the ads from this page with a Key'
  }
}
```

_Further configuration details are provided in the_ [_Configure the Lock_](../../#install-a-lock-on-a-web-page) _section of the documentation_.

1. Add an event handler to capture the change of state between locked and unlocked; rendering ad components when relevant.

```javascript
window.addEventListener('unlockProtocol', function(e) {
  var state = e.detail

  if(state === 'locked' ){
     // load ad rendering component here
  } else {
     // Current visitor is a member
  }  
})
```

While some tailoring may be required for your specific use case, this should provide a starting point towards utilizing the Unlock Protocol to provide your members with an Ad Free experience.
