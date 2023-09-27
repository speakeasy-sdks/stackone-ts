# ATSDepartments
(*atsDepartments*)

### Available Operations

* [get](#get) - Get Department
* [list](#list) - List Departments

## get

Get Department

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsDepartmentsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsDepartments.get({
  fields: "dolor",
  id: "e2516fe4-c8b7-411e-9b7f-d2ed028921cd",
  page: "pariatur",
  pageSize: "maxime",
  raw: false,
  syncToken: "ea",
  updatedAfter: "excepturi",
  xAccountId: "odit",
}).then((res: AtsDepartmentsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsDepartmentsGetRequest](../../models/operations/atsdepartmentsgetrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsDepartmentsGetResponse](../../models/operations/atsdepartmentsgetresponse.md)>**


## list

List Departments

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsDepartmentsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsDepartments.list({
  fields: "ea",
  page: "accusantium",
  pageSize: "ab",
  raw: false,
  syncToken: "maiores",
  updatedAfter: "quidem",
  xAccountId: "ipsam",
}).then((res: AtsDepartmentsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.AtsDepartmentsListRequest](../../models/operations/atsdepartmentslistrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsDepartmentsListResponse](../../models/operations/atsdepartmentslistresponse.md)>**

