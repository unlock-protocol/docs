---
description: >-
  Locksmith provides facilities to host and retrieve token metadata associated
  with Locks and its key holders.
---

# Token Metadata API

{% api-method method="get" host="https://locksmith-host" path="/api/key/:lockAddress/:keyId" %}
{% api-method-summary %}
Get Key Metadata \(NFT Metadata\)
{% endapi-method-summary %}

{% api-method-description %}
This endpoint returns metadata associated with an associated key.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="lockAddress" type="string" required=true %}
Lock contract address
{% endapi-method-parameter %}

{% api-method-parameter name="keyId" type="string" required=true %}
ID of the cake to get, for free of course.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=false %}
Authentication token to track down who is emptying our stocks.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="data" type="string" %}
Data associated with the provided signature
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns metadata associated with requested key \(NFT\)
{% endapi-method-response-example-description %}

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
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Key does not exist
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://locksmith-host" path="/api/key/:address/keyHolderMetadata" %}
{% api-method-summary %}
Get Key Holder Metadata for a Key Holders
{% endapi-method-summary %}

{% api-method-description %}
Provides lock owners with key holder provided metadata in bulk
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
Lock contract address
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="data" type="string" required=true %}
Data associated with the provided signature
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

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
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
If an authorization header is not provided, if the signee of the provided payload does not match the lock owner, the signature has expired or if a payload is not provided the request will be deemed unauthorized
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="https://locksmith-host" path="/api/key/:address" %}
{% api-method-summary %}
Update Lock's default Metadata
{% endapi-method-summary %}

{% api-method-description %}
Allows Lock owners with the ability to update default metadata to be shared with all keys of a given Lock.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
Lock's contract address
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="" type="object" required=true %}
Structured data with update details
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=202 %}
{% api-method-response-example-description %}
The metadata has been update
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
An unknown issue occurs when attempting to persist the update
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
The request does not contain a valid signature or is missing a payload
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="https://locksmith-host" path="/api/key/:address/:keyId" %}
{% api-method-summary %}
Update a Key's Metadata
{% endapi-method-summary %}

{% api-method-description %}
Provides lock owners with the ability to update metadata associated with specific keys.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
Lock's contract address
{% endapi-method-parameter %}

{% api-method-parameter name="keyId" type="string" required=true %}
Id of key to be updated
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="" type="object" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=202 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="https://locksmith-host" path="/api/key/:address/user/:userAddress" %}
{% api-method-summary %}
Update a User's Metadata Associated with keys of a give Lock
{% endapi-method-summary %}

{% api-method-description %}
Key holders are allowed  to update metadata associated with keys of a given lock in support of downstream use cases. Lock owners will have access to protected information provided by key holders.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="userAddress" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="" type="object" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

