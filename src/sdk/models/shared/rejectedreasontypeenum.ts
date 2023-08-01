/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum RejectedReasonTypeEnumValue {
    RejectedByCandidate = "rejected_by_candidate",
    RejectedByOrganization = "rejected_by_organization",
    Other = "other",
    Unknown = "unknown",
    UnmappedValue = "unmapped_value",
}

export class RejectedReasonTypeEnum extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: RejectedReasonTypeEnumValue;
}