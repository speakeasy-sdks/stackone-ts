/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class AccountsListRequest extends SpeakeasyBase {
    /**
     * The origin owner identifier of the results to fetch
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin_owner_id" })
    originOwnerId?: string;

    /**
     * The provider of the results to fetch
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
    provider?: string;
}

export class AccountsListResponse extends SpeakeasyBase {
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

    /**
     * The list of accounts was retrieved.
     */
    @SpeakeasyMetadata({ elemType: shared.Account })
    classes?: shared.Account[];
}
