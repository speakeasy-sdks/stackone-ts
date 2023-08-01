# atsInterviews

### Available Operations

* [get](#get) - Get Interview
* [list](#list) - List Interviews

## get

Get Interview

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsInterviewsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsInterviews.get({
  fields: "maxime",
  id: "db1a8422-bb67-49d2-b227-15bf0cbb1e31",
  page: "nobis",
  pageSize: "quos",
  raw: false,
  syncToken: "tempore",
  updatedAfter: "cupiditate",
  xAccountId: "aperiam",
}).then((res: AtsInterviewsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsInterviewsGetRequest](../../models/operations/atsinterviewsgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsInterviewsGetResponse](../../models/operations/atsinterviewsgetresponse.md)>**


## list

List Interviews

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsInterviewsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsInterviews.list({
  fields: "delectus",
  page: "dolorem",
  pageSize: "dolore",
  raw: false,
  syncToken: "labore",
  updatedAfter: "adipisci",
  xAccountId: "dolorum",
}).then((res: AtsInterviewsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsInterviewsListRequest](../../models/operations/atsinterviewslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsInterviewsListResponse](../../models/operations/atsinterviewslistresponse.md)>**

