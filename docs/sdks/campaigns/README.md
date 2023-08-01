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
  fields: "assumenda",
  id: "d6b14429-0747-4477-8a7b-d466d28c10ab",
  page: "neque",
  pageSize: "quo",
  raw: false,
  syncToken: "illum",
  updatedAfter: "quo",
  xAccountId: "fuga",
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
  fields: "eius",
  page: "eos",
  pageSize: "voluptas",
  raw: false,
  syncToken: "ab",
  updatedAfter: "cupiditate",
  xAccountId: "consequatur",
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

