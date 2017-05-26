import { AssociatedOrganization }           from './models/assoc-org';
import { Feature }                          from './models/feature';
import { Module }                           from './models/module';
import { Organization }                     from './models/org';
import { OrganizationInvite }               from './models/org-invite';
import { Plan }                             from './models/plan';
import { Role }                             from './models/role';
import { Subscription }                     from './models/subscription';
import { User }                             from './models/user';
import { Booking }                          from './models/booking';

export const FEATURE = {
    CACHE_KEY : 'features',
    MODEL     : Feature,
    BASE_URL  : 'api/features',
};

export const MODULE = {
    CACHE_KEY : 'modules',
    MODEL     : Module,
    BASE_URL  : 'api/modules',
};

export const ORGANIZATION_INVITE = {
    MODEL     : OrganizationInvite,
    BASE_URL  : 'api/org-invites',
};

export const ASSOCIATED_ORGANIZATION = {
    CACHE_KEY : 'associatedOrganizations',
    MODEL     : AssociatedOrganization,
    BASE_URL  : 'api/associated-organizations',
};

export const ASSOCIATED_ORGANIZATION_USER = {
    CACHE_KEY : 'assocOrgUsers',
    MODEL     : User,
    BASE_URL  : 'api/associated-orgs/{associatedOrgId}/users',
};

export const ROLE = {
    CACHE_KEY : 'roles',
    MODEL     : Role,
    BASE_URL  : 'api/roles',
};

export const USER_ROLE = {
    CACHE_KEY : 'userRoles',
    MODEL     : 'User', // TODO: Change this
    BASE_URL  : 'api/users/{userId}/roles',
};

export const ORGANIZATION_MODULE = {
    CACHE_KEY : 'orgModules',
    MODEL     : Module,
    BASE_URL  : 'api/org-modules',
};

export const ORGANIZATION_USER = {
    CACHE_KEY : 'orgUsers',
    MODEL     : User,
    BASE_URL  : 'api/org-users',
};

export const ORGANIZATION = {
    CACHE_KEY : 'organizations',
    MODEL     : Organization,
    BASE_URL  : 'api/organizations',
};


export const PLAN = {
    CACHE_KEY : 'plans',
    MODEL     : Plan,
    BASE_URL  : 'api/plans',
};

export const SUBSCRIPTION = {
    CACHE_KEY : 'subscriptions',
    MODEL     : Subscription,
    BASE_URL  : 'api/subscriptions',
};

export const BOOKING = {
    CACHE_KEY : 'bookings',
    MODEL     : Booking,
    BASE_URL  : 'bookings',
};
