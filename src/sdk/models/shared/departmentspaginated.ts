/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Department } from "./department";
import { Expose, Type } from "class-transformer";

/**
 * The list of departments was retrieved.
 */
export class DepartmentsPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Department })
    @Expose({ name: "data" })
    @Type(() => Department)
    data: Department[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_page" })
    nextPage: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}
