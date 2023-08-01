# connectSessions

### Available Operations

* [connectSessionsAuthenticate](#connectsessionsauthenticate) - Authenticate Session
* [connectSessionsCreate](#connectsessionscreate) - Create Session

## connectSessionsAuthenticate

Authenticate Session

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ConnectSessionsAuthenticateResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.connectSessions.connectSessionsAuthenticate({
  token: "tempora",
}).then((res: ConnectSessionsAuthenticateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.ConnectSessionAuthenticate](../../models/shared/connectsessionauthenticate.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ConnectSessionsAuthenticateResponse](../../models/operations/connectsessionsauthenticateresponse.md)>**


## connectSessionsCreate

Create Session

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { ConnectSessionsCreateResponse } from "StackOne/dist/sdk/models/operations";
import { ConnectSessionCreateCategories } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.connectSessions.connectSessionsCreate({
  categories: [
    ConnectSessionCreateCategories.Hris,
    ConnectSessionCreateCategories.Ats,
    ConnectSessionCreateCategories.Ats,
    ConnectSessionCreateCategories.Marketing,
  ],
  expiresIn: 4598.56,
  metadata: {},
  originOwnerId: "recusandae",
  originOwnerName: "aperiam",
  originUsername: "distinctio",
  provider: "quod",
}).then((res: ConnectSessionsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.ConnectSessionCreate](../../models/shared/connectsessioncreate.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ConnectSessionsCreateResponse](../../models/operations/connectsessionscreateresponse.md)>**

