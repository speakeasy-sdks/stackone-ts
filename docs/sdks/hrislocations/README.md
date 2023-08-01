# hrisLocations

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
    password: "",
    username: "",
  },
});

sdk.hrisLocations.get({
  fields: "corporis",
  id: "1862065e-904f-43b1-994b-8abf603a79f9",
  page: "repellendus",
  pageSize: "delectus",
  raw: false,
  syncToken: "voluptates",
  updatedAfter: "perferendis",
  xAccountId: "est",
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
    password: "",
    username: "",
  },
});

sdk.hrisLocations.list({
  fields: "quidem",
  page: "reprehenderit",
  pageSize: "facere",
  raw: false,
  syncToken: "fuga",
  updatedAfter: "praesentium",
  xAccountId: "mollitia",
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
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisLocationsListResponse](../../models/operations/hrislocationslistresponse.md)>**

