import { AssociatedOrganization }   from './assoc-org';
import { User }                     from './user';

export class OrganizationInvite {
    id: number;
    associatedOrganization: AssociatedOrganization;
    user: User;
    allowedUsers: number;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
