import { Organization }     from './org';
import { Plan }             from './plan';

export class Subscription {
    id: number;
    name: string;
    startsOn: Date;
    endsOn: Date;
    plan: Plan;
    organization: Organization;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
