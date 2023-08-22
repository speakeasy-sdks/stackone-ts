# accounts

### Available Operations

* [delete](#delete) - Delete Account
* [get](#get) - Get Account
* [list](#list) - List Accounts

## delete

Delete Account

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AccountsDeleteRequest, AccountsDeleteResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const id: string = "laudantium";

sdk.accounts.delete(id).then((res: AccountsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AccountsDeleteResponse](../../models/operations/accountsdeleteresponse.md)>**


## get

Get Account

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AccountsGetRequest, AccountsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const id: string = "dicta";

sdk.accounts.get(id).then((res: AccountsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AccountsGetResponse](../../models/operations/accountsgetresponse.md)>**


## list

List Accounts

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AccountsListRequest, AccountsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const originOwnerId: string = "dolor";
const provider: string = "maiores";

sdk.accounts.list(originOwnerId, provider).then((res: AccountsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `originOwnerId`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | The origin owner identifier of the results to fetch                 |
| `provider`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | The provider of the results to fetch                                |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AccountsListResponse](../../models/operations/accountslistresponse.md)>**

