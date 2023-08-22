# marketingTemplates

### Available Operations

* [createEmail](#createemail) - Creates an email template
* [createOmnichannel](#createomnichannel) - Creates an omni-channel template
* [createPush](#createpush) - Creates an push template
* [getEmail](#getemail) - Get email template
* [getOmnichannel](#getomnichannel) - Get omni-channel template
* [getPush](#getpush) - Get push template
* [list](#list) - List templates
* [listEmail](#listemail) - List email templates
* [listOmnichannel](#listomnichannel) - List omni-channel templates
* [listPush](#listpush) - List push templates

## createEmail

Creates an email template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingEmailTemplateCreateRequest, MarketingEmailTemplateCreateResponse } from "StackOne/dist/sdk/models/operations";
import { MarketingCreateTemplateRequestDto } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});
const marketingCreateTemplateRequestDto: MarketingCreateTemplateRequestDto = {
  body: "<html><body>My template</body></html>",
  name: "My template",
  preheader: "My template preheader",
  subject: "My template subject",
  tags: [
    "explicabo",
    "asperiores",
    "facilis",
    "voluptate",
  ],
};
const xAccountId: string = "expedita";

sdk.marketingTemplates.createEmail(marketingCreateTemplateRequestDto, xAccountId).then((res: MarketingEmailTemplateCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `marketingCreateTemplateRequestDto`                                                                  | [shared.MarketingCreateTemplateRequestDto](../../models/shared/marketingcreatetemplaterequestdto.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `xAccountId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account identifier                                                                               |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.MarketingEmailTemplateCreateResponse](../../models/operations/marketingemailtemplatecreateresponse.md)>**


## createOmnichannel

Creates an omni-channel template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import {
  MarketingOmniChannelTemplateCreateRequest,
  MarketingOmniChannelTemplateCreateResponse,
} from "StackOne/dist/sdk/models/operations";
import { MarketingCreateTemplateRequestDto } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});
const marketingCreateTemplateRequestDto: MarketingCreateTemplateRequestDto = {
  body: "<html><body>My template</body></html>",
  name: "My template",
  preheader: "My template preheader",
  subject: "My template subject",
  tags: [
    "iste",
  ],
};
const xAccountId: string = "dolore";

sdk.marketingTemplates.createOmnichannel(marketingCreateTemplateRequestDto, xAccountId).then((res: MarketingOmniChannelTemplateCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `marketingCreateTemplateRequestDto`                                                                  | [shared.MarketingCreateTemplateRequestDto](../../models/shared/marketingcreatetemplaterequestdto.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `xAccountId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account identifier                                                                               |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.MarketingOmniChannelTemplateCreateResponse](../../models/operations/marketingomnichanneltemplatecreateresponse.md)>**


## createPush

Creates an push template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingPushTemplateCreateRequest, MarketingPushTemplateCreateResponse } from "StackOne/dist/sdk/models/operations";
import { MarketingCreateTemplateRequestDto } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});
const marketingCreateTemplateRequestDto: MarketingCreateTemplateRequestDto = {
  body: "<html><body>My template</body></html>",
  name: "My template",
  preheader: "My template preheader",
  subject: "My template subject",
  tags: [
    "sed",
    "in",
    "commodi",
  ],
};
const xAccountId: string = "quidem";

sdk.marketingTemplates.createPush(marketingCreateTemplateRequestDto, xAccountId).then((res: MarketingPushTemplateCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `marketingCreateTemplateRequestDto`                                                                  | [shared.MarketingCreateTemplateRequestDto](../../models/shared/marketingcreatetemplaterequestdto.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `xAccountId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account identifier                                                                               |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.MarketingPushTemplateCreateResponse](../../models/operations/marketingpushtemplatecreateresponse.md)>**


## getEmail

Get email template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingEmailTemplatesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.getEmail({
  fields: "explicabo",
  id: "6916fe1f-08f4-4294-a369-8f447f603e8b",
  page: "quaerat",
  pageSize: "incidunt",
  raw: false,
  syncToken: "ipsam",
  updatedAfter: "debitis",
  xAccountId: "rem",
}).then((res: MarketingEmailTemplatesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.MarketingEmailTemplatesGetRequest](../../models/operations/marketingemailtemplatesgetrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.MarketingEmailTemplatesGetResponse](../../models/operations/marketingemailtemplatesgetresponse.md)>**


## getOmnichannel

Get omni-channel template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingOmniChannelTemplatesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.getOmnichannel({
  fields: "sit",
  id: "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa",
  page: "corrupti",
  pageSize: "accusamus",
  raw: false,
  syncToken: "tempora",
  updatedAfter: "atque",
  xAccountId: "fugit",
}).then((res: MarketingOmniChannelTemplatesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.MarketingOmniChannelTemplatesGetRequest](../../models/operations/marketingomnichanneltemplatesgetrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `retries`                                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.MarketingOmniChannelTemplatesGetResponse](../../models/operations/marketingomnichanneltemplatesgetresponse.md)>**


## getPush

Get push template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingPushTemplatesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.getPush({
  fields: "ut",
  id: "d0ab4075-088e-4518-a206-5e904f3b1194",
  page: "quidem",
  pageSize: "atque",
  raw: false,
  syncToken: "laborum",
  updatedAfter: "nam",
  xAccountId: "tenetur",
}).then((res: MarketingPushTemplatesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.MarketingPushTemplatesGetRequest](../../models/operations/marketingpushtemplatesgetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.MarketingPushTemplatesGetResponse](../../models/operations/marketingpushtemplatesgetresponse.md)>**


## list

List templates

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingTemplatesListRequest, MarketingTemplatesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});
const xAccountId: string = "laboriosam";

sdk.marketingTemplates.list(xAccountId).then((res: MarketingTemplatesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `xAccountId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The account identifier                                              |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.MarketingTemplatesListResponse](../../models/operations/marketingtemplateslistresponse.md)>**


## listEmail

List email templates

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingEmailTemplatesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.listEmail({
  fields: "alias",
  page: "amet",
  pageSize: "deserunt",
  raw: false,
  syncToken: "voluptate",
  updatedAfter: "unde",
  xAccountId: "reiciendis",
}).then((res: MarketingEmailTemplatesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.MarketingEmailTemplatesListRequest](../../models/operations/marketingemailtemplateslistrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.MarketingEmailTemplatesListResponse](../../models/operations/marketingemailtemplateslistresponse.md)>**


## listOmnichannel

List omni-channel templates

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingOmniChannelTemplatesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.listOmnichannel({
  fields: "provident",
  page: "repellendus",
  pageSize: "delectus",
  raw: false,
  syncToken: "voluptates",
  updatedAfter: "perferendis",
  xAccountId: "est",
}).then((res: MarketingOmniChannelTemplatesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.MarketingOmniChannelTemplatesListRequest](../../models/operations/marketingomnichanneltemplateslistrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.MarketingOmniChannelTemplatesListResponse](../../models/operations/marketingomnichanneltemplateslistresponse.md)>**


## listPush

List push templates

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingPushTemplatesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.listPush({
  fields: "quidem",
  page: "reprehenderit",
  pageSize: "facere",
  raw: false,
  syncToken: "fuga",
  updatedAfter: "praesentium",
  xAccountId: "mollitia",
}).then((res: MarketingPushTemplatesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.MarketingPushTemplatesListRequest](../../models/operations/marketingpushtemplateslistrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.MarketingPushTemplatesListResponse](../../models/operations/marketingpushtemplateslistresponse.md)>**

