import { Organization } from './org';
import { Role}          from './role';

export class User {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    organization: Organization;
    permissions: String[];
    roles: Role[];
    idToken: any;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }

    can(permission): boolean {
        if (Array.isArray(permission)) {
            let permArr = permission;
            for (let perm of permArr) {
                if (this.permissions.indexOf(perm) > -1) {
                    return true;
                }
            }
            return false;
        } else {
            return this.permissions.indexOf(permission) > -1;
        }
    }
}
