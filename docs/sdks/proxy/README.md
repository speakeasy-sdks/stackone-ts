# proxy

### Available Operations

* [create](#create) - Proxy Request

## create

Proxy Request

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ProxyRequestPostRequest, ProxyRequestPostResponse } from "StackOne/dist/sdk/models/operations";
import {
  ProxyRequestBody,
  ProxyRequestBodyBody,
  ProxyRequestBodyHeaders,
  ProxyRequestBodyMethod,
} from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});
const proxyRequestBody: ProxyRequestBody = {
  body: {},
  headers: {},
  method: ProxyRequestBodyMethod.Post,
  path: "/employees/directory",
  url: "https://api.sample-integration.com/v1",
};
const xAccountId: string = "voluptatem";

sdk.proxy.create(proxyRequestBody, xAccountId).then((res: ProxyRequestPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `proxyRequestBody`                                                 | [shared.ProxyRequestBody](../../models/shared/proxyrequestbody.md) | :heavy_check_mark:                                                 | The request body                                                   |
| `xAccountId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | The account identifier                                             |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.ProxyRequestPostResponse](../../models/operations/proxyrequestpostresponse.md)>**

