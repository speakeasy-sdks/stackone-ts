/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CandidateEmail extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}
