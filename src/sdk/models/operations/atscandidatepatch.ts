/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class AtsCandidatePatchRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    atsUpdateCandidatesRequestDto: shared.AtsUpdateCandidatesRequestDto;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * The account identifier
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-account-id" })
    xAccountId: string;
}

export class AtsCandidatePatchResponse extends SpeakeasyBase {
    /**
     * The candidate was successfully updated.
     */
    @SpeakeasyMetadata()
    candidateResult?: shared.CandidateResult;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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
