/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class MarketingCreateTemplateRequestDto extends SpeakeasyBase {
    /**
     * The template body
     */
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body: string;

    /**
     * The template name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The template preheader
     */
    @SpeakeasyMetadata()
    @Expose({ name: "preheader" })
    preheader?: string;

    /**
     * The template subject
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    /**
     * Tags
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];
}
