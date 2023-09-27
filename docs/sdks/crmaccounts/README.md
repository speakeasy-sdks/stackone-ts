# CRMAccounts
(*crmAccounts*)

### Available Operations

* [get](#get) - Get Account
* [list](#list) - List Accounts

## get

Get Account

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { CrmAccountsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.crmAccounts.get({
  fields: "odio",
  id: "15bf0cbb-1e31-4b8b-90f3-443a1108e0ad",
  page: "porro",
  pageSize: "doloribus",
  raw: false,
  syncToken: "ut",
  updatedAfter: "facilis",
  xAccountId: "cupiditate",
}).then((res: CrmAccountsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CrmAccountsGetRequest](../../models/operations/crmaccountsgetrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CrmAccountsGetResponse](../../models/operations/crmaccountsgetresponse.md)>**


## list

List Accounts

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { CrmAccountsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.crmAccounts.list({
  fields: "qui",
  page: "quae",
  pageSize: "laudantium",
  raw: false,
  syncToken: "odio",
  updatedAfter: "occaecati",
  xAccountId: "voluptatibus",
}).then((res: CrmAccountsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CrmAccountsListRequest](../../models/operations/crmaccountslistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CrmAccountsListResponse](../../models/operations/crmaccountslistresponse.md)>**

