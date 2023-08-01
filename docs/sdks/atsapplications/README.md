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
    password: "",
    username: "",
  },
});
const atsCreateApplicationRequestDto: AtsCreateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "laborum",
    value: ApplicationStatusEnumValue.Lead,
  },
  candidateId: "enim",
  interviewStageId: "odit",
  jobId: "quo",
  locationId: "sequi",
};
const xAccountId: string = "tenetur";

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
    password: "",
    username: "",
  },
});

sdk.atsApplications.get({
  fields: "ipsam",
  id: "ad019da1-ffe7-48f0-97b0-074f15471b5e",
  page: "commodi",
  pageSize: "repudiandae",
  raw: false,
  syncToken: "quae",
  updatedAfter: "ipsum",
  xAccountId: "quidem",
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
    password: "",
    username: "",
  },
});

sdk.atsApplications.getOffers({
  fields: "molestias",
  id: "9d488e1e-91e4-450a-92ab-d44269802d50",
  page: "fugit",
  pageSize: "dolorum",
  raw: false,
  subResourceId: "excepturi",
  syncToken: "tempora",
  updatedAfter: "facilis",
  xAccountId: "tempore",
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
    password: "",
    username: "",
  },
});

sdk.atsApplications.list({
  fields: "labore",
  page: "delectus",
  pageSize: "eum",
  raw: false,
  syncToken: "non",
  updatedAfter: "eligendi",
  xAccountId: "sint",
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
    password: "",
    username: "",
  },
});

sdk.atsApplications.listOffers({
  fields: "aliquid",
  id: "9e9a3efa-77df-4b14-8d66-ae395efb9ba8",
  page: "deleniti",
  pageSize: "sapiente",
  raw: false,
  syncToken: "amet",
  updatedAfter: "deserunt",
  xAccountId: "nisi",
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
    password: "",
    username: "",
  },
});
const atsUpdateApplicationRequestDto: AtsUpdateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "vel",
    value: ApplicationStatusEnumValue.Lead,
  },
  candidateId: "omnis",
  interviewStageId: "molestiae",
  jobId: "perferendis",
  locationId: "nihil",
};
const id: string = "magnam";
const xAccountId: string = "distinctio";

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
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ApplicationPatchResponse](../../models/operations/applicationpatchresponse.md)>**

