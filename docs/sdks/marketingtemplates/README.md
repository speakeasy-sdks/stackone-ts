# MarketingTemplates

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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const marketingCreateTemplateRequestDto: MarketingCreateTemplateRequestDto = {
  body: "<html><body>My template</body></html>",
  name: "My template",
  preheader: "My template preheader",
  subject: "My template subject",
  tags: [
    "ex",
  ],
};
const xAccountId: string = "deleniti";

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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const marketingCreateTemplateRequestDto: MarketingCreateTemplateRequestDto = {
  body: "<html><body>My template</body></html>",
  name: "My template",
  preheader: "My template preheader",
  subject: "My template subject",
  tags: [
    "itaque",
  ],
};
const xAccountId: string = "dolorum";

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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const marketingCreateTemplateRequestDto: MarketingCreateTemplateRequestDto = {
  body: "<html><body>My template</body></html>",
  name: "My template",
  preheader: "My template preheader",
  subject: "My template subject",
  tags: [
    "architecto",
  ],
};
const xAccountId: string = "omnis";

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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.marketingTemplates.getEmail({
  fields: "tenetur",
  id: "1d170513-39d0-4808-aa18-40394c26071f",
  page: "natus",
  pageSize: "velit",
  raw: false,
  syncToken: "voluptatibus",
  updatedAfter: "voluptas",
  xAccountId: "asperiores",
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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.marketingTemplates.getOmnichannel({
  fields: "aperiam",
  id: "642dac7a-f515-4cc4-93aa-63aae8d67864",
  page: "possimus",
  pageSize: "facilis",
  raw: false,
  syncToken: "cum",
  updatedAfter: "commodi",
  xAccountId: "in",
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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.marketingTemplates.getPush({
  fields: "corporis",
  id: "fd5e60b3-75ed-44f6-bbee-41f33317fe35",
  page: "harum",
  pageSize: "laboriosam",
  raw: false,
  syncToken: "ipsa",
  updatedAfter: "voluptates",
  xAccountId: "libero",
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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const xAccountId: string = "vitae";

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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.marketingTemplates.listEmail({
  fields: "accusamus",
  page: "similique",
  pageSize: "tempora",
  raw: false,
  syncToken: "aspernatur",
  updatedAfter: "voluptas",
  xAccountId: "voluptas",
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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.marketingTemplates.listOmnichannel({
  fields: "voluptas",
  page: "minima",
  pageSize: "nobis",
  raw: false,
  syncToken: "dolorum",
  updatedAfter: "adipisci",
  xAccountId: "minus",
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
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.marketingTemplates.listPush({
  fields: "dolores",
  page: "blanditiis",
  pageSize: "in",
  raw: false,
  syncToken: "dolore",
  updatedAfter: "aliquam",
  xAccountId: "officiis",
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

