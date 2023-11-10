/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Contact extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "account_ids" })
    accountIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "company_name" })
    companyName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "deal_ids" })
    dealIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "emails" })
    emails?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone_numbers" })
    phoneNumbers?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;
}
