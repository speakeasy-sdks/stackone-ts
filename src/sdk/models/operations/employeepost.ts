/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class EmployeePostRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    hrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto;

    /**
     * The account identifier
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-account-id" })
    xAccountId: string;
}

export class EmployeePostResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The employee was created successfully.
     */
    @SpeakeasyMetadata()
    createEmployeeResult?: shared.CreateEmployeeResult;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
