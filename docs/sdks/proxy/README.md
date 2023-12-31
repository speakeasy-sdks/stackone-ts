# Proxy
(*proxy*)

### Available Operations

* [create](#create) - Proxy Request

## create

Proxy Request

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ProxyRequestPostRequest } from "StackOne/dist/sdk/models/operations";
import { Body, Headers, Method, ProxyRequestBody } from "StackOne/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "BASE_64_ENCODED(API_KEY)",
      username: "YOUR_USERNAME",
    },
  });
const proxyRequestBody: ProxyRequestBody = {
  body: {},
  headers: {},
  path: "/employees/directory",
  url: "https://api.sample-integration.com/v1",
};
const xAccountId: string = "string";

  const res = await sdk.proxy.create(proxyRequestBody, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `proxyRequestBody`                                                        | [shared.ProxyRequestBody](../../../sdk/models/shared/proxyrequestbody.md) | :heavy_check_mark:                                                        | The request body                                                          |
| `xAccountId`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | The account identifier                                                    |
| `retries`                                                                 | [utils.RetryConfig](../../internal/utils/retryconfig.md)                  | :heavy_minus_sign:                                                        | Configuration to override the default retry behavior of the client.       |
| `config`                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)              | :heavy_minus_sign:                                                        | Available config options for making requests.                             |


### Response

**Promise<[operations.ProxyRequestPostResponse](../../sdk/models/operations/proxyrequestpostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
