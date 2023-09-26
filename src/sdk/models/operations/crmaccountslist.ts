/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CrmAccountsListRequest extends SpeakeasyBase {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
    fields?: string;

    /**
     * The page number of the results to fetch
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: string;

    /**
     * The number of results per page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: string;

    /**
     * Indicates that the raw request result is returned
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" })
    raw?: boolean;

    /**
     * The sync token to select the only updated results
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sync_token" })
    syncToken?: string;

    /**
     * Use a string with a date to only select results updated after that given date
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_after" })
    updatedAfter?: string;

    /**
     * The account identifier
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-account-id" })
    xAccountId: string;
}

export class CrmAccountsListResponse extends SpeakeasyBase {
    /**
     * The list of accounts was retrieved.
     */
    @SpeakeasyMetadata()
    accountsPaginated?: shared.AccountsPaginated;

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
    rawResponse?: AxiosResponse;
}
