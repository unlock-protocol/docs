---
description: Unlock can send real time updates to endpoints.
---

# Webhooks

Locksmith implements [Websub](https://www.w3.org/TR/websub) which allows anyone to receive real time updates from the [Unlock subgraphs](../../tools/subgraph.md). It is a _webhook_ system which many developers will be familiar with with built-in intent verification.

Currently, locksmith support sending updates on new locks and keys. To subscribe, an application will need to send a post request to the hubs located at `/api/hooks/[topic]`. The body needs to match the schema specified in the [Websub w3c spec](https://www.w3.org/TR/websub/#x5-1-subscriber-sends-subscription-request).

### Topics

Our implementation uses the same addresses for topics and their hub.

{% swagger method="post" path="/" baseUrl="https://locksmith.unlock-protocol.com/api/hooks/:network/locks" summary="New locks created" %}
{% swagger-description %}
Subscribe to new locks created on the specified network
{% endswagger-description %}

{% swagger-parameter in="body" type="url" required="true" name="hub.topic" %}
Same as the hub URL - https://locksmith-host/api/hooks/:network/locks
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.callback" type="url" required="true" %}
The callback URL where you will receive the new locks data.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.mode" type="string" required="true" %}
subscribe or unsubscribe
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.secret" type="string" required="false" %}
This is used for adding signature in the header with response for verification.

Locksmith by default uses sha256 but you can get algorithm by parsing the value from header x-hub-signature
{% endswagger-parameter %}

{% swagger-parameter in="path" name="network" type="number" required="true" %}
Network id for which you want to receive notifications
{% endswagger-parameter %}

{% swagger-response status="202: Accepted" description="Accepted" %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="404: Not Found" description="You may receive this if you are trying to subscribe to something on a unsupported network or hub endpoint." %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="This will be schema error so different depending on what mistake you have made." %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}

```javascript
{
  // Response
}
```

{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/:lockAddress/keys" baseUrl="https://locksmith.unlock-protocol.com/api/hooks" summary="New key purchases" %}
{% swagger-description %}
Subscribe to new keys created on the specific lock address.
{% endswagger-description %}

{% swagger-parameter in="body" name="hub.topic" required="true" type="url" %}
Same as the hub URL:

[https://locksmith.unlock-protocol.com/api/hooks/:network/locks](https://locksmith.unlock-protocol.com/api/hooks/:network/locks)

/:lockAddress/keys
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.callback" type="url" required="true" %}
The callback URL where you will receive the new locks data.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.mode" type="string" required="false" %}
subscribe or unsubscribe
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.secret" type="string" required="false" %}
This is used for adding signature in the header with response for verification.

Locksmith by default uses sha256 but you can get algorithm by parsing the value from header x-hub-signature
{% endswagger-parameter %}

{% swagger-parameter in="path" name="network" required="true" type="number" %}
Network id for which you want to receive notifications
{% endswagger-parameter %}

{% swagger-parameter in="path" name="lockAddress" type="string" required="true" %}
Address of the lock for which you want to receive notifications
{% endswagger-parameter %}

{% swagger-response status="202: Accepted" description="Accepted. Make sure your endpoint handles verification of intent." %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="This will be schema error so different depending on what mistake you have made." %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="404: Not Found" description="You may receive this if you are trying to subscribe to something on a unsupported network or hub endpoint." %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}

```javascript
{
  // Response
}
```

{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="https://locksmith.unlock-protocol.com/api/hooks/:network/keys" summary="" %}
{% swagger-description %}
New keys purchased on the entire network
{% endswagger-description %}

{% swagger-parameter in="path" name=":network" type="number" required="true" %}
Network id for which you want to receive notifications
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.topic" required="true" type="string" %}
Same as the hub URL:

[https://locksmith.unlock-protocol.com/api/hooks/:network/](https://locksmith.unlock-protocol.com/api/hooks/:network/locks)

keys
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.callback" type="url" required="true" %}
The callback URL where you will receive the new locks data.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.mode" type="string" %}
subscribe or unsubscribe
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.secret" type="string" %}
This is used for adding signature in the header with response for verification.

Locksmith by default uses sha256 but you can get algorithm by parsing the value from header x-hub-signature
{% endswagger-parameter %}

{% swagger-response status="202: Accepted" description="" %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}

```javascript
{
  // Response
}
```

{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}

```javascript
{
  // Response
}
```

{% endswagger-response %}
{% endswagger %}

### Example

Let's send a subscribe request to receive updates on new locks.

1. We need to send a subscribe request to the hub located at `/api/hooks/:network/locks` where network param should be the ID. For example, to receive updates on new locks created on rinkeby network, the endpoint would be `/api/hooks/4/locks`
2. Make a subscribe request. Here's an example of it in javascript.

```javascript
// Subscribe request to receive updates on new Locks
async function subscribe() {
  const endpoint = "https://locksmith.unlock-protocol.com/api/hooks/4/locks";

  const formData = new FormData();

  formData.set("hub.topic", "https://locksmith-host/api/hooks/4/locks");
  formData.set("hub.callback", "https://your-webhook-url/");
  formData.set("hub.mode", "subscribe");
  formData.set("hub.secret", "unlock-is-best");

  const result = await fetch(endpoint, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!result.ok) {
    // Handle the error
  }
  const text = await result.text();
  return text;
}
```

Once you make a request here with callback URL specified in the Websub W3C specification schema. You will receive an [_intent verification_ request](https://www.w3.org/TR/websub/#x5-3-hub-verifies-intent-of-the-subscriber) on the callback URL. This is an async request which means even if you received a successful response for the subscription request, you are not fully subscribed until your endpoint has confirmed the intent. You won't receive updates if intent confirmation fails for any reason.

To confirm, your endpoint MUST return an HTTP 200 status code, with the `hub.challenge` value in the body. This value will be sent as a query string to your endpoint by the hub. This is done to prevent spam.

Check out this example written in typescript for reference on how to handle callback intent verification and receive updates [https://github.com/unlock-protocol/websub-discord/blob/main/src/middleware.ts](https://github.com/unlock-protocol/websub-discord/blob/main/src/middleware.ts)
