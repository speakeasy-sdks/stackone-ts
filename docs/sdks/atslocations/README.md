# atsLocations

### Available Operations

* [get](#get) - Get Location
* [list](#list) - List locations

## get

Get Location

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsLocationsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsLocations.get({
  fields: "excepturi",
  id: "b77f3a41-0067-44eb-b692-80d1ba77a89e",
  page: "distinctio",
  pageSize: "asperiores",
  raw: false,
  syncToken: "nihil",
  updatedAfter: "ipsum",
  xAccountId: "voluptate",
}).then((res: AtsLocationsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.AtsLocationsGetRequest](../../models/operations/atslocationsgetrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.AtsLocationsGetResponse](../../models/operations/atslocationsgetresponse.md)>**


## list

List locations

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsLocationsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsLocations.list({
  fields: "id",
  page: "saepe",
  pageSize: "eius",
  raw: false,
  syncToken: "aspernatur",
  updatedAfter: "perferendis",
  xAccountId: "amet",
}).then((res: AtsLocationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsLocationsListRequest](../../models/operations/atslocationslistrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsLocationsListResponse](../../models/operations/atslocationslistresponse.md)>**

