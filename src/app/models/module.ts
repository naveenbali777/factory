import { Permission } from './permission';

export class Module {
    id: number;
    name: string;
    permissions: Permission[];
    selected: boolean;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
