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
    sourceValue: "bluetooth Extended",
    value: ApplicationStatusEnumValue.Active,
  },
  candidateId: "Cambridgeshire grey technology",
  interviewStageId: "deposit",
  jobId: "Northwest",
  locationId: "SUV quantify Polestar",
};
const xAccountId: string = "mobile";

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
  fields: "Northeast Hatchback Kia",
  id: "<ID>",
  page: "towards",
  pageSize: "Xenon Account",
  raw: false,
  syncToken: "Cambridgeshire",
  updatedAfter: "Rupiah",
  xAccountId: "Neon aside Dollar",
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
  fields: "transmit Architect",
  id: "<ID>",
  page: "oatmeal",
  pageSize: "up violet",
  raw: false,
  subResourceId: "navigate",
  syncToken: "weary South generating",
  updatedAfter: "male",
  xAccountId: "Solutions",
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
  fields: "Northeast Metal Canada",
  page: "Data Response West",
  pageSize: "boil primary synthesize",
  raw: false,
  syncToken: "hacking Paradigm",
  updatedAfter: "backing",
  xAccountId: "optimize itaque",
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
  fields: "Northeast deposit Southeast",
  id: "<ID>",
  page: "open busily upbeat",
  pageSize: "Investment Electronic East",
  raw: false,
  syncToken: "Rubber",
  updatedAfter: "payment Internal heuristic",
  xAccountId: "Toys East",
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
    sourceValue: "New Reactive dock",
    value: ApplicationStatusEnumValue.Lead,
  },
  candidateId: "redundant cheater Islands",
  interviewStageId: "withdrawal extend",
  jobId: "bifurcated",
  locationId: "silver immediately",
};
const id: string = "implement";
const xAccountId: string = "JBOD";

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

