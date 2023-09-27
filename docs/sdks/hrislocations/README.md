# HRISLocations
(*hrisLocations*)

### Available Operations

* [get](#get) - Get location
* [list](#list) - List locations

## get

Get location

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisLocationsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.hrisLocations.get({
  fields: "accusantium",
  id: "4f157560-82d6-48ea-99f1-d17051339d08",
  page: "aut",
  pageSize: "laudantium",
  raw: false,
  syncToken: "eum",
  updatedAfter: "mollitia",
  xAccountId: "ab",
}).then((res: HrisLocationsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.HrisLocationsGetRequest](../../models/operations/hrislocationsgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.HrisLocationsGetResponse](../../models/operations/hrislocationsgetresponse.md)>**


## list

List locations

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisLocationsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.hrisLocations.list({
  fields: "corrupti",
  page: "non",
  pageSize: "voluptatem",
  raw: false,
  syncToken: "dolor",
  updatedAfter: "occaecati",
  xAccountId: "numquam",
}).then((res: HrisLocationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.HrisLocationsListRequest](../../models/operations/hrislocationslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisLocationsListResponse](../../models/operations/hrislocationslistresponse.md)>**

