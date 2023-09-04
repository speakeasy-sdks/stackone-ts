# atsInterviews

### Available Operations

* [get](#get) - Get Interview
* [list](#list) - List Interviews

## get

Get Interview

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsInterviewsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsInterviews.get({
  fields: "saepe",
  id: "d028921c-ddc6-4926-81fb-576b0d5f0d30",
  page: "cumque",
  pageSize: "corporis",
  raw: false,
  syncToken: "hic",
  updatedAfter: "libero",
  xAccountId: "nobis",
}).then((res: AtsInterviewsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsInterviewsGetRequest](../../models/operations/atsinterviewsgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsInterviewsGetResponse](../../models/operations/atsinterviewsgetresponse.md)>**


## list

List Interviews

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsInterviewsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsInterviews.list({
  fields: "dolores",
  page: "quis",
  pageSize: "totam",
  raw: false,
  syncToken: "dignissimos",
  updatedAfter: "eaque",
  xAccountId: "quis",
}).then((res: AtsInterviewsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsInterviewsListRequest](../../models/operations/atsinterviewslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsInterviewsListResponse](../../models/operations/atsinterviewslistresponse.md)>**

