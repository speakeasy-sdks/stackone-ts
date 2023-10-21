# Contacts
(*contacts*)

### Available Operations

* [create](#create) - Post Contact (early access)
* [get](#get) - Get Contact
* [list](#list) - List Contacts
* [update](#update) - Patch Contact (early access)

## create

Post Contact (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { CrmContactPostRequest } from "StackOne/dist/sdk/models/operations";
import { CrmCreateContactRequestDto } from "StackOne/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });
const crmCreateContactRequestDto: CrmCreateContactRequestDto = {
  accountIds: [
    "string",
  ],
  dealIds: [
    "string",
  ],
  emails: [
    "string",
  ],
  firstName: "Jed",
  lastName: "Kuhn",
  phoneNumbers: [
    "string",
  ],
};
const xAccountId: string = "string";

  const res = await sdk.contacts.create(crmCreateContactRequestDto, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `crmCreateContactRequestDto`                                                           | [shared.CrmCreateContactRequestDto](../../models/shared/crmcreatecontactrequestdto.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `xAccountId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | The account identifier                                                                 |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CrmContactPostResponse](../../models/operations/crmcontactpostresponse.md)>**


## get

Get Contact

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

  const res = await sdk.contacts.get({
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CrmContactsGetRequest](../../models/operations/crmcontactsgetrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CrmContactsGetResponse](../../models/operations/crmcontactsgetresponse.md)>**


## list

List Contacts

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

  const res = await sdk.contacts.list({
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ContactsListRequest](../../models/operations/contactslistrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ContactsListResponse](../../models/operations/contactslistresponse.md)>**


## update

Patch Contact (early access)

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { CrmContactPatchRequest } from "StackOne/dist/sdk/models/operations";
import { CrmUpdateContactRequestDto } from "StackOne/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });
const crmUpdateContactRequestDto: CrmUpdateContactRequestDto = {
  accountIds: [
    "string",
  ],
  dealIds: [
    "string",
  ],
  emails: [
    "string",
  ],
  phoneNumbers: [
    "string",
  ],
};
const id: string = "string";
const xAccountId: string = "string";

  const res = await sdk.contacts.update(crmUpdateContactRequestDto, id, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `crmUpdateContactRequestDto`                                                           | [shared.CrmUpdateContactRequestDto](../../models/shared/crmupdatecontactrequestdto.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `xAccountId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | The account identifier                                                                 |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CrmContactPatchResponse](../../models/operations/crmcontactpatchresponse.md)>**

