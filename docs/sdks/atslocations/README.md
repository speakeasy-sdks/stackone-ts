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
  fields: "delectus",
  id: "48633323-f9b7-47f3-a410-0674ebf69280",
  page: "fugiat",
  pageSize: "ab",
  raw: false,
  syncToken: "soluta",
  updatedAfter: "dolorum",
  xAccountId: "iusto",
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
  fields: "voluptate",
  page: "dolorum",
  pageSize: "deleniti",
  raw: false,
  syncToken: "omnis",
  updatedAfter: "necessitatibus",
  xAccountId: "distinctio",
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

