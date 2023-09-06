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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.campaigns.get({
  fields: "veritatis",
  id: "b8b90f34-43a1-4108-a0ad-cf4b921879fc",
  page: "vero",
  pageSize: "omnis",
  raw: false,
  syncToken: "quis",
  updatedAfter: "ipsum",
  xAccountId: "delectus",
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
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.campaigns.list({
  fields: "voluptate",
  page: "consectetur",
  pageSize: "vero",
  raw: false,
  syncToken: "tenetur",
  updatedAfter: "dignissimos",
  xAccountId: "hic",
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
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.MarketingCampaignsListResponse](../../models/operations/marketingcampaignslistresponse.md)>**

