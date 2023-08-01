# campaigns

### Available Operations

* [get](#get) - Get campaign
* [list](#list) - List campaigns

## get

Get campaign

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingCampaignsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.campaigns.get({
  fields: "provident",
  id: "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04",
  page: "sapiente",
  pageSize: "dicta",
  raw: false,
  syncToken: "ullam",
  updatedAfter: "reprehenderit",
  xAccountId: "ullam",
}).then((res: MarketingCampaignsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.MarketingCampaignsGetRequest](../../models/operations/marketingcampaignsgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.MarketingCampaignsGetResponse](../../models/operations/marketingcampaignsgetresponse.md)>**


## list

List campaigns

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingCampaignsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.campaigns.list({
  fields: "nisi",
  page: "aut",
  pageSize: "voluptatum",
  raw: false,
  syncToken: "qui",
  updatedAfter: "quibusdam",
  xAccountId: "ex",
}).then((res: MarketingCampaignsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.MarketingCampaignsListRequest](../../models/operations/marketingcampaignslistrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.MarketingCampaignsListResponse](../../models/operations/marketingcampaignslistresponse.md)>**

