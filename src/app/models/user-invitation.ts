export class UserInvitation {
    id: number;
    name: string;
    email: string;

    constructor(jsonData: any = undefined) {
        if (jsonData) {
            Object.assign(this, jsonData);
        }
    }
}
