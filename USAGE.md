<!-- Start SDK Example Usage -->


```typescript
import { StackOne } from "StackOne";
import { AtsInterviewStagesGetResponse } from "StackOne/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.atsInterviewStages.get({
  fields: "corrupti",
  id: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
  page: "perferendis",
  pageSize: "ipsam",
  raw: false,
  syncToken: "repellendus",
  updatedAfter: "sapiente",
  xAccountId: "quo",
}).then((res: AtsInterviewStagesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->