# ATSUsers
(*atsUsers*)

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
  fields: "Northeast Hatchback Kia",
  id: "<ID>",
  page: "towards",
  pageSize: "Xenon Account",
  raw: false,
  syncToken: "Cambridgeshire",
  updatedAfter: "Rupiah",
  xAccountId: "Neon aside Dollar",
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
  fields: "Northeast Metal Canada",
  page: "Data Response West",
  pageSize: "boil primary synthesize",
  raw: false,
  syncToken: "hacking Paradigm",
  updatedAfter: "backing",
  xAccountId: "optimize itaque",
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

