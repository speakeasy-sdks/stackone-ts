<!-- Start SDK Example Usage -->


```typescript
import { StackOne } from "StackOne";
import { AtsCandidatePostRequest, AtsCandidatePostResponse } from "StackOne/dist/sdk/models/operations";
import { AtsCreateCandidateRequestDto, CandidateEmail } from "StackOne/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "BASE_64_ENCODED(API_KEY)",
    username: "YOUR_USERNAME",
  },
});
const atsCreateCandidateRequestDto: AtsCreateCandidateRequestDto = {
  applicationIds: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  company: "Stiedemann - Little",
  emails: [
    {
      type: "vel",
      value: "error",
    },
    {
      type: "deserunt",
      value: "suscipit",
    },
    {
      type: "iure",
      value: "magnam",
    },
    {
      type: "debitis",
      value: "ipsa",
    },
  ],
  firstName: "Vincenzo",
  lastName: "Goldner",
  name: "Minnie Schiller",
  phone: "639.803.0603 x897",
  title: "Mr.",
};
const xAccountId: string = "at";

sdk.ats.candidates.create(atsCreateCandidateRequestDto, xAccountId).then((res: AtsCandidatePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->