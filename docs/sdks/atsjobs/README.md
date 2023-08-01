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
    password: "",
    username: "",
  },
});

sdk.atsJobs.get({
  fields: "architecto",
  id: "108e0adc-f4b9-4218-b9fc-e953f73ef7fb",
  page: "quod",
  pageSize: "odio",
  raw: false,
  syncToken: "similique",
  updatedAfter: "facilis",
  xAccountId: "vero",
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
    password: "",
    username: "",
  },
});

sdk.atsJobs.list({
  fields: "ducimus",
  page: "dolore",
  pageSize: "quibusdam",
  raw: false,
  syncToken: "illum",
  updatedAfter: "sequi",
  xAccountId: "natus",
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
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AtsJobsListResponse](../../models/operations/atsjobslistresponse.md)>**

