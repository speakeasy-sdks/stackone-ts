/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { Expose, Type } from "class-transformer";

export class Template extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message_content" })
    messageContent?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "message_type" })
    @Type(() => MessageTypeEnum)
    messageType: MessageTypeEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;
}
