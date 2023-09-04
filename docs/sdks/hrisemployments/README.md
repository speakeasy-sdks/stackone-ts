# hrisEmployments

### Available Operations

* [get](#get) - Get Employment
* [list](#list) - List Employments

## get

Get Employment

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisEmploymentsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.hrisEmployments.get({
  fields: "sit",
  id: "ab3c20c4-f378-49fd-871f-99dd2efd121a",
  page: "culpa",
  pageSize: "aliquid",
  raw: false,
  syncToken: "tenetur",
  updatedAfter: "quae",
  xAccountId: "earum",
}).then((res: HrisEmploymentsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.HrisEmploymentsGetRequest](../../models/operations/hrisemploymentsgetrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.HrisEmploymentsGetResponse](../../models/operations/hrisemploymentsgetresponse.md)>**


## list

List Employments

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisEmploymentsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.hrisEmployments.list({
  fields: "vel",
  page: "in",
  pageSize: "eius",
  raw: false,
  syncToken: "libero",
  updatedAfter: "illum",
  xAccountId: "soluta",
}).then((res: HrisEmploymentsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.HrisEmploymentsListRequest](../../models/operations/hrisemploymentslistrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.HrisEmploymentsListResponse](../../models/operations/hrisemploymentslistresponse.md)>**

