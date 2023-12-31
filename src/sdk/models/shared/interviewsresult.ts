/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Interview } from "./interview";
import { Expose, Type } from "class-transformer";

export class InterviewsResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Interview)
    data: Interview;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}
