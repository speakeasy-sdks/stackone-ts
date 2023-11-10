# MarketingTemplates
(*marketingTemplates*)

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
import { MarketingEmailTemplateCreateRequest } from "StackOne/dist/sdk/models/operations";
import { MarketingCreateTemplateRequestDto } from "StackOne/dist/sdk/models/shared";

(async() => {
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
    "[",
    "\"",
    "M",
    "y",
    " ",
    "T",
    "a",
    "g",
    " ",
    "1",
    "\"",
    ",",
    " ",
    "\"",
    "M",
    "y",
    " ",
    "T",
    "a",
    "g",
    " ",
    "2",
    "\"",
    "]",
  ],
};
const xAccountId: string = "string";

  const res = await sdk.marketingTemplates.createEmail(marketingCreateTemplateRequestDto, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                   | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `marketingCreateTemplateRequestDto`                                                                         | [shared.MarketingCreateTemplateRequestDto](../../../sdk/models/shared/marketingcreatetemplaterequestdto.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `xAccountId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The account identifier                                                                                      |
| `retries`                                                                                                   | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                    | :heavy_minus_sign:                                                                                          | Configuration to override the default retry behavior of the client.                                         |
| `config`                                                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                | :heavy_minus_sign:                                                                                          | Available config options for making requests.                                                               |


### Response

**Promise<[operations.MarketingEmailTemplateCreateResponse](../../sdk/models/operations/marketingemailtemplatecreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createOmnichannel

Creates an omni-channel template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingOmniChannelTemplateCreateRequest } from "StackOne/dist/sdk/models/operations";
import { MarketingCreateTemplateRequestDto } from "StackOne/dist/sdk/models/shared";

(async() => {
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
    "[",
    "\"",
    "M",
    "y",
    " ",
    "T",
    "a",
    "g",
    " ",
    "1",
    "\"",
    ",",
    " ",
    "\"",
    "M",
    "y",
    " ",
    "T",
    "a",
    "g",
    " ",
    "2",
    "\"",
    "]",
  ],
};
const xAccountId: string = "string";

  const res = await sdk.marketingTemplates.createOmnichannel(marketingCreateTemplateRequestDto, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                   | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `marketingCreateTemplateRequestDto`                                                                         | [shared.MarketingCreateTemplateRequestDto](../../../sdk/models/shared/marketingcreatetemplaterequestdto.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `xAccountId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The account identifier                                                                                      |
| `retries`                                                                                                   | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                    | :heavy_minus_sign:                                                                                          | Configuration to override the default retry behavior of the client.                                         |
| `config`                                                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                | :heavy_minus_sign:                                                                                          | Available config options for making requests.                                                               |


### Response

**Promise<[operations.MarketingOmniChannelTemplateCreateResponse](../../sdk/models/operations/marketingomnichanneltemplatecreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createPush

Creates an push template

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingPushTemplateCreateRequest } from "StackOne/dist/sdk/models/operations";
import { MarketingCreateTemplateRequestDto } from "StackOne/dist/sdk/models/shared";

(async() => {
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
    "[",
    "\"",
    "M",
    "y",
    " ",
    "T",
    "a",
    "g",
    " ",
    "1",
    "\"",
    ",",
    " ",
    "\"",
    "M",
    "y",
    " ",
    "T",
    "a",
    "g",
    " ",
    "2",
    "\"",
    "]",
  ],
};
const xAccountId: string = "string";

  const res = await sdk.marketingTemplates.createPush(marketingCreateTemplateRequestDto, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                   | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `marketingCreateTemplateRequestDto`                                                                         | [shared.MarketingCreateTemplateRequestDto](../../../sdk/models/shared/marketingcreatetemplaterequestdto.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `xAccountId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The account identifier                                                                                      |
| `retries`                                                                                                   | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                    | :heavy_minus_sign:                                                                                          | Configuration to override the default retry behavior of the client.                                         |
| `config`                                                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                | :heavy_minus_sign:                                                                                          | Available config options for making requests.                                                               |


### Response

**Promise<[operations.MarketingPushTemplateCreateResponse](../../sdk/models/operations/marketingpushtemplatecreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getEmail

Get email template

### Example Usage

```typescript
import { StackOne } from "StackOne";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });

  const res = await sdk.marketingTemplates.getEmail({
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.MarketingEmailTemplatesGetRequest](../../sdk/models/operations/marketingemailtemplatesgetrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.MarketingEmailTemplatesGetResponse](../../sdk/models/operations/marketingemailtemplatesgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getOmnichannel

Get omni-channel template

### Example Usage

```typescript
import { StackOne } from "StackOne";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });

  const res = await sdk.marketingTemplates.getOmnichannel({
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.MarketingOmniChannelTemplatesGetRequest](../../sdk/models/operations/marketingomnichanneltemplatesgetrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `retries`                                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                           | Configuration to override the default retry behavior of the client.                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.MarketingOmniChannelTemplatesGetResponse](../../sdk/models/operations/marketingomnichanneltemplatesgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPush

Get push template

### Example Usage

```typescript
import { StackOne } from "StackOne";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });

  const res = await sdk.marketingTemplates.getPush({
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.MarketingPushTemplatesGetRequest](../../sdk/models/operations/marketingpushtemplatesgetrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.MarketingPushTemplatesGetResponse](../../sdk/models/operations/marketingpushtemplatesgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## list

List templates

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { MarketingTemplatesListRequest } from "StackOne/dist/sdk/models/operations";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });
const xAccountId: string = "string";

  const res = await sdk.marketingTemplates.list(xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `xAccountId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The account identifier                                              |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.MarketingTemplatesListResponse](../../sdk/models/operations/marketingtemplateslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listEmail

List email templates

### Example Usage

```typescript
import { StackOne } from "StackOne";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });

  const res = await sdk.marketingTemplates.listEmail({
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.MarketingEmailTemplatesListRequest](../../sdk/models/operations/marketingemailtemplateslistrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.MarketingEmailTemplatesListResponse](../../sdk/models/operations/marketingemailtemplateslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listOmnichannel

List omni-channel templates

### Example Usage

```typescript
import { StackOne } from "StackOne";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });

  const res = await sdk.marketingTemplates.listOmnichannel({
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.MarketingOmniChannelTemplatesListRequest](../../sdk/models/operations/marketingomnichanneltemplateslistrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                       | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.MarketingOmniChannelTemplatesListResponse](../../sdk/models/operations/marketingomnichanneltemplateslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listPush

List push templates

### Example Usage

```typescript
import { StackOne } from "StackOne";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });

  const res = await sdk.marketingTemplates.listPush({
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.MarketingPushTemplatesListRequest](../../sdk/models/operations/marketingpushtemplateslistrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.MarketingPushTemplatesListResponse](../../sdk/models/operations/marketingpushtemplateslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
