# ATSRejectedReasons
(*atsRejectedReasons*)

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
  fields: "Northeast Hatchback Kia",
  id: "<ID>",
  page: "towards",
  pageSize: "Xenon Account",
  raw: false,
  syncToken: "Cambridgeshire",
  updatedAfter: "Rupiah",
  xAccountId: "Neon aside Dollar",
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
  fields: "Northeast Metal Canada",
  page: "Data Response West",
  pageSize: "boil primary synthesize",
  raw: false,
  syncToken: "hacking Paradigm",
  updatedAfter: "backing",
  xAccountId: "optimize itaque",
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

