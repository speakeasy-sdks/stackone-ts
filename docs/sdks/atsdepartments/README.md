# atsDepartments

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
    password: "",
    username: "",
  },
});

sdk.atsDepartments.get({
  fields: "provident",
  id: "5d8a0d44-6ce2-4af7-a73c-f3be453f870b",
  page: "neque",
  pageSize: "sed",
  raw: false,
  syncToken: "vel",
  updatedAfter: "libero",
  xAccountId: "voluptas",
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
    password: "",
    username: "",
  },
});

sdk.atsDepartments.list({
  fields: "deserunt",
  page: "quam",
  pageSize: "ipsum",
  raw: false,
  syncToken: "incidunt",
  updatedAfter: "qui",
  xAccountId: "cupiditate",
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
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsDepartmentsListResponse](../../models/operations/atsdepartmentslistresponse.md)>**

