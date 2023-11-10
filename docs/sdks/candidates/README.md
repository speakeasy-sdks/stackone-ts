# Candidates
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
import { AtsCandidatePostRequest } from "StackOne/dist/sdk/models/operations";
import { AtsCreateCandidateRequestDto, CandidateEmail } from "StackOne/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });
const atsCreateCandidateRequestDto: AtsCreateCandidateRequestDto = {
  applicationIds: [
    "string",
  ],
  emails: [
    {
      type: "string",
      value: "string",
    },
  ],
  firstName: "Jed",
  lastName: "Kuhn",
  name: "string",
  title: "string",
};
const xAccountId: string = "string";

  const res = await sdk.ats.candidates.create(atsCreateCandidateRequestDto, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                         | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `atsCreateCandidateRequestDto`                                                                    | [shared.AtsCreateCandidateRequestDto](../../../sdk/models/shared/atscreatecandidaterequestdto.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `xAccountId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier                                                                            |
| `retries`                                                                                         | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                          | :heavy_minus_sign:                                                                                | Configuration to override the default retry behavior of the client.                               |
| `config`                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                      | :heavy_minus_sign:                                                                                | Available config options for making requests.                                                     |


### Response

**Promise<[operations.AtsCandidatePostResponse](../../sdk/models/operations/atscandidatepostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get Candidate

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

  const res = await sdk.ats.candidates.get({
    id: "<ID>",
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
| `request`                                                                                    | [operations.AtsCandidatesGetRequest](../../sdk/models/operations/atscandidatesgetrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsCandidatesGetResponse](../../sdk/models/operations/atscandidatesgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## list

List Candidates

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

  const res = await sdk.ats.candidates.list({
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AtsCandidatesListRequest](../../sdk/models/operations/atscandidateslistrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AtsCandidatesListResponse](../../sdk/models/operations/atscandidateslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Patch Candidate (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { AtsCandidatePatchRequest } from "StackOne/dist/sdk/models/operations";
import { AtsUpdateCandidatesRequestDto, CandidateEmail } from "StackOne/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });
const atsUpdateCandidatesRequestDto: AtsUpdateCandidatesRequestDto = {
  applicationIds: [
    "string",
  ],
  emails: [
    {
      type: "string",
      value: "string",
    },
  ],
};
const id: string = "string";
const xAccountId: string = "string";

  const res = await sdk.ats.candidates.update(atsUpdateCandidatesRequestDto, id, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                           | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `atsUpdateCandidatesRequestDto`                                                                     | [shared.AtsUpdateCandidatesRequestDto](../../../sdk/models/shared/atsupdatecandidatesrequestdto.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `xAccountId`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The account identifier                                                                              |
| `retries`                                                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                            | :heavy_minus_sign:                                                                                  | Configuration to override the default retry behavior of the client.                                 |
| `config`                                                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                        | :heavy_minus_sign:                                                                                  | Available config options for making requests.                                                       |


### Response

**Promise<[operations.AtsCandidatePatchResponse](../../sdk/models/operations/atscandidatepatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
