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
    "labore",
    "labore",
    "suscipit",
  ],
  company: "Rohan - Keebler",
  emails: [
    {
      type: "aspernatur",
      value: "architecto",
    },
    {
      type: "magnam",
      value: "et",
    },
    {
      type: "excepturi",
      value: "ullam",
    },
    {
      type: "provident",
      value: "quos",
    },
  ],
  firstName: "Kiley",
  lastName: "Bartoletti",
  name: "Abel O'Hara",
  phone: "913.249.8285",
  title: "Miss",
};
const xAccountId: string = "in";

sdk.atsCandidates.create(atsCreateCandidateRequestDto, xAccountId).then((res: AtsCandidatePostResponse) => {
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

sdk.atsCandidates.get({
  fields: "architecto",
  id: "1e5b7fd2-ed02-4892-9cdd-c692601fb576",
  page: "nam",
  pageSize: "eaque",
  raw: false,
  syncToken: "pariatur",
  updatedAfter: "nemo",
  xAccountId: "voluptatibus",
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

sdk.atsCandidates.list({
  fields: "perferendis",
  page: "fugiat",
  pageSize: "amet",
  raw: false,
  syncToken: "aut",
  updatedAfter: "cumque",
  xAccountId: "corporis",
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
    "libero",
    "nobis",
    "dolores",
    "quis",
  ],
  company: "Kuhn - Becker",
  emails: [
    {
      type: "nesciunt",
      value: "eos",
    },
    {
      type: "perferendis",
      value: "dolores",
    },
  ],
  firstName: "Peggie",
  lastName: "Kohler",
  name: "Eula Hegmann",
  phone: "(750) 815-6056 x2992",
  title: "Miss",
};
const id: string = "dolorum";
const xAccountId: string = "deleniti";

sdk.atsCandidates.update(atsUpdateCandidatesRequestDto, id, xAccountId).then((res: AtsCandidatePatchResponse) => {
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

