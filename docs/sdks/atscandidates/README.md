# AtsCandidates
(*ats.candidates*)

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
    "voluptas",
  ],
  company: "Bradtke - Hoppe",
  emails: [
    {
      type: "sapiente",
      value: "debitis",
    },
  ],
  firstName: "Antonina",
  lastName: "Wisoky",
  name: "Naomi Wuckert",
  phone: "(482) 555-9224 x9402",
  title: "Dr.",
};
const xAccountId: string = "praesentium";

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
  fields: "facilis",
  id: "445e80ca-55ef-4d20-a457-e1858b6a89fb",
  page: "debitis",
  pageSize: "neque",
  raw: false,
  syncToken: "dolorum",
  updatedAfter: "nostrum",
  xAccountId: "officia",
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
  fields: "dolorum",
  page: "corrupti",
  pageSize: "accusamus",
  raw: false,
  syncToken: "tempora",
  updatedAfter: "atque",
  xAccountId: "fugit",
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
    "ut",
  ],
  company: "Bartell, Nicolas and Quitzon",
  emails: [
    {
      type: "magnam",
      value: "consequatur",
    },
  ],
  firstName: "Jaiden",
  lastName: "Hintz",
  name: "Nora Lynch",
  phone: "(641) 243-9602",
  title: "Dr.",
};
const id: string = "dolorem";
const xAccountId: string = "harum";

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

