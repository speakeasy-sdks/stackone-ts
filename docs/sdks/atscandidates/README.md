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
import { AtsCandidatePostResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsCandidates.create({
  atsCreateCandidateRequestDto: {
    applicationIds: [
      "eius",
      "maxime",
      "deleniti",
      "facilis",
    ],
    company: "Bradtke - Bradtke",
    emails: [
      {
        type: "ullam",
        value: "expedita",
      },
      {
        type: "nihil",
        value: "repellat",
      },
      {
        type: "quibusdam",
        value: "sed",
      },
      {
        type: "saepe",
        value: "pariatur",
      },
    ],
    firstName: "Alia",
    lastName: "Crooks",
    name: "Miss Nick Cummerata",
    phone: "(845) 340-0963 x44708",
    title: "Mrs.",
  },
  xAccountId: "voluptatibus",
}).then((res: AtsCandidatePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsCandidatePostRequest](../../models/operations/atscandidatepostrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


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
    password: "",
    username: "",
  },
});

sdk.atsCandidates.get({
  fields: "perferendis",
  id: "d30c5fbb-2587-4053-a02c-73d5fe9b90c2",
  page: "blanditiis",
  pageSize: "error",
  raw: false,
  syncToken: "eaque",
  updatedAfter: "occaecati",
  xAccountId: "rerum",
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
    password: "",
    username: "",
  },
});

sdk.atsCandidates.list({
  fields: "adipisci",
  page: "asperiores",
  pageSize: "earum",
  raw: false,
  syncToken: "modi",
  updatedAfter: "iste",
  xAccountId: "dolorum",
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
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsCandidatesListResponse](../../models/operations/atscandidateslistresponse.md)>**


## update

Patch Candidate (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsCandidatePatchResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsCandidates.update({
  atsUpdateCandidatesRequestDto: {
    applicationIds: [
      "pariatur",
      "provident",
      "nobis",
    ],
    company: "Wintheiser, Hahn and Luettgen",
    emails: [
      {
        type: "dolorem",
        value: "dolorem",
      },
      {
        type: "dolor",
        value: "qui",
      },
    ],
    firstName: "Dagmar",
    lastName: "Welch",
    name: "Felipe Klein",
    phone: "720.204.4386",
    title: "Dr.",
  },
  id: "69280d1b-a77a-489e-bf73-7ae4203ce5e6",
  xAccountId: "deserunt",
}).then((res: AtsCandidatePatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsCandidatePatchRequest](../../models/operations/atscandidatepatchrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsCandidatePatchResponse](../../models/operations/atscandidatepatchresponse.md)>**

