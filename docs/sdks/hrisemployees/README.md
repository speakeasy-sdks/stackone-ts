# HRISEmployees

### Available Operations

* [create](#create) - Creates an employee
* [get](#get) - Get Employee
* [list](#list) - List Employees

## create

Creates an employee

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { EmployeePostRequest, EmployeePostResponse } from "StackOne/dist/sdk/models/operations";
import {
  HrisCreateEmployeeRequestDto,
  HrisCreateEmployeeRequestDtoEmploymentStatus,
  HrisCreateEmployeeRequestDtoEmploymentType,
  HrisCreateEmployeeRequestDtoEthnicity,
  HrisCreateEmployeeRequestDtoGender,
  HrisCreateEmployeeRequestDtoMaritalStatus,
} from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const hrisCreateEmployeeRequestDto: HrisCreateEmployeeRequestDto = {
  avatar: "https://example.com/avatar.png",
  avatarUrl: "https://example.com/avatar.png",
  birthday: "2023-06-14T00:00:00Z",
  companyName: "Example Corp",
  dateOfBirth: "1990-01-01",
  department: "Physics",
  displayName: "Sir Issac Newton",
  employmentStatus: HrisCreateEmployeeRequestDtoEmploymentStatus.Pending,
  employmentType: HrisCreateEmployeeRequestDtoEmploymentType.Temporary,
  ethnicity: HrisCreateEmployeeRequestDtoEthnicity.NativeHawaiianOrPacificIslander,
  firstName: "Issac",
  gender: HrisCreateEmployeeRequestDtoGender.NonBinary,
  hireDate: "2022-01-01",
  id: "1687-3",
  jobTitle: "Physicist",
  lastName: "Newton",
  managerId: "67890",
  maritalStatus: HrisCreateEmployeeRequestDtoMaritalStatus.UnmappedValue,
  name: "Issac Newton",
  personalEmail: "isaac.newton@example.com",
  personalPhoneNumber: "+1234567890",
  startDate: "2022-01-01",
  tenure: "2",
  terminationDate: "2023-06-14T00:00:00Z",
  workAnniversary: "2022-06-14T00:00:00Z",
  workEmail: "newton@example.com",
  workPhoneNumber: "+1234567890",
};
const xAccountId: string = "dolores";

sdk.hrisEmployees.create(hrisCreateEmployeeRequestDto, xAccountId).then((res: EmployeePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `hrisCreateEmployeeRequestDto`                                                             | [shared.HrisCreateEmployeeRequestDto](../../models/shared/hriscreateemployeerequestdto.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `xAccountId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | The account identifier                                                                     |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.EmployeePostResponse](../../models/operations/employeepostresponse.md)>**


## get

Get Employee

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisEmployeesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.hrisEmployees.get({
  expand: "deserunt",
  fields: "molestiae",
  id: "0c688282-aa48-4256-af22-2e9817ee17cb",
  page: "vero",
  pageSize: "aliquid",
  raw: false,
  syncToken: "quasi",
  updatedAfter: "saepe",
  xAccountId: "vel",
}).then((res: HrisEmployeesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.HrisEmployeesGetRequest](../../models/operations/hrisemployeesgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.HrisEmployeesGetResponse](../../models/operations/hrisemployeesgetresponse.md)>**


## list

List Employees

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { HrisEmployeesListResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});

sdk.hrisEmployees.list({
  expand: "harum",
  fields: "molestiae",
  page: "rerum",
  pageSize: "occaecati",
  raw: false,
  syncToken: "minima",
  updatedAfter: "distinctio",
  xAccountId: "eligendi",
}).then((res: HrisEmployeesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.HrisEmployeesListRequest](../../models/operations/hrisemployeeslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisEmployeesListResponse](../../models/operations/hrisemployeeslistresponse.md)>**

