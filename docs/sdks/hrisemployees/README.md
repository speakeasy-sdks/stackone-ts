# hrisEmployees

### Available Operations

* [create](#create) - Creates an employee
* [get](#get) - Get Employee
* [list](#list) - List Employees

## create

Creates an employee

### Example Usage

```typescript
import { StackOne } from "StackOne";
import { EmployeePostResponse } from "StackOne/dist/sdk/models/operations";
import {
  HrisCreateEmployeeRequestDtoEmploymentStatus,
  HrisCreateEmployeeRequestDtoEmploymentType,
  HrisCreateEmployeeRequestDtoEthnicity,
  HrisCreateEmployeeRequestDtoGender,
  HrisCreateEmployeeRequestDtoMaritalStatus,
} from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.hrisEmployees.create({
  hrisCreateEmployeeRequestDto: {
    avatar: "https://example.com/avatar.png",
    avatarUrl: "https://example.com/avatar.png",
    birthday: "2023-06-14T00:00:00Z",
    companyName: "Example Corp",
    dateOfBirth: "1990-01-01",
    department: "Physics",
    displayName: "Sir Issac Newton",
    employmentStatus: HrisCreateEmployeeRequestDtoEmploymentStatus.Leave,
    employmentType: HrisCreateEmployeeRequestDtoEmploymentType.Intern,
    ethnicity: HrisCreateEmployeeRequestDtoEthnicity.TwoOrMoreRaces,
    firstName: "Issac",
    gender: HrisCreateEmployeeRequestDtoGender.Female,
    hireDate: "2022-01-01",
    id: "1687-3",
    jobTitle: "Physicist",
    lastName: "Newton",
    managerId: "67890",
    maritalStatus: HrisCreateEmployeeRequestDtoMaritalStatus.Widowed,
    name: "Issac Newton",
    personalEmail: "isaac.newton@example.com",
    personalPhoneNumber: "+1234567890",
    startDate: "2022-01-01",
    tenure: "2",
    terminationDate: "2023-06-14T00:00:00Z",
    workAnniversary: "2022-06-14T00:00:00Z",
    workEmail: "newton@example.com",
    workPhoneNumber: "+1234567890",
  },
  xAccountId: "commodi",
}).then((res: EmployeePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.EmployeePostRequest](../../models/operations/employeepostrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


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
    password: "",
    username: "",
  },
});

sdk.hrisEmployees.get({
  expand: "quidem",
  fields: "explicabo",
  id: "6916fe1f-08f4-4294-a369-8f447f603e8b",
  page: "quaerat",
  pageSize: "incidunt",
  raw: false,
  syncToken: "ipsam",
  updatedAfter: "debitis",
  xAccountId: "rem",
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
    password: "",
    username: "",
  },
});

sdk.hrisEmployees.list({
  expand: "sit",
  fields: "nobis",
  page: "error",
  pageSize: "veniam",
  raw: false,
  syncToken: "minima",
  updatedAfter: "recusandae",
  xAccountId: "reiciendis",
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
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisEmployeesListResponse](../../models/operations/hrisemployeeslistresponse.md)>**

