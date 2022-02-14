---
description: Unlock can send real time updates to endpoints.
---

# Webhooks

Locksmith implements [websub](https://www.w3.org/TR/websub/\)) which allows anyone to receive real time updates from unlock subgraph. It is similar to a webhook system which many developers will be familiar with but with intent verification built in.

Currently, we support sending updates on newly created locks and keys to user endpoints. To subscribe, an application will need to send a post request to the hubs located at `/api/hooks/[topic]`. The body needs to match the schema specified in the [websub w3c spec](https://www.w3.org/TR/websub/#x5-1-subscriber-sends-subscription-request).

As an example, let's send a subscribe request to receive updates on new locks.

The endpoint for that would be `/api/hooks/:network/locks`  where network should be the ID of the network you want to receive updates on. That would be 1 for mainnet, 4 for rinkeby, 100 for xdai, and others. We are going to subscribe to new locks on rinkey network so our final endpoint would be `/api/hooks/4/locks`

{% swagger method="post" path="" baseUrl="https://locksmith-host/api/hooks/4/locks" summary="" %}
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

Once you make a request here with callback URL specified in the websub w3c spec schema. You will receive an intent verification request on the callback url and you will need to echo the response to confirm the subscription. If the details are different from what you requested, please reject the request.&#x20;

Check out this example written in typescript for reference [https://github.com/unlock-protocol/websub-discord/blob/main/src/middleware.ts](https://github.com/unlock-protocol/websub-discord/blob/main/src/middleware.ts)

Similarly, you can also receive updates keys and more. See all the available hubs below.

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
