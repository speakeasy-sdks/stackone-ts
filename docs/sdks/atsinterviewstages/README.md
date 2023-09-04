# atsInterviewStages

### Available Operations

* [get](#get) - Get Interview Stage
* [list](#list) - List Interview Stages

## get

Get Interview Stage

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsInterviewStagesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsInterviewStages.get({
  fields: "at",
  id: "f7cc78ca-1ba9-428f-8816-742cb7392059",
  page: "sed",
  pageSize: "iste",
  raw: false,
  syncToken: "dolor",
  updatedAfter: "natus",
  xAccountId: "laboriosam",
}).then((res: AtsInterviewStagesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AtsInterviewStagesGetRequest](../../models/operations/atsinterviewstagesgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AtsInterviewStagesGetResponse](../../models/operations/atsinterviewstagesgetresponse.md)>**


## list

List Interview Stages

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsInterviewStagesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsInterviewStages.list({
  fields: "hic",
  page: "saepe",
  pageSize: "fuga",
  raw: false,
  syncToken: "in",
  updatedAfter: "corporis",
  xAccountId: "iste",
}).then((res: AtsInterviewStagesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AtsInterviewStagesListRequest](../../models/operations/atsinterviewstageslistrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AtsInterviewStagesListResponse](../../models/operations/atsinterviewstageslistresponse.md)>**

