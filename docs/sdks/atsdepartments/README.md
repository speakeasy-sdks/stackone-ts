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
  fields: "pariatur",
  id: "9cbf4863-3323-4f9b-b7f3-a4100674ebf6",
  page: "natus",
  pageSize: "eos",
  raw: false,
  syncToken: "atque",
  updatedAfter: "sit",
  xAccountId: "fugiat",
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
  fields: "ab",
  page: "soluta",
  pageSize: "dolorum",
  raw: false,
  syncToken: "iusto",
  updatedAfter: "voluptate",
  xAccountId: "dolorum",
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

