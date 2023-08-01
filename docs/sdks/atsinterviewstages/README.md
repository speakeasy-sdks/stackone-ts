# atsInterviewStages

### Available Operations

* [get](#get) - Get Interview Stage
* [list](#list) - List Interview Stages

## get

Get Interview Stage

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsInterviewStagesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsInterviewStages.get({
  fields: "odit",
  id: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
  page: "ad",
  pageSize: "natus",
  raw: false,
  syncToken: "sed",
  updatedAfter: "iste",
  xAccountId: "dolor",
}).then((res: AtsInterviewStagesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AtsInterviewStagesGetRequest](../../models/operations/atsinterviewstagesgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AtsInterviewStagesGetResponse](../../models/operations/atsinterviewstagesgetresponse.md)>**


## list

List Interview Stages

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsInterviewStagesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsInterviewStages.list({
  fields: "natus",
  page: "laboriosam",
  pageSize: "hic",
  raw: false,
  syncToken: "saepe",
  updatedAfter: "fuga",
  xAccountId: "in",
}).then((res: AtsInterviewStagesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AtsInterviewStagesListRequest](../../models/operations/atsinterviewstageslistrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AtsInterviewStagesListResponse](../../models/operations/atsinterviewstageslistresponse.md)>**
