# ATSInterviewStages

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
  fields: "quis",
  id: "1a05dfc2-ddf7-4cc7-8ca1-ba928fc81674",
  page: "qui",
  pageSize: "impedit",
  raw: false,
  syncToken: "cum",
  updatedAfter: "esse",
  xAccountId: "ipsum",
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
  fields: "excepturi",
  page: "aspernatur",
  pageSize: "perferendis",
  raw: false,
  syncToken: "ad",
  updatedAfter: "natus",
  xAccountId: "sed",
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

