export class Stats {
    subscriberCount: number;
    associatedOrganizationCount: number;
    userCount: number;
    inspectionCount: number;
    storageSpaceUsed: number;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
