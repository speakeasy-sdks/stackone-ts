# hrisEmployments

### Available Operations

* [get](#get) - Get Employment
* [list](#list) - List Employments

## get

Get Employment

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisEmploymentsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.hrisEmployments.get({
  fields: "nulla",
  id: "20e457e1-858b-46a8-9fbe-3a5aa8e4824d",
  page: "voluptatem",
  pageSize: "culpa",
  raw: false,
  syncToken: "expedita",
  updatedAfter: "magnam",
  xAccountId: "consequatur",
}).then((res: HrisEmploymentsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.HrisEmploymentsGetRequest](../../models/operations/hrisemploymentsgetrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.HrisEmploymentsGetResponse](../../models/operations/hrisemploymentsgetresponse.md)>**


## list

List Employments

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisEmploymentsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.hrisEmployments.list({
  fields: "esse",
  page: "ipsam",
  pageSize: "sit",
  raw: false,
  syncToken: "voluptatum",
  updatedAfter: "quas",
  xAccountId: "repudiandae",
}).then((res: HrisEmploymentsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.HrisEmploymentsListRequest](../../models/operations/hrisemploymentslistrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.HrisEmploymentsListResponse](../../models/operations/hrisemploymentslistresponse.md)>**

