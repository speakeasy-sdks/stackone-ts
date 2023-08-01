/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Candidate } from "./candidate";
import { Expose, Type } from "class-transformer";

/**
 * The list of candidates was retrieved.
 */
export class CandidatesPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Candidate })
    @Expose({ name: "data" })
    @Type(() => Candidate)
    data: Candidate[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_page" })
    nextPage: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}