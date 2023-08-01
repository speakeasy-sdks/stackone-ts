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
  fields: "ea",
  id: "c3e250fb-008c-442e-941a-ac366c8dd6b1",
  page: "tempora",
  pageSize: "numquam",
  raw: false,
  syncToken: "explicabo",
  updatedAfter: "provident",
  xAccountId: "ipsa",
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
  fields: "molestiae",
  page: "magnam",
  pageSize: "odio",
  raw: false,
  syncToken: "eius",
  updatedAfter: "esse",
  xAccountId: "esse",
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

