# atsJobs

### Available Operations

* [get](#get) - Get Job
* [list](#list) - List Jobs

## get

Get Job

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsJobsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsJobs.get({
  fields: "corporis",
  id: "fbb25870-5320-42c7-bd5f-e9b90c28909b",
  page: "adipisci",
  pageSize: "asperiores",
  raw: false,
  syncToken: "earum",
  updatedAfter: "modi",
  xAccountId: "iste",
}).then((res: AtsJobsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.AtsJobsGetRequest](../../models/operations/atsjobsgetrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.AtsJobsGetResponse](../../models/operations/atsjobsgetresponse.md)>**


## list

List Jobs

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsJobsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsJobs.list({
  fields: "dolorum",
  page: "deleniti",
  pageSize: "pariatur",
  raw: false,
  syncToken: "provident",
  updatedAfter: "nobis",
  xAccountId: "libero",
}).then((res: AtsJobsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.AtsJobsListRequest](../../models/operations/atsjobslistrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AtsJobsListResponse](../../models/operations/atsjobslistresponse.md)>**

