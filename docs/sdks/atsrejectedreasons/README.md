# atsRejectedReasons

### Available Operations

* [get](#get) - Get Rejected Reason
* [list](#list) - List Rejected Reasons

## get

Get Rejected Reason

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsRejectedReasonsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsRejectedReasons.get({
  fields: "iure",
  id: "eb10faaa-2352-4c59-9590-7aff1a3a2fa9",
  page: "numquam",
  pageSize: "commodi",
  raw: false,
  syncToken: "quam",
  updatedAfter: "molestiae",
  xAccountId: "velit",
}).then((res: AtsRejectedReasonsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AtsRejectedReasonsGetRequest](../../models/operations/atsrejectedreasonsgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AtsRejectedReasonsGetResponse](../../models/operations/atsrejectedreasonsgetresponse.md)>**


## list

List Rejected Reasons

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsRejectedReasonsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsRejectedReasons.list({
  fields: "error",
  page: "quia",
  pageSize: "quis",
  raw: false,
  syncToken: "vitae",
  updatedAfter: "laborum",
  xAccountId: "animi",
}).then((res: AtsRejectedReasonsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AtsRejectedReasonsListRequest](../../models/operations/atsrejectedreasonslistrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AtsRejectedReasonsListResponse](../../models/operations/atsrejectedreasonslistresponse.md)>**

