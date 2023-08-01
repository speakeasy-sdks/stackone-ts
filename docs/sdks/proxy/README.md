# proxy

### Available Operations

* [create](#create) - Proxy Request

## create

Proxy Request

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ProxyRequestPostResponse } from "StackOne/dist/sdk/models/operations";
import { ProxyRequestBodyMethod } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.proxy.create({
  proxyRequestBody: {
    body: {},
    headers: {},
    method: ProxyRequestBodyMethod.Put,
    path: "/employees/directory",
    url: "https://api.sample-integration.com/v1",
  },
  xAccountId: "nam",
}).then((res: ProxyRequestPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ProxyRequestPostRequest](../../models/operations/proxyrequestpostrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ProxyRequestPostResponse](../../models/operations/proxyrequestpostresponse.md)>**

