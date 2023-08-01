/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OfferHistory } from "./offerhistory";
import { OfferStatusEnumApiModel } from "./offerstatusenumapimodel";
import { Expose, Transform, Type } from "class-transformer";

export class Offer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_id" })
    applicationId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata({ elemType: OfferHistory })
    @Expose({ name: "offer_history" })
    @Type(() => OfferHistory)
    offerHistory?: OfferHistory[];

    @SpeakeasyMetadata()
    @Expose({ name: "offer_status" })
    @Type(() => OfferStatusEnumApiModel)
    offerStatus: OfferStatusEnumApiModel;

    @SpeakeasyMetadata()
    @Expose({ name: "salary" })
    salary?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startDate: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;
}