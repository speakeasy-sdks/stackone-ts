/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Account } from "./account";
import { Expose, Type } from "class-transformer";

/**
 * The account with the given identifier was retrieved.
 */
export class AccountResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Account)
    data: Account;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}