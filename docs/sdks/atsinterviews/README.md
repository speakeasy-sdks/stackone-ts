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
  fields: "deleniti",
  id: "9ebf737a-e420-43ce-9e6a-95d8a0d446ce",
  page: "qui",
  pageSize: "dolorum",
  raw: false,
  syncToken: "a",
  updatedAfter: "esse",
  xAccountId: "harum",
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
  fields: "iusto",
  page: "ipsum",
  pageSize: "quisquam",
  raw: false,
  syncToken: "tenetur",
  updatedAfter: "amet",
  xAccountId: "tempore",
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

