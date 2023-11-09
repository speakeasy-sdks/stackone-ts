# ATSApplications
(*atsApplications*)

### Available Operations

* [create](#create) - Post Application (early access)
* [get](#get) - Get Application
* [getOffers](#getoffers) - Get Application Offer
* [list](#list) - List Applications
* [listOffers](#listoffers) - List Application Offers
* [update](#update) - Patch Application (early access)

## create

Post Application (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ApplicationPostRequest } from "StackOne/dist/sdk/models/operations";
import { ApplicationStatusEnum, AtsCreateApplicationRequestDto, Value } from "StackOne/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });
const atsCreateApplicationRequestDto: AtsCreateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "string",
    value: Value.Hired,
  },
  candidateId: "string",
  interviewStageId: "string",
  jobId: "string",
  locationId: "string",
};
const xAccountId: string = "string";

  const res = await sdk.atsApplications.create(atsCreateApplicationRequestDto, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                             | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `atsCreateApplicationRequestDto`                                                                      | [shared.AtsCreateApplicationRequestDto](../../../sdk/models/shared/atscreateapplicationrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
| `retries`                                                                                             | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                              | :heavy_minus_sign:                                                                                    | Configuration to override the default retry behavior of the client.                                   |
| `config`                                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                          | :heavy_minus_sign:                                                                                    | Available config options for making requests.                                                         |


### Response

**Promise<[operations.ApplicationPostResponse](../../sdk/models/operations/applicationpostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get Application

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

  const res = await sdk.atsApplications.get({
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ApplicationsGetRequest](../../sdk/models/operations/applicationsgetrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ApplicationsGetResponse](../../sdk/models/operations/applicationsgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getOffers

Get Application Offer

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

  const res = await sdk.atsApplications.getOffers({
    id: "<ID>",
    subResourceId: "string",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ApplicationsOffersGetRequest](../../sdk/models/operations/applicationsoffersgetrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ApplicationsOffersGetResponse](../../sdk/models/operations/applicationsoffersgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## list

List Applications

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

  const res = await sdk.atsApplications.list({
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ApplicationsListRequest](../../sdk/models/operations/applicationslistrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ApplicationsListResponse](../../sdk/models/operations/applicationslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listOffers

List Application Offers

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

  const res = await sdk.atsApplications.listOffers({
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ApplicationsOffersListRequest](../../sdk/models/operations/applicationsofferslistrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ApplicationsOffersListResponse](../../sdk/models/operations/applicationsofferslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Patch Application (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ApplicationPatchRequest } from "StackOne/dist/sdk/models/operations";
import { ApplicationStatusEnum, AtsUpdateApplicationRequestDto, Value } from "StackOne/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });
const atsUpdateApplicationRequestDto: AtsUpdateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "string",
    value: Value.UnmappedValue,
  },
};
const id: string = "string";
const xAccountId: string = "string";

  const res = await sdk.atsApplications.update(atsUpdateApplicationRequestDto, id, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                             | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `atsUpdateApplicationRequestDto`                                                                      | [shared.AtsUpdateApplicationRequestDto](../../../sdk/models/shared/atsupdateapplicationrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
| `retries`                                                                                             | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                              | :heavy_minus_sign:                                                                                    | Configuration to override the default retry behavior of the client.                                   |
| `config`                                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                          | :heavy_minus_sign:                                                                                    | Available config options for making requests.                                                         |


### Response

**Promise<[operations.ApplicationPatchResponse](../../sdk/models/operations/applicationpatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
