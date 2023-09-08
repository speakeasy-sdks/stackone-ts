/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AtsCandidates } from "./atscandidates";
import { SDKConfiguration } from "./sdk";

export class Ats {
    public candidates: AtsCandidates;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.candidates = new AtsCandidates(this.sdkConfiguration);
    }
}