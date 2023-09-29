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
import { CrmContactPostRequest, CrmContactPostResponse } from "StackOne/dist/sdk/models/operations";
import { CrmCreateContactRequestDto } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const crmCreateContactRequestDto: CrmCreateContactRequestDto = {
  accountIds: [
    "online",
  ],
  companyName: "Stokes - Johnson",
  dealIds: [
    "innovative",
  ],
  emails: [
    "blue",
  ],
  firstName: "Zetta",
  lastName: "Schinner",
  phoneNumbers: [
    "abnormally",
  ],
};
const xAccountId: string = "deposit";

sdk.contacts.create(crmCreateContactRequestDto, xAccountId).then((res: CrmContactPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CrmContactsGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.contacts.get({
  fields: "Northeast Hatchback Kia",
  id: "<ID>",
  page: "towards",
  pageSize: "Xenon Account",
  raw: false,
  syncToken: "Cambridgeshire",
  updatedAfter: "Rupiah",
  xAccountId: "Neon aside Dollar",
}).then((res: CrmContactsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { ContactsListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.contacts.list({
  fields: "Northeast Metal Canada",
  page: "Data Response West",
  pageSize: "boil primary synthesize",
  raw: false,
  syncToken: "hacking Paradigm",
  updatedAfter: "backing",
  xAccountId: "optimize itaque",
}).then((res: ContactsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CrmContactPatchRequest, CrmContactPatchResponse } from "StackOne/dist/sdk/models/operations";
import { CrmUpdateContactRequestDto } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const crmUpdateContactRequestDto: CrmUpdateContactRequestDto = {
  accountIds: [
    "Van",
  ],
  companyName: "Hegmann LLC",
  dealIds: [
    "dock",
  ],
  emails: [
    "Quality",
  ],
  firstName: "Jeffry",
  lastName: "Kihn",
  phoneNumbers: [
    "cheater",
  ],
};
const id: string = "Islands";
const xAccountId: string = "online";

sdk.contacts.update(crmUpdateContactRequestDto, id, xAccountId).then((res: CrmContactPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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

