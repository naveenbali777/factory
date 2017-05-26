export class Permission {
    id: number;
    name: string;
    granted: boolean;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
