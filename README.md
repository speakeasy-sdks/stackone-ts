<div align="center">
    <img src="https://github.com/speakeasy-sdks/stackone-ts/assets/6267663/6c1a7629-62dd-4ad9-88b0-a312a87fb3a0" width="300">
    <h1>Typescript SDK</h1>
   <p>Two-way Integrations, Effortlessly.</p>
   <a href="https://docs.stackone.com/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=5444e4&style=for-the-badge" /></a>
   <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/stackone-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/stackone-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { StackOne } from "StackOne";
import { AtsCandidatePostRequest } from "StackOne/dist/sdk/models/operations";
import { AtsCreateCandidateRequestDto, CandidateEmail } from "StackOne/dist/sdk/models/shared";

(async () => {
    const sdk = new StackOne({
        security: {
            password: "BASE_64_ENCODED(API_KEY)",
            username: "YOUR_USERNAME",
        },
    });
    const atsCreateCandidateRequestDto: AtsCreateCandidateRequestDto = {
        applicationIds: ["string"],
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [atsInterviewStages](docs/sdks/atsinterviewstages/README.md)

* [get](docs/sdks/atsinterviewstages/README.md#get) - Get Interview Stage
* [list](docs/sdks/atsinterviewstages/README.md#list) - List Interview Stages

### [atsRejectedReasons](docs/sdks/atsrejectedreasons/README.md)

* [get](docs/sdks/atsrejectedreasons/README.md#get) - Get Rejected Reason
* [list](docs/sdks/atsrejectedreasons/README.md#list) - List Rejected Reasons

### [atsApplications](docs/sdks/atsapplications/README.md)

* [create](docs/sdks/atsapplications/README.md#create) - Post Application (early access)
* [get](docs/sdks/atsapplications/README.md#get) - Get Application
* [getOffers](docs/sdks/atsapplications/README.md#getoffers) - Get Application Offer
* [list](docs/sdks/atsapplications/README.md#list) - List Applications
* [listOffers](docs/sdks/atsapplications/README.md#listoffers) - List Application Offers
* [update](docs/sdks/atsapplications/README.md#update) - Patch Application (early access)

### [atsDepartments](docs/sdks/atsdepartments/README.md)

* [get](docs/sdks/atsdepartments/README.md#get) - Get Department
* [list](docs/sdks/atsdepartments/README.md#list) - List Departments

### [atsInterviews](docs/sdks/atsinterviews/README.md)

* [get](docs/sdks/atsinterviews/README.md#get) - Get Interview
* [list](docs/sdks/atsinterviews/README.md#list) - List Interviews

### [atsJobs](docs/sdks/atsjobs/README.md)

* [get](docs/sdks/atsjobs/README.md#get) - Get Job
* [list](docs/sdks/atsjobs/README.md#list) - List Jobs

### [atsLocations](docs/sdks/atslocations/README.md)

* [get](docs/sdks/atslocations/README.md#get) - Get Location
* [list](docs/sdks/atslocations/README.md#list) - List locations

### [atsUsers](docs/sdks/atsusers/README.md)

* [get](docs/sdks/atsusers/README.md#get) - Get User
* [list](docs/sdks/atsusers/README.md#list) - List Users

### [accounts](docs/sdks/accounts/README.md)

* [delete](docs/sdks/accounts/README.md#delete) - Delete Account
* [get](docs/sdks/accounts/README.md#get) - Get Account
* [list](docs/sdks/accounts/README.md#list) - List Accounts

### [crmAccounts](docs/sdks/crmaccounts/README.md)

* [get](docs/sdks/crmaccounts/README.md#get) - Get Account
* [list](docs/sdks/crmaccounts/README.md#list) - List Accounts

### [campaigns](docs/sdks/campaigns/README.md)

* [get](docs/sdks/campaigns/README.md#get) - Get campaign
* [list](docs/sdks/campaigns/README.md#list) - List campaigns

### [connectSessions](docs/sdks/connectsessions/README.md)

* [connectSessionsAuthenticate](docs/sdks/connectsessions/README.md#connectsessionsauthenticate) - Authenticate Session
* [connectSessionsCreate](docs/sdks/connectsessions/README.md#connectsessionscreate) - Create Session

### [contacts](docs/sdks/contacts/README.md)

* [create](docs/sdks/contacts/README.md#create) - Post Contact (early access)
* [get](docs/sdks/contacts/README.md#get) - Get Contact
* [list](docs/sdks/contacts/README.md#list) - List Contacts
* [update](docs/sdks/contacts/README.md#update) - Patch Contact (early access)

### [hrisCompanies](docs/sdks/hriscompanies/README.md)

* [get](docs/sdks/hriscompanies/README.md#get) - Get Company
* [list](docs/sdks/hriscompanies/README.md#list) - List Companies

### [hrisEmployees](docs/sdks/hrisemployees/README.md)

* [create](docs/sdks/hrisemployees/README.md#create) - Creates an employee
* [get](docs/sdks/hrisemployees/README.md#get) - Get Employee
* [list](docs/sdks/hrisemployees/README.md#list) - List Employees

### [hrisEmployments](docs/sdks/hrisemployments/README.md)

* [get](docs/sdks/hrisemployments/README.md#get) - Get Employment
* [list](docs/sdks/hrisemployments/README.md#list) - List Employments

### [hrisLocations](docs/sdks/hrislocations/README.md)

* [get](docs/sdks/hrislocations/README.md#get) - Get location
* [list](docs/sdks/hrislocations/README.md#list) - List locations

### [marketingTemplates](docs/sdks/marketingtemplates/README.md)

* [createEmail](docs/sdks/marketingtemplates/README.md#createemail) - Creates an email template
* [createOmnichannel](docs/sdks/marketingtemplates/README.md#createomnichannel) - Creates an omni-channel template
* [createPush](docs/sdks/marketingtemplates/README.md#createpush) - Creates an push template
* [getEmail](docs/sdks/marketingtemplates/README.md#getemail) - Get email template
* [getOmnichannel](docs/sdks/marketingtemplates/README.md#getomnichannel) - Get omni-channel template
* [getPush](docs/sdks/marketingtemplates/README.md#getpush) - Get push template
* [list](docs/sdks/marketingtemplates/README.md#list) - List templates
* [listEmail](docs/sdks/marketingtemplates/README.md#listemail) - List email templates
* [listOmnichannel](docs/sdks/marketingtemplates/README.md#listomnichannel) - List omni-channel templates
* [listPush](docs/sdks/marketingtemplates/README.md#listpush) - List push templates

### [proxy](docs/sdks/proxy/README.md)

* [create](docs/sdks/proxy/README.md#create) - Proxy Request


### [ats.candidates](docs/sdks/atscandidates/README.md)

* [create](docs/sdks/atscandidates/README.md#create) - Post Candidate (early access)
* [get](docs/sdks/atscandidates/README.md#get) - Get Candidate
* [list](docs/sdks/atscandidates/README.md#list) - List Candidates
* [update](docs/sdks/atscandidates/README.md#update) - Patch Candidate (early access)
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.stackone.com` | None |

For example:


```typescript
import { StackOne } from "StackOne";

(async () => {
    const sdk = new StackOne({
        security: {
            password: "BASE_64_ENCODED(API_KEY)",
            username: "YOUR_USERNAME",
        },
        serverIdx: 0,
    });

    const res = await sdk.atsInterviewStages.get({
        id: "<ID>",
        xAccountId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { StackOne } from "StackOne";

(async () => {
    const sdk = new StackOne({
        security: {
            password: "BASE_64_ENCODED(API_KEY)",
            username: "YOUR_USERNAME",
        },
        serverURL: "https://api.stackone.com",
    });

    const res = await sdk.atsInterviewStages.get({
        id: "<ID>",
        xAccountId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from StackOne import StackOne;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new StackOne({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
