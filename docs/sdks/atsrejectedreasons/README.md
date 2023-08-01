# atsRejectedReasons

### Available Operations

* [get](#get) - Get Rejected Reason
* [list](#list) - List Rejected Reasons

## get

Get Rejected Reason

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsRejectedReasonsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsRejectedReasons.get({
  fields: "corporis",
  id: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
  page: "mollitia",
  pageSize: "occaecati",
  raw: false,
  syncToken: "numquam",
  updatedAfter: "commodi",
  xAccountId: "quam",
}).then((res: AtsRejectedReasonsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AtsRejectedReasonsGetRequest](../../models/operations/atsrejectedreasonsgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AtsRejectedReasonsGetResponse](../../models/operations/atsrejectedreasonsgetresponse.md)>**


## list

List Rejected Reasons

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsRejectedReasonsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsRejectedReasons.list({
  fields: "molestiae",
  page: "velit",
  pageSize: "error",
  raw: false,
  syncToken: "quia",
  updatedAfter: "quis",
  xAccountId: "vitae",
}).then((res: AtsRejectedReasonsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AtsRejectedReasonsListRequest](../../models/operations/atsrejectedreasonslistrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AtsRejectedReasonsListResponse](../../models/operations/atsrejectedreasonslistresponse.md)>**

