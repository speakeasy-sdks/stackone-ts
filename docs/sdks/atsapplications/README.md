# ATSApplications

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
import { ApplicationPostRequest, ApplicationPostResponse } from "StackOne/dist/sdk/models/operations";
import {
  ApplicationStatusEnum,
  ApplicationStatusEnumValue,
  AtsCreateApplicationRequestDto,
} from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const atsCreateApplicationRequestDto: AtsCreateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "commodi",
    value: ApplicationStatusEnumValue.Hired,
  },
  candidateId: "molestiae",
  interviewStageId: "velit",
  jobId: "error",
  locationId: "quia",
};
const xAccountId: string = "quis";

sdk.atsApplications.create(atsCreateApplicationRequestDto, xAccountId).then((res: ApplicationPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `atsCreateApplicationRequestDto`                                                               | [shared.AtsCreateApplicationRequestDto](../../models/shared/atscreateapplicationrequestdto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `xAccountId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The account identifier                                                                         |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ApplicationPostResponse](../../models/operations/applicationpostresponse.md)>**


## get

Get Application

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ApplicationsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsApplications.get({
  fields: "vitae",
  id: "aa52c3f5-ad01-49da-9ffe-78f097b0074f",
  page: "dicta",
  pageSize: "corporis",
  raw: false,
  syncToken: "dolore",
  updatedAfter: "iusto",
  xAccountId: "dicta",
}).then((res: ApplicationsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ApplicationsGetRequest](../../models/operations/applicationsgetrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ApplicationsGetResponse](../../models/operations/applicationsgetresponse.md)>**


## getOffers

Get Application Offer

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ApplicationsOffersGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsApplications.getOffers({
  fields: "harum",
  id: "5e6e13b9-9d48-48e1-a91e-450ad2abd442",
  page: "aliquid",
  pageSize: "cupiditate",
  raw: false,
  subResourceId: "quos",
  syncToken: "perferendis",
  updatedAfter: "magni",
  xAccountId: "assumenda",
}).then((res: ApplicationsOffersGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ApplicationsOffersGetRequest](../../models/operations/applicationsoffersgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ApplicationsOffersGetResponse](../../models/operations/applicationsoffersgetresponse.md)>**


## list

List Applications

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ApplicationsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsApplications.list({
  fields: "ipsam",
  page: "alias",
  pageSize: "fugit",
  raw: false,
  syncToken: "dolorum",
  updatedAfter: "excepturi",
  xAccountId: "tempora",
}).then((res: ApplicationsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ApplicationsListRequest](../../models/operations/applicationslistrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ApplicationsListResponse](../../models/operations/applicationslistresponse.md)>**


## listOffers

List Application Offers

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ApplicationsOffersListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.atsApplications.listOffers({
  fields: "facilis",
  id: "b4f63c96-9e9a-43ef-a77d-fb14cd66ae39",
  page: "enim",
  pageSize: "accusamus",
  raw: false,
  syncToken: "delectus",
  updatedAfter: "quidem",
  xAccountId: "provident",
}).then((res: ApplicationsOffersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ApplicationsOffersListRequest](../../models/operations/applicationsofferslistrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ApplicationsOffersListResponse](../../models/operations/applicationsofferslistresponse.md)>**


## update

Patch Application (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ApplicationPatchRequest, ApplicationPatchResponse } from "StackOne/dist/sdk/models/operations";
import {
  ApplicationStatusEnum,
  ApplicationStatusEnumValue,
  AtsUpdateApplicationRequestDto,
} from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const atsUpdateApplicationRequestDto: AtsUpdateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "nam",
    value: ApplicationStatusEnumValue.Lead,
  },
  candidateId: "blanditiis",
  interviewStageId: "deleniti",
  jobId: "sapiente",
  locationId: "amet",
};
const id: string = "deserunt";
const xAccountId: string = "nisi";

sdk.atsApplications.update(atsUpdateApplicationRequestDto, id, xAccountId).then((res: ApplicationPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `atsUpdateApplicationRequestDto`                                                               | [shared.AtsUpdateApplicationRequestDto](../../models/shared/atsupdateapplicationrequestdto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `xAccountId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The account identifier                                                                         |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ApplicationPatchResponse](../../models/operations/applicationpatchresponse.md)>**

