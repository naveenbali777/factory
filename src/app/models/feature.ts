export class Feature {
    id: number;
    name: string;
    measurementUnit: string;
    quota: number;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
