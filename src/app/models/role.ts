import { Module } from './module';

export class Role {
    id: number;
    name: string;
    modules: Module[];
    granted: boolean;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
