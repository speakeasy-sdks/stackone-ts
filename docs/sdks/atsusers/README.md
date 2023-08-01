# atsUsers

### Available Operations

* [get](#get) - Get User
* [list](#list) - List Users

## get

Get User

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsUsersGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsUsers.get({
  fields: "ipsum",
  id: "f73ef7fb-c7ab-4d74-9d39-c0f5d2cff7c7",
  page: "alias",
  pageSize: "officia",
  raw: false,
  syncToken: "tempora",
  updatedAfter: "ipsam",
  xAccountId: "ea",
}).then((res: AtsUsersGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.AtsUsersGetRequest](../../models/operations/atsusersgetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AtsUsersGetResponse](../../models/operations/atsusersgetresponse.md)>**


## list

List Users

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsUsersListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsUsers.list({
  fields: "aspernatur",
  page: "vel",
  pageSize: "possimus",
  raw: false,
  syncToken: "magnam",
  updatedAfter: "ratione",
  xAccountId: "ex",
}).then((res: AtsUsersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.AtsUsersListRequest](../../models/operations/atsuserslistrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.AtsUsersListResponse](../../models/operations/atsuserslistresponse.md)>**

