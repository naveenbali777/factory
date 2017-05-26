import { Organization } from './org';
import { User }         from './user';

const INVITED = 'Invited';
const NOT_INVITED = 'Not Invited';
const ACCEPTED = 'Accepted';

export class AssociatedOrganization {
    id: number;
    organization: Organization;
    type: string;
    invitationStatus: string;
    users: User[];

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        } else {
            this.organization = new Organization();
        }
    }

    invited(): void {
        this.invitationStatus = INVITED;
    }

    isInvited(): boolean {
        return this.invitationStatus === INVITED;
    }

    isInvitationAccepted(): boolean {
        return this.invitationStatus === ACCEPTED;
    }
}
