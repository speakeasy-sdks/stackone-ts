# hrisCompanies

### Available Operations

* [get](#get) - Get Company
* [list](#list) - List Companies

## get

Get Company

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisCompaniesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.hrisCompanies.get({
  fields: "consequuntur",
  id: "1aa6f1e6-74bd-4b04-b157-56082d68ea19",
  page: "tenetur",
  pageSize: "quasi",
  raw: false,
  syncToken: "at",
  updatedAfter: "et",
  xAccountId: "voluptate",
}).then((res: HrisCompaniesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.HrisCompaniesGetRequest](../../models/operations/hriscompaniesgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.HrisCompaniesGetResponse](../../models/operations/hriscompaniesgetresponse.md)>**


## list

List Companies

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisCompaniesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.hrisCompanies.list({
  fields: "ipsa",
  page: "minima",
  pageSize: "veritatis",
  raw: false,
  syncToken: "consectetur",
  updatedAfter: "adipisci",
  xAccountId: "iste",
}).then((res: HrisCompaniesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.HrisCompaniesListRequest](../../models/operations/hriscompanieslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisCompaniesListResponse](../../models/operations/hriscompanieslistresponse.md)>**

