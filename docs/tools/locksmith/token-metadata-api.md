---
description: >-
  Locksmith provides facilities to host and retrieve token metadata associated
  with Locks and its key holders.
---

# Token Metadata API

{% swagger baseUrl="https://locksmith-host" path="/api/key/:lockAddress/:keyId" method="get" summary="Get Key Metadata (NFT Metadata)" %}
{% swagger-description %}
This endpoint returns metadata associated with an associated key.
{% endswagger-description %}

{% swagger-parameter name="lockAddress" type="string" required="true" in="path" %}
Lock contract address
{% endswagger-parameter %}

{% swagger-parameter name="keyId" type="string" required="true" in="path" %}
ID of the cake to get, for free of course.
{% endswagger-parameter %}

{% swagger-parameter name="Authentication" type="string" required="false" in="header" %}
Authentication token to track down who is emptying our stocks.
{% endswagger-parameter %}

{% swagger-parameter name="data" type="string" in="query" %}
Data associated with the provided signature
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "name": "Blue Checkmark",
  "description": "A blue checkmark for all of your social web accounts! Unlock is a protocol for memberships. https://unlock-protocol.com/",
  "image": "https://assets.unlock-protocol.com/nft-images/blue-checkmark.png",
  "attributes": [
    {
      "trait_type": "Expiration",
      "value": 4720101493,
      "display_type": "date"
    }
  ]
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://locksmith-host" path="/api/key/:address/keyHolderMetadata" method="get" summary="Get Key Holder Metadata for a Key Holders" %}
{% swagger-description %}
Provides lock owners with key holder provided metadata in bulk
{% endswagger-description %}

{% swagger-parameter name="address" type="string" required="true" in="path" %}
Lock contract address
{% endswagger-parameter %}

{% swagger-parameter name="Authorization" type="string" required="true" in="header" %}

{% endswagger-parameter %}

{% swagger-parameter name="data" type="string" required="true" in="query" %}
Data associated with the provided signature
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
[{
    tokenAddress: lockAddress,
    userAddress: lockOwningAddress,
      data: {
        protected: {
            hidden: 'metadata',
        },
        public: {
            mock: 'values',
        },
      },
}]
```
{% endswagger-response %}

{% swagger-response status="401" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://locksmith-host" path="/api/key/:address" method="put" summary="Update Lock's default Metadata" %}
{% swagger-description %}
Allows Lock owners with the ability to update default metadata to be shared with all keys of a given Lock.
{% endswagger-description %}

{% swagger-parameter name="address" type="string" required="true" in="path" %}
Lock's contract address
{% endswagger-parameter %}

{% swagger-parameter name="Authorization" type="string" required="true" in="header" %}

{% endswagger-parameter %}

{% swagger-parameter name="" type="object" required="true" in="body" %}
Structured data with update details
{% endswagger-parameter %}

{% swagger-response status="202" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="401" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://locksmith-host" path="/api/key/:address/:keyId" method="put" summary="Update a Key's Metadata" %}
{% swagger-description %}
Provides lock owners with the ability to update metadata associated with specific keys.
{% endswagger-description %}

{% swagger-parameter name="address" type="string" required="true" in="path" %}
Lock's contract address
{% endswagger-parameter %}

{% swagger-parameter name="keyId" type="string" required="true" in="path" %}
Id of key to be updated
{% endswagger-parameter %}

{% swagger-parameter name="Authorization" type="string" required="true" in="header" %}

{% endswagger-parameter %}

{% swagger-parameter name="" type="object" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="202" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="401" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://locksmith-host" path="/api/key/:address/user/:userAddress" method="put" summary="Update a User's Metadata Associated with keys of a give Lock" %}
{% swagger-description %}
Key holders are allowed to update metadata associated with keys of a given lock in support of downstream use cases. Lock owners will have access to protected information provided by key holders.
{% endswagger-description %}

{% swagger-parameter name="address" type="string" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="userAddress" type="string" required="true" in="path" %}

{% endswagger-parameter %}

{% swagger-parameter name="Authorization" type="string" required="true" in="header" %}

{% endswagger-parameter %}

{% swagger-parameter name="" type="object" required="true" in="body" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="401" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}
