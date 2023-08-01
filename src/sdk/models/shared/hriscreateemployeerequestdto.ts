/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The employee employment status
 */
export enum HrisCreateEmployeeRequestDtoEmploymentStatus {
    Active = "active",
    Pending = "pending",
    Terminated = "terminated",
    Leave = "leave",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee employment type
 */
export enum HrisCreateEmployeeRequestDtoEmploymentType {
    FullTime = "full_time",
    PartTime = "part_time",
    Contractor = "contractor",
    Intern = "intern",
    Freelance = "freelance",
    Terminated = "terminated",
    Temporary = "temporary",
    Seasonal = "seasonal",
    Volunteer = "volunteer",
    Probation = "probation",
    Internal = "internal",
    External = "external",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee ethnicity
 */
export enum HrisCreateEmployeeRequestDtoEthnicity {
    White = "white",
    BlackOrAfricanAmerican = "black_or_african_american",
    Asian = "asian",
    HispanicOrLatino = "hispanic_or_latino",
    AmericanIndianOrAlaskaNative = "american_indian_or_alaska_native",
    NativeHawaiianOrPacificIslander = "native_hawaiian_or_pacific_islander",
    TwoOrMoreRaces = "two_or_more_races",
    NotDisclosed = "not_disclosed",
    Other = "other",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee gender
 */
export enum HrisCreateEmployeeRequestDtoGender {
    Male = "male",
    Female = "female",
    NonBinary = "non_binary",
    Other = "other",
    NotDisclosed = "not_disclosed",
    Diverse = "diverse",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee marital status
 */
export enum HrisCreateEmployeeRequestDtoMaritalStatus {
    Single = "single",
    Married = "married",
    CommonLaw = "common_law",
    Divorced = "divorced",
    Widowed = "widowed",
    DomesticPartnership = "domestic_partnership",
    Separated = "separated",
    Other = "other",
    NotDisclosed = "not_disclosed",
    UnmappedValue = "unmapped_value",
}

export class HrisCreateEmployeeRequestDto extends SpeakeasyBase {
    /**
     * The employee avatar
     */
    @SpeakeasyMetadata()
    @Expose({ name: "avatar" })
    avatar?: string;

    /**
     * The employee avatar Url
     */
    @SpeakeasyMetadata()
    @Expose({ name: "avatar_url" })
    avatarUrl?: string;

    /**
     * The employee birthday
     */
    @SpeakeasyMetadata()
    @Expose({ name: "birthday" })
    birthday?: string;

    /**
     * The employee company name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_name" })
    companyName?: string;

    /**
     * The employee date of birth
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date_of_birth" })
    dateOfBirth?: string;

    /**
     * The employee department
     */
    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    /**
     * The employee display name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "display_name" })
    displayName?: string;

    /**
     * The employee employment status
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employment_status" })
    employmentStatus?: HrisCreateEmployeeRequestDtoEmploymentStatus;

    /**
     * The employee employment type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employment_type" })
    employmentType?: HrisCreateEmployeeRequestDtoEmploymentType;

    /**
     * The employee ethnicity
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ethnicity" })
    ethnicity?: HrisCreateEmployeeRequestDtoEthnicity;

    /**
     * The employee first name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    /**
     * The employee gender
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gender" })
    gender?: HrisCreateEmployeeRequestDtoGender;

    /**
     * The employee hire date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hire_date" })
    hireDate?: string;

    /**
     * The employee ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The employee job title
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job_title" })
    jobTitle?: string;

    /**
     * The employee last name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    /**
     * The employee manager ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "manager_id" })
    managerId?: string;

    /**
     * The employee marital status
     */
    @SpeakeasyMetadata()
    @Expose({ name: "marital_status" })
    maritalStatus?: HrisCreateEmployeeRequestDtoMaritalStatus;

    /**
     * The employee name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The employee personal email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "personal_email" })
    personalEmail?: string;

    /**
     * The employee personal phone number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "personal_phone_number" })
    personalPhoneNumber?: string;

    /**
     * The employee start date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    startDate?: string;

    /**
     * The employee tenure
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tenure" })
    tenure?: string;

    /**
     * The employee termination date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "termination_date" })
    terminationDate?: string;

    /**
     * The employee work anniversary
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_anniversary" })
    workAnniversary?: string;

    /**
     * The employee work email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_email" })
    workEmail?: string;

    /**
     * The employee work phone number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_phone_number" })
    workPhoneNumber?: string;
}
