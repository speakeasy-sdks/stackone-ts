/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { InterviewStage } from "./interviewstage";
import { RejectedReason } from "./rejectedreason";
import { Expose, Type } from "class-transformer";

export class Application extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_status" })
    @Type(() => ApplicationStatusEnum)
    applicationStatus: ApplicationStatusEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "candidate_id" })
    candidateId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata({ elemType: InterviewStage })
    @Expose({ name: "interview_stage" })
    @Type(() => InterviewStage)
    interviewStage?: InterviewStage[];

    @SpeakeasyMetadata()
    @Expose({ name: "interview_stage_id" })
    interviewStageId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "location_id" })
    locationId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "rejected_at" })
    rejectedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "rejected_reason_ids" })
    rejectedReasonIds?: string;

    @SpeakeasyMetadata({ elemType: RejectedReason })
    @Expose({ name: "rejected_reasons" })
    @Type(() => RejectedReason)
    rejectedReasons?: RejectedReason[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt: string;
}