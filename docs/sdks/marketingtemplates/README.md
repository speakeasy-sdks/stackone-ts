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
import { MarketingEmailTemplateCreateResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.createEmail({
  marketingCreateTemplateRequestDto: {
    body: "<html><body>My template</body></html>",
    name: "My template",
    preheader: "My template preheader",
    subject: "My template subject",
    tags: [
      "voluptatem",
      "quisquam",
    ],
  },
  xAccountId: "repudiandae",
}).then((res: MarketingEmailTemplateCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.MarketingEmailTemplateCreateRequest](../../models/operations/marketingemailtemplatecreaterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.MarketingEmailTemplateCreateResponse](../../models/operations/marketingemailtemplatecreateresponse.md)>**


## createOmnichannel

Creates an omni-channel template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingOmniChannelTemplateCreateResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.createOmnichannel({
  marketingCreateTemplateRequestDto: {
    body: "<html><body>My template</body></html>",
    name: "My template",
    preheader: "My template preheader",
    subject: "My template subject",
    tags: [
      "atque",
    ],
  },
  xAccountId: "reprehenderit",
}).then((res: MarketingOmniChannelTemplateCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.MarketingOmniChannelTemplateCreateRequest](../../models/operations/marketingomnichanneltemplatecreaterequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.MarketingOmniChannelTemplateCreateResponse](../../models/operations/marketingomnichanneltemplatecreateresponse.md)>**


## createPush

Creates an push template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingPushTemplateCreateResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.createPush({
  marketingCreateTemplateRequestDto: {
    body: "<html><body>My template</body></html>",
    name: "My template",
    preheader: "My template preheader",
    subject: "My template subject",
    tags: [
      "totam",
      "suscipit",
      "quidem",
      "maxime",
    ],
  },
  xAccountId: "et",
}).then((res: MarketingPushTemplateCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.MarketingPushTemplateCreateRequest](../../models/operations/marketingpushtemplatecreaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


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
  fields: "esse",
  id: "3d689eee-9526-4f8d-986e-881ead4f0e10",
  page: "beatae",
  pageSize: "dolores",
  raw: false,
  syncToken: "enim",
  updatedAfter: "laboriosam",
  xAccountId: "velit",
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
  fields: "a",
  id: "94e29e97-3e92-42a5-ba15-be3e060807e2",
  page: "cum",
  pageSize: "iure",
  raw: false,
  syncToken: "necessitatibus",
  updatedAfter: "ratione",
  xAccountId: "laborum",
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
  fields: "distinctio",
  id: "8845f059-7a60-4ff2-a54a-31e94764a3e8",
  page: "eum",
  pageSize: "nemo",
  raw: false,
  syncToken: "recusandae",
  updatedAfter: "esse",
  xAccountId: "provident",
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
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.MarketingPushTemplatesGetResponse](../../models/operations/marketingpushtemplatesgetresponse.md)>**


## list

List templates

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingTemplatesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.marketingTemplates.list({
  xAccountId: "quis",
}).then((res: MarketingTemplatesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.MarketingTemplatesListRequest](../../models/operations/marketingtemplateslistrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


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
  fields: "eum",
  page: "reiciendis",
  pageSize: "provident",
  raw: false,
  syncToken: "aspernatur",
  updatedAfter: "ullam",
  xAccountId: "quasi",
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
  fields: "animi",
  page: "nostrum",
  pageSize: "mollitia",
  raw: false,
  syncToken: "provident",
  updatedAfter: "possimus",
  xAccountId: "animi",
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
  fields: "ex",
  page: "aliquid",
  pageSize: "accusantium",
  raw: false,
  syncToken: "repellat",
  updatedAfter: "doloribus",
  xAccountId: "ullam",
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
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.MarketingPushTemplatesListResponse](../../models/operations/marketingpushtemplateslistresponse.md)>**

