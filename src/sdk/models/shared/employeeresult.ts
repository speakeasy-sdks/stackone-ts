/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Employee } from "./employee";
import { Expose, Type } from "class-transformer";

/**
 * The employee with the given identifier was retrieved.
 */
export class EmployeeResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Employee)
    data: Employee;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}