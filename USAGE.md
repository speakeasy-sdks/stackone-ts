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
    "online",
  ],
  company: "Stokes - Johnson",
  emails: [
    {
      type: "South",
      value: "grey technology East",
    },
  ],
  firstName: "Cecelia",
  lastName: "Gutkowski",
  name: "male",
  phone: "(855) 874-9630 x29052",
  title: "Fish",
};
const xAccountId: string = "Buckinghamshire";

sdk.ats.candidates.create(atsCreateCandidateRequestDto, xAccountId).then((res: AtsCandidatePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->