# HRISCompanies
(*hrisCompanies*)

### Available Operations

* [get](#get) - Get Company
* [list](#list) - List Companies

## get

Get Company

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisCompaniesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.hrisCompanies.get({
  fields: "rem",
  id: "a7bd466d-28c1-40ab-bcdc-a4251904e523",
  page: "quo",
  pageSize: "esse",
  raw: false,
  syncToken: "recusandae",
  updatedAfter: "aperiam",
  xAccountId: "distinctio",
}).then((res: HrisCompaniesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.HrisCompaniesGetRequest](../../models/operations/hriscompaniesgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.HrisCompaniesGetResponse](../../models/operations/hriscompaniesgetresponse.md)>**


## list

List Companies

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisCompaniesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.hrisCompanies.list({
  fields: "quod",
  page: "dignissimos",
  pageSize: "inventore",
  raw: false,
  syncToken: "nihil",
  updatedAfter: "totam",
  xAccountId: "accusamus",
}).then((res: HrisCompaniesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.HrisCompaniesListRequest](../../models/operations/hriscompanieslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisCompaniesListResponse](../../models/operations/hriscompanieslistresponse.md)>**

