import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let orgAdminPermissions = [
            'SMS.MANAGE_ORGANIZATIONS',
            'SMS.MANAGE_USERS',
            'SMS.MANAGE_ROLES',
        ];

        let systemAdminPermissions = [
            'SMS.MANAGE_PLANS',
            'SMS.MANAGE_SUBSCRIPTIONS',
        ];

        let currentUser = [
            {
                id: 100,
                name: 'Mickey Mouse',
                email: 'mickey.mouse@email.com',
                organization: {
                    id: 10, name: 'Meta Corp'
                },
                permissions: orgAdminPermissions,
                // permissions: systemAdminPermissions,
            }
        ];

        let roles = [
            {id: 11, name: 'Inspector', modules: [
                {id: 21, name: 'Subscription Management', permissions: [
                    {id: 31, name: 'Manage Roles', granted: true},
                    {id: 32, name: 'Manage Organizations', granted: false},
                    {id: 33, name: 'Manage Users', granted: false},
                ]},
                {id: 22, name: 'Analytics', permissions: [
                    {id: 34, name: 'Factory Explorer', granted: true},
                    {id: 35, name: 'Defects', granted: false},
                    {id: 36, name: 'Inspections', granted: false},
                ]},
            ]},
            {id: 12, name: 'Coordinator', modules: [
                {id: 21, name: 'Subscription Management', permissions: [
                    {id: 31, name: 'Manage Roles', granted: true},
                    {id: 32, name: 'Manage Organizations', granted: false},
                    {id: 33, name: 'Manage Users', granted: false},
                ]},
                {id: 22, name: 'Analytics', permissions: [
                    {id: 34, name: 'Factory Explorer', granted: true},
                    {id: 35, name: 'Defects', granted: false},
                    {id: 36, name: 'Inspections', granted: false},
                ]},
            ]},
            {id: 13, name: 'Manager', modules: [
                {id: 21, name: 'Subscription Management', permissions: [
                    {id: 31, name: 'Manage Roles', granted: true},
                    {id: 32, name: 'Manage Organizations', granted: false},
                    {id: 33, name: 'Manage Users', granted: false},
                ]},
                {id: 22, name: 'Analytics', permissions: [
                    {id: 34, name: 'Factory Explorer', granted: true},
                    {id: 35, name: 'Defects', granted: false},
                    {id: 36, name: 'Inspections', granted: false},
                ]},
            ]},
            {id: 14, name: 'Administrator', modules: [
                {id: 21, name: 'Subscription Management', permissions: [
                    {id: 31, name: 'Manage Roles', granted: true},
                    {id: 32, name: 'Manage Organizations', granted: false},
                    {id: 33, name: 'Manage Users', granted: false},
                ]},
                {id: 22, name: 'Analytics', permissions: [
                    {id: 34, name: 'Factory Explorer', granted: true},
                    {id: 35, name: 'Defects', granted: false},
                    {id: 36, name: 'Inspections', granted: false},
                ]},
            ]},
        ];

        let modules = [
            {id: 21, name: 'Subscription Management', permissions: [
                {id: 31, name: 'Manage Roles'},
                {id: 32, name: 'Manage Organizations'},
                {id: 33, name: 'Manage Users'},
            ]},
            {id: 22, name: 'Analytics', permissions: [
                {id: 34, name: 'Factory Explorer'},
                {id: 35, name: 'Defects'},
                {id: 36, name: 'Inspections'},
            ]},
        ];

        let organizations = [
            {id: 41, name: 'Delta' },
            {id: 42, name: 'Epsilon' },
            {id: 43, name: 'Zeta' },
            {id: 44, name: 'Eta' },
            {id: 45, name: 'Theta' },
            {id: 46, name: 'Iota' },
            {id: 47, name: 'Kappa' },
            {id: 48, name: 'Lambda' },
            {id: 49, name: 'Mu' },
            {id: 50, name: 'Nu' },
            {id: 51, name: 'Xi' },
            {id: 52, name: 'Omicron' },
            {id: 53, name: 'Pi' },
            {id: 54, name: 'Rho' },
            {id: 55, name: 'Sigma' },
            {id: 56, name: 'Tau' },
            {id: 57, name: 'Upsilon' },
            {id: 58, name: 'Phi' },
            {id: 59, name: 'Chi' },
            {id: 60, name: 'Psi' },
            {id: 61, name: 'Omega' },
        ];

        let associatedOrganizations = [
            {id: 51, organization: { id: 38, name: 'Alpha' }, type: 'Brand', invited: true},
            {id: 52, organization: { id: 39, name: 'Beta' },  type: 'Factory', invited: false},
            {id: 53, organization: { id: 40, name: 'Gamma' }, type: 'Factory', invited: false},
        ];

        let organizationInvites = [
        ];

        let users = [
            {id: 71, name: 'Mickey Mouse', email: 'mickey.mouse@email.com', roles: [
                { id: 14, name: 'Administrator' },
            ]},
            {id: 72, name: 'Minnie Mouse', email: 'minnie.mouse@email.com', roles: [
                { id: 11, name: 'Inspector' },
                { id: 13, name: 'Manager' },
            ]},
            {id: 73, name: 'Bugs Bunny', email: 'bugs.bunny@email.com', roles: [
                { id: 13, name: 'Manager' },
            ]},
            {id: 74, name: 'Popeye', email: 'popeye@email.com', roles: [
                { id: 11, name: 'Inspector' },
                { id: 12, name: 'Coodinator' },
            ]},
            {id: 75, name: 'Daffy Duck', email: 'daffy.duck@email.com', roles: [
                { id: 11, name: 'Manager' },
            ]},
        ];

        let assocOrgUsers = [
            {id: 76, name: 'Donald Duck', email: 'donald.duck@email.com', assocOrgId: 51, roles: [
                { id: 11, name: 'Inspector' },
            ]},
            {id: 77, name: 'Daisy Duck', email: 'daisy.duck@email.com', assocOrgId: 51, roles: [
                { id: 12, name: 'Coodinator' },
            ]},
            {id: 78, name: 'Jerry Mouse', email: 'jerry.mouse@email.com', assocOrgId: 52, roles: [
                { id: 11, name: 'Inspector' },
            ]},
            {id: 79, name: 'Tom Cat', email: 'tom.cat@email.com', assocOrgId: 52, roles: [
                { id: 12, name: 'Coodinator' },
            ]},
        ];

        let plans = [
            {id: 1, name: 'Essentials', startsOn: new Date(2016, 11, 1) },
            {id: 2, name: 'Advantage', startsOn: new Date(2016, 11, 2) },
            {id: 3, name: 'Permium', startsOn: new Date(2016, 11, 3) },
        ];

        let subscriptions = [
            {id: 1, plan: { id: 1, name: 'Essentials' }, organization: { id: 1, name: 'Alpha' },
             startsOn: new Date(2016, 10, 1), endsOn: new Date(2017, 9, 31) },
            {id: 2, plan: { id: 2, name: 'Advantage' }, organization: { id: 2, name: 'Beta' },
             startsOn: new Date(2016, 9, 15), endsOn: new Date(2017, 9, 14) },
        ];


        return {
            'current-user' : currentUser,
            roles, modules, organizations, users,
            'associated-organizations' : associatedOrganizations,
            'organization-invites' : organizationInvites,
            'assoc-org-users' : assocOrgUsers,
            plans,
            subscriptions,
        };
    }
}
