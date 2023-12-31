# HrisLocationsListResponse


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `locationsPaginated`                                                          | [shared.LocationsPaginated](../../../sdk/models/shared/locationspaginated.md) | :heavy_minus_sign:                                                            | The list of Locations was retrieved.                                          |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [AxiosResponse](https://axios-http.com/docs/res_schema)                       | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |