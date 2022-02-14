---
description: Unlock can send real time updates to endpoints.
---

# Webhooks

Locksmith implements [websub](https://www.w3.org/TR/websub) which allows anyone to receive real time updates from unlock subgraph. It is similar to a webhook system which many developers will be familiar with but with built-in intent verification.

Currently, locksmith support sending updates on new locks and keys. To subscribe, an application will need to send a post request to the hubs located at `/api/hooks/[topic]`. The body needs to match the schema specified in the [websub w3c spec](https://www.w3.org/TR/websub/#x5-1-subscriber-sends-subscription-request).

Let's send a subscribe request to receive updates on new locks.

1. We need to send a subscribe request to the locks hub located at `/api/hooks/:network/locks`  where network param should be the ID. To receive updates on new locks created on rinkey network, our final endpoint would be `/api/hooks/4/locks`
2. Make a subscribe request. Here's an example of it in javascript.

```javascript
// Subscribe request to receive updates on new Locks
async function subscribe() {
  const endpoint = "https://locksmith-host/api/hooks/4/locks"
  const hubBody = JSON.stringify({
    hub: {
      topic: "https://locksmith-host/api/hooks/4/locks",
      callback: "https://callback-url",
      secret: "unlock-is-best",
      mode: "subscribe"
    }
  })
  const result = await fetch(endpoint, {
    method: "POST",
    body: hubBody,
    headers: {
      "Content-Type": "application/json"
    }
  })
  
  if(!result.ok) {
    // Handle the error
  }
  const text = await result.text()
  return text 
}
```

Once you make a request here with callback URL specified in the websub w3c spec schema. You will receive an intent verification request on the callback URL. This is an async request which means even if you received a successful response for the subscription request, you are not fully subscribed until intent confirmation. You won't receive updates if intent confirmation fails for any reason.

The application located at the callback URL will need to echo the response to confirm their intent to subscribe to updates. This is done to prevent spam.

Check out this example written in typescript for reference on how to handle callback intent verification and receive updates [https://github.com/unlock-protocol/websub-discord/blob/main/src/middleware.ts](https://github.com/unlock-protocol/websub-discord/blob/main/src/middleware.ts)

All our available hubs are described below. You can subscribe to any of them following the same steps above.

{% swagger method="post" path="/" baseUrl="https://locksmith-host/api/hooks/4/locks" summary="" %}
{% swagger-description %}
`Subscribe to receive updates about newly created locks on the specified network.`

 
{% endswagger-description %}

{% swagger-parameter in="body" type="url" required="true" name="hub.topic" %}
Same as the hub URL - https://locksmith-host/api/hooks/4/locks
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.callback" type="url" required="true" %}
The callback URL where you will receive the new locks data.
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.mode" type="string" required="true" %}
subscribe or unsubscribe
{% endswagger-parameter %}

{% swagger-parameter in="body" name="hub.secret" type="string" %}
This is used for adding signature in the header with response for verification.

Locksmith by default uses sha256 but you can get algorithm by parsing the value from header x-hub-signature
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

{% swagger method="post" path="/:lockAddress/keys" baseUrl="https://locksmith-host/api/hooks/4/locks" summary="" %}
{% swagger-description %}
`Subscribe to receive updates about newly created locks on the specified network.`

 
{% endswagger-description %}

{% swagger-parameter in="body" name="hub.topic" required="true" type="url" %}
Same as the hub URL - https://locksmith-host/api/hooks/4/locks/0x24e54.../keys
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

{% swagger-response status="202: Accepted" description="Accepted" %}
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
