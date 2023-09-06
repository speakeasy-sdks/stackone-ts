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
    "corrupti",
  ],
  company: "Rau - Sporer",
  emails: [
    {
      type: "unde",
      value: "nulla",
    },
  ],
  firstName: "Karley",
  lastName: "Stamm",
  name: "Sabrina Oberbrunner",
  phone: "909-434-7854 x539",
  title: "Dr.",
};
const xAccountId: string = "ab";

sdk.ats.candidates.create(atsCreateCandidateRequestDto, xAccountId).then((res: AtsCandidatePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->