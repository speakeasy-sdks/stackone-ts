# HRISLocations

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
  fields: "blanditiis",
  id: "9fd871f9-9dd2-4efd-921a-a6f1e674bdb0",
  page: "aliquam",
  pageSize: "sapiente",
  raw: false,
  syncToken: "dicta",
  updatedAfter: "ullam",
  xAccountId: "reprehenderit",
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
  fields: "ullam",
  page: "nisi",
  pageSize: "aut",
  raw: false,
  syncToken: "voluptatum",
  updatedAfter: "qui",
  xAccountId: "quibusdam",
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

