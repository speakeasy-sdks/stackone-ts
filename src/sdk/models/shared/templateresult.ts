/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Template } from "./template";
import { Expose, Type } from "class-transformer";

/**
 * The email template with the given identifier was retrieved.
 */
export class TemplateResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Template)
    data: Template;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}