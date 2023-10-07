<!-- Start SDK Example Usage -->


```typescript
import { StackOne } from "StackOne";
import { AtsCandidatePostRequest } from "StackOne/dist/sdk/models/operations";
import { AtsCreateCandidateRequestDto, CandidateEmail } from "StackOne/dist/sdk/models/shared";

(async() => {
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
  emails: [
    {
      type: "Extended South",
      value: "grey technology East",
    },
  ],
  firstName: "Cecelia",
  lastName: "Gutkowski",
  name: "male",
  title: "Gasoline Screen mobile",
};
const xAccountId: string = "National";

  const res = await sdk.ats.candidates.create(atsCreateCandidateRequestDto, xAccountId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->