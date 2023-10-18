/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
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
import * as shared from "./models/shared";
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
    sdkVersion = "1.16.1";
    genVersion = "2.161.0";
    userAgent = "speakeasy-sdk/typescript 1.16.1 2.161.0 1.0.0 StackOne";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * StackOne Unified API: The documentation for the StackOne Unified API
 */
export class StackOne {
    public atsInterviewStages: ATSInterviewStages;
    public atsRejectedReasons: ATSRejectedReasons;
    public atsApplications: ATSApplications;
    public atsDepartments: ATSDepartments;
    public atsInterviews: ATSInterviews;
    public atsJobs: ATSJobs;
    public atsLocations: ATSLocations;
    public atsUsers: ATSUsers;
    public accounts: Accounts;
    public crmAccounts: CRMAccounts;
    public campaigns: Campaigns;
    public connectSessions: ConnectSessions;
    public contacts: Contacts;
    public hrisCompanies: HRISCompanies;
    public hrisEmployees: HRISEmployees;
    public hrisEmployments: HRISEmployments;
    public hrisLocations: HRISLocations;
    public marketingTemplates: MarketingTemplates;
    public proxy: Proxy;
    public ats: Ats;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.atsInterviewStages = new ATSInterviewStages(this.sdkConfiguration);
        this.atsRejectedReasons = new ATSRejectedReasons(this.sdkConfiguration);
        this.atsApplications = new ATSApplications(this.sdkConfiguration);
        this.atsDepartments = new ATSDepartments(this.sdkConfiguration);
        this.atsInterviews = new ATSInterviews(this.sdkConfiguration);
        this.atsJobs = new ATSJobs(this.sdkConfiguration);
        this.atsLocations = new ATSLocations(this.sdkConfiguration);
        this.atsUsers = new ATSUsers(this.sdkConfiguration);
        this.accounts = new Accounts(this.sdkConfiguration);
        this.crmAccounts = new CRMAccounts(this.sdkConfiguration);
        this.campaigns = new Campaigns(this.sdkConfiguration);
        this.connectSessions = new ConnectSessions(this.sdkConfiguration);
        this.contacts = new Contacts(this.sdkConfiguration);
        this.hrisCompanies = new HRISCompanies(this.sdkConfiguration);
        this.hrisEmployees = new HRISEmployees(this.sdkConfiguration);
        this.hrisEmployments = new HRISEmployments(this.sdkConfiguration);
        this.hrisLocations = new HRISLocations(this.sdkConfiguration);
        this.marketingTemplates = new MarketingTemplates(this.sdkConfiguration);
        this.proxy = new Proxy(this.sdkConfiguration);
        this.ats = new Ats(this.sdkConfiguration);
    }
}
