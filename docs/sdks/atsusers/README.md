# atsUsers

### Available Operations

* [get](#get) - Get User
* [list](#list) - List Users

## get

Get User

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsUsersGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsUsers.get({
  fields: "optio",
  id: "e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45",
  page: "dolorem",
  pageSize: "sapiente",
  raw: false,
  syncToken: "totam",
  updatedAfter: "nihil",
  xAccountId: "sit",
}).then((res: AtsUsersGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.AtsUsersGetRequest](../../models/operations/atsusersgetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AtsUsersGetResponse](../../models/operations/atsusersgetresponse.md)>**


## list

List Users

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsUsersListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsUsers.list({
  fields: "expedita",
  page: "neque",
  pageSize: "sed",
  raw: false,
  syncToken: "vel",
  updatedAfter: "libero",
  xAccountId: "voluptas",
}).then((res: AtsUsersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.AtsUsersListRequest](../../models/operations/atsuserslistrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.AtsUsersListResponse](../../models/operations/atsuserslistresponse.md)>**

