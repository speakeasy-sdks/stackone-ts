# atsCandidates

### Available Operations

* [create](#create) - Post Candidate (early access)
* [get](#get) - Get Candidate
* [list](#list) - List Candidates
* [update](#update) - Patch Candidate (early access)

## create

Post Candidate (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsCandidatePostRequest, AtsCandidatePostResponse } from "StackOne/dist/sdk/models/operations";
import { AtsCreateCandidateRequestDto, CandidateEmail } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const atsCreateCandidateRequestDto: AtsCreateCandidateRequestDto = {
  applicationIds: [
    "maiores",
    "incidunt",
    "sed",
  ],
  company: "Gerlach - Treutel",
  emails: [
    {
      type: "ea",
      value: "occaecati",
    },
  ],
  firstName: "Katrina",
  lastName: "Wolf",
  name: "Rhonda Klocko",
  phone: "385-732-3850",
  title: "Miss",
};
const xAccountId: string = "error";

sdk.ats.candidates.create(atsCreateCandidateRequestDto, xAccountId).then((res: AtsCandidatePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `atsCreateCandidateRequestDto`                                                             | [shared.AtsCreateCandidateRequestDto](../../models/shared/atscreatecandidaterequestdto.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `xAccountId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | The account identifier                                                                     |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsCandidatePostResponse](../../models/operations/atscandidatepostresponse.md)>**


## get

Get Candidate

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsCandidatesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.ats.candidates.get({
  fields: "veniam",
  id: "5efd20e4-57e1-4858-b6a8-9fbe3a5aa8e4",
  page: "atque",
  pageSize: "fugit",
  raw: false,
  syncToken: "ut",
  updatedAfter: "fugiat",
  xAccountId: "voluptatem",
}).then((res: AtsCandidatesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsCandidatesGetRequest](../../models/operations/atscandidatesgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsCandidatesGetResponse](../../models/operations/atscandidatesgetresponse.md)>**


## list

List Candidates

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsCandidatesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.ats.candidates.list({
  fields: "culpa",
  page: "expedita",
  pageSize: "magnam",
  raw: false,
  syncToken: "consequatur",
  updatedAfter: "esse",
  xAccountId: "ipsam",
}).then((res: AtsCandidatesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsCandidatesListRequest](../../models/operations/atscandidateslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsCandidatesListResponse](../../models/operations/atscandidateslistresponse.md)>**


## update

Patch Candidate (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsCandidatePatchRequest, AtsCandidatePatchResponse } from "StackOne/dist/sdk/models/operations";
import { AtsUpdateCandidatesRequestDto, CandidateEmail } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const atsUpdateCandidatesRequestDto: AtsUpdateCandidatesRequestDto = {
  applicationIds: [
    "voluptatum",
  ],
  company: "Walker - Hessel",
  emails: [
    {
      type: "blanditiis",
      value: "ex",
    },
  ],
  firstName: "Candida",
  lastName: "Bailey",
  name: "Bernice Ullrich II",
  phone: "361.252.6567 x93026",
  title: "Ms.",
};
const id: string = "unde";
const xAccountId: string = "reiciendis";

sdk.ats.candidates.update(atsUpdateCandidatesRequestDto, id, xAccountId).then((res: AtsCandidatePatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `atsUpdateCandidatesRequestDto`                                                              | [shared.AtsUpdateCandidatesRequestDto](../../models/shared/atsupdatecandidatesrequestdto.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `xAccountId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The account identifier                                                                       |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsCandidatePatchResponse](../../models/operations/atscandidatepatchresponse.md)>**

