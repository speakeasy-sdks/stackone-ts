# ATSJobs
(*atsJobs*)

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
  fields: "rerum",
  id: "3fe49a8d-9cbf-4486-b332-3f9b77f3a410",
  page: "ipsa",
  pageSize: "iure",
  raw: false,
  syncToken: "odio",
  updatedAfter: "quaerat",
  xAccountId: "accusamus",
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
  fields: "quidem",
  page: "voluptatibus",
  pageSize: "voluptas",
  raw: false,
  syncToken: "natus",
  updatedAfter: "eos",
  xAccountId: "atque",
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

