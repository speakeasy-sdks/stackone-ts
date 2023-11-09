# ConnectSessions
(*connectSessions*)

### Available Operations

* [connectSessionsAuthenticate](#connectsessionsauthenticate) - Authenticate Session
* [connectSessionsCreate](#connectsessionscreate) - Create Session

## connectSessionsAuthenticate

Authenticate Session

### Example Usage

```typescript
import { StackOne } from "StackOne";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });

  const res = await sdk.connectSessions.connectSessionsAuthenticate({
    token: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.ConnectSessionAuthenticate](../../sdk/models/shared/connectsessionauthenticate.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ConnectSessionsAuthenticateResponse](../../sdk/models/operations/connectsessionsauthenticateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## connectSessionsCreate

Create Session

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ConnectSessionCreateCategories } from "StackOne/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });

  const res = await sdk.connectSessions.connectSessionsCreate({
    categories: [
      ConnectSessionCreateCategories.Ats,
      ConnectSessionCreateCategories.Hris,
      ConnectSessionCreateCategories.Crm,
      ConnectSessionCreateCategories.Marketing,
      ConnectSessionCreateCategories.Common,
    ],
    metadata: {},
    originOwnerId: "string",
    originOwnerName: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.ConnectSessionCreate](../../sdk/models/shared/connectsessioncreate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                       | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ConnectSessionsCreateResponse](../../sdk/models/operations/connectsessionscreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
