/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Accounts } from "./accounts";
import { Ats } from "./ats";
import { ATSApplications } from "./atsapplications";
import { ATSDepartments } from "./atsdepartments";
import { ATSInterviews } from "./atsinterviews";
import { ATSInterviewStages } from "./atsinterviewstages";
import { ATSJobs } from "./atsjobs";
import { ATSLocations } from "./atslocations";
import { ATSRejectedReasons } from "./atsrejectedreasons";
import { ATSUsers } from "./atsusers";
import { Campaigns } from "./campaigns";
import { ConnectSessions } from "./connectsessions";
import { Contacts } from "./contacts";
import { CRMAccounts } from "./crmaccounts";
import { HRISCompanies } from "./hriscompanies";
import { HRISEmployees } from "./hrisemployees";
import { HRISEmployments } from "./hrisemployments";
import { HRISLocations } from "./hrislocations";
import { MarketingTemplates } from "./marketingtemplates";
import { Proxy } from "./proxy";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.stackone.com"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "2.0.3";
    genVersion = "2.192.1";
    userAgent = "speakeasy-sdk/typescript 2.0.3 2.192.1 1.0.0 StackOne";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * StackOne Unified API: The documentation for the StackOne Unified API
 */
export class StackOne {
    public accounts: Accounts;
    public connectSessions: ConnectSessions;
    public atsApplications: ATSApplications;
    public ats: Ats;
    public atsDepartments: ATSDepartments;
    public atsInterviewStages: ATSInterviewStages;
    public atsInterviews: ATSInterviews;
    public atsJobs: ATSJobs;
    public atsLocations: ATSLocations;
    public atsRejectedReasons: ATSRejectedReasons;
    public atsUsers: ATSUsers;
    public crmAccounts: CRMAccounts;
    public contacts: Contacts;
    public hrisCompanies: HRISCompanies;
    public hrisEmployees: HRISEmployees;
    public hrisEmployments: HRISEmployments;
    public hrisLocations: HRISLocations;
    public campaigns: Campaigns;
    public marketingTemplates: MarketingTemplates;
    public proxy: Proxy;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.accounts = new Accounts(this.sdkConfiguration);
        this.connectSessions = new ConnectSessions(this.sdkConfiguration);
        this.atsApplications = new ATSApplications(this.sdkConfiguration);
        this.ats = new Ats(this.sdkConfiguration);
        this.atsDepartments = new ATSDepartments(this.sdkConfiguration);
        this.atsInterviewStages = new ATSInterviewStages(this.sdkConfiguration);
        this.atsInterviews = new ATSInterviews(this.sdkConfiguration);
        this.atsJobs = new ATSJobs(this.sdkConfiguration);
        this.atsLocations = new ATSLocations(this.sdkConfiguration);
        this.atsRejectedReasons = new ATSRejectedReasons(this.sdkConfiguration);
        this.atsUsers = new ATSUsers(this.sdkConfiguration);
        this.crmAccounts = new CRMAccounts(this.sdkConfiguration);
        this.contacts = new Contacts(this.sdkConfiguration);
        this.hrisCompanies = new HRISCompanies(this.sdkConfiguration);
        this.hrisEmployees = new HRISEmployees(this.sdkConfiguration);
        this.hrisEmployments = new HRISEmployments(this.sdkConfiguration);
        this.hrisLocations = new HRISLocations(this.sdkConfiguration);
        this.campaigns = new Campaigns(this.sdkConfiguration);
        this.marketingTemplates = new MarketingTemplates(this.sdkConfiguration);
        this.proxy = new Proxy(this.sdkConfiguration);
    }
}
