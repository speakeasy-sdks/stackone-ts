# atsApplications

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
    sourceValue: "enim",
    value: ApplicationStatusEnumValue.Active,
  },
  candidateId: "quo",
  interviewStageId: "sequi",
  jobId: "tenetur",
  locationId: "ipsam",
};
const xAccountId: string = "id";

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
  fields: "possimus",
  id: "019da1ff-e78f-4097-b007-4f15471b5e6e",
  page: "quae",
  pageSize: "ipsum",
  raw: false,
  syncToken: "quidem",
  updatedAfter: "molestias",
  xAccountId: "excepturi",
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
  fields: "pariatur",
  id: "488e1e91-e450-4ad2-abd4-4269802d502a",
  page: "excepturi",
  pageSize: "tempora",
  raw: false,
  subResourceId: "facilis",
  syncToken: "tempore",
  updatedAfter: "labore",
  xAccountId: "delectus",
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
  fields: "eum",
  page: "non",
  pageSize: "eligendi",
  raw: false,
  syncToken: "sint",
  updatedAfter: "aliquid",
  xAccountId: "provident",
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
  fields: "necessitatibus",
  id: "9a3efa77-dfb1-44cd-a6ae-395efb9ba88f",
  page: "amet",
  pageSize: "deserunt",
  raw: false,
  syncToken: "nisi",
  updatedAfter: "vel",
  xAccountId: "natus",
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
    sourceValue: "omnis",
    value: ApplicationStatusEnumValue.Hired,
  },
  candidateId: "perferendis",
  interviewStageId: "nihil",
  jobId: "magnam",
  locationId: "distinctio",
};
const id: string = "id";
const xAccountId: string = "labore";

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

