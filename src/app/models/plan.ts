import { Feature }  from './feature';
import { Module }   from './module';

export class Plan {
    id: number;
    name: string;
    startsOn: Date;
    endsOn: Date;
    modules: Module[];
    features: Feature[];

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
