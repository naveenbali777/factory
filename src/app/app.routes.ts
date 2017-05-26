import {NgModule}                               from '@angular/core';
import {RouterModule, Routes}                   from '@angular/router';
import {AssociatedOrganizationFormComponent}    from './components/assoc-org-form/assoc-org-form';
import {AssociatedOrganizationUsersComponent}   from './components/assoc-org-users/assoc-org-users';
import {AssociatedOrganizationsComponent}       from './components/assoc-orgs/assoc-orgs';
import {LoginFormComponent}                     from './components/login-form/login-form';
import {OrganizationInviteFormComponent}        from './components/org-invite-form/org-invite-form';
import {OrganizationSearchComponent}            from './components/org-search/org-search';
import {OrganizationUsersComponent}             from './components/org-users/org-users';
import {PlansComponent}                         from './components/plans/plans';
import {PlanFormComponent}                      from './components/plan-form/plan-form';
import {RoleFormComponent}                      from './components/role-form/role-form';
import {RolesComponent}                         from './components/roles/roles';
import {SubscriptionComponent}                  from './components/subscription/subscription';
import {SubscriptionsComponent}                 from './components/subscriptions/subscriptions';
import {UserRoleFormComponent}                  from './components/user-role-form/user-role-form';
import {UserFormComponent}                      from './components/user-form/user-form';
import {UsersOrgSelectionComponent}             from './components/users-org-selection/users-org-selection';
import {CarComponent}                           from './components/car/car.component';
import {NotificationManagementComponent}        from './components/notifi-manage/notifi-manage';
import {DetailInformationComponent}             from './components/detail-info/detail-info';
import {BookingNonSubscriberComponent}          from './components/booking-non-subscriber/booking-non-subscriber.component';
import {AuthenticationGuard}                  from './guards/authentication';
import {AuthorizationGuard}                   from './guards/authorization';
import {InspectionBookingComponent}           from './components/inspection-booking/inspection-booking';
import {AssignmentManagementComponent}        from './components/assign-manage/assign-manage';
import {AssignmentDetailComponent}            from './components/assign-detail/assign-detail';
import {AssignmentEditComponent}              from './components/assign-edit/assign-edit';
import {DashboardComponent}                     from './dashboard';
import { InspectionDataComponent }              from './components/inspection-data/inspection-data';
import { MeasurementChartComponent } from './components/measurement-chart/measurement-chart.component';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'login', component: LoginFormComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'roles/new', component: RoleFormComponent},
    {path: 'roles/:id/edit', component: RoleFormComponent},
    {path: 'associated-organizations', component: AssociatedOrganizationsComponent},
    {path: 'associated-organizations/new', component: AssociatedOrganizationFormComponent},
    {path: 'associated-organizations/new/:organizationId', component: AssociatedOrganizationFormComponent},
    {path: 'associated-organizations/:id/edit', component: AssociatedOrganizationFormComponent},
    {path: 'organizations/search', component: OrganizationSearchComponent},
    {path: 'organization-invites/new/:associatedOrganizationId', component: OrganizationInviteFormComponent},
    {path: 'users/orgs/select', component: UsersOrgSelectionComponent},
    {path: 'users/org', component: OrganizationUsersComponent},
    {path: 'users/assoc-orgs/:id', component: AssociatedOrganizationUsersComponent},
    {path: 'users/:id/roles/edit', component: UserRoleFormComponent},
    {path: 'users/new', component: UserFormComponent},
    {path: 'plans', component: PlansComponent},
    {path: 'plans/new', component: PlanFormComponent},
    {path: 'plans/:id/edit', component: PlanFormComponent},
    {path: 'subscriptions', component: SubscriptionsComponent},
    {path: 'subscriptions/:id', component: SubscriptionComponent},
    {path: 'car/:id/:view', component: CarComponent},
    {path: 'notification-management', component: NotificationManagementComponent},
    {path: 'detail-information', component: DetailInformationComponent},
    {
        path: 'case-number-generator',
        loadChildren: './case-number-generator/case-number-generator.module#CaseNumberGeneratorModule'
    },
    {
        path: 'inspection-monitoring',
        loadChildren: './inspection-monitoring/inspection-monitoring.module#InspectionMonitoringModule'
    },
    {path: 'report-editor', loadChildren: './report-editor/report-editor.module#ReportEditorModule'},
    {path: 'workflow', loadChildren: './workflow/workflow.module#WorkflowModule'},
    {path: 'organization-invites/new/:associatedOrganizationId', component: OrganizationInviteFormComponent},
    {path: 'booking-non-subscriber', component: BookingNonSubscriberComponent},
    {path: 'inspection-booking', component: InspectionBookingComponent},
    {path: 'assignment-management', component: AssignmentManagementComponent},
    {path: 'assignment-management/:view', component: AssignmentManagementComponent},
    {path: 'assignment-detail', component: AssignmentDetailComponent},
    {path: 'assignment-edit', component: AssignmentEditComponent},
    {path: 'inspections/booking', loadChildren: './booking/booking.module#BookingModule'},
    {
        path: 'assignment-detail-first',
        loadChildren: './assignment-detail/assignment-detail.module#AssignmentDetailModule'
    },
    {   
        path: 'assignment-detail-second', 
        loadChildren: './assignment-flow/assignment-flow.module#AssignmentFlowModule' 
    },
    {   
        path: 'report-management', 
        loadChildren: './report-manage/report-manage.module#ReportManagementModule' 
    },
    {path: 'inspection-data', component: InspectionDataComponent},
    {
        path: 'users-management',
        loadChildren: './users-manage/users-manage.module#UsersManagementModule'
    },
    {     
        path: 'organization-subscriptions', 
        loadChildren: './organization-subscriptions/organization-subscriptions.module#OrganizationSubscriptionsModule' 
    },
    {path: 'measurement-chart', component: MeasurementChartComponent}
];

const PUBLIC_ROUTES = ['', 'login', 'inspections/booking', 'car/:id/:view', 'notification-management', 'detail-information', 'case-number-generator', 'inspection-monitoring',
    'report-editor', 'workflow', 'dashboard', 'notification-management', 'detail-information/:section/:id', 'inspection-booking', 'assignment-management', 'assignment-management/:view',
    'assignment-detail', 'assignment-edit', 'case-number-generator', 'inspection-monitoring', 'report-editor', 'workflow', 'booking', 'assignment-detail-first','assignment-detail-second','report-management','inspection-data','users-management','organization-subscriptions','measurement-chart'];
const AUTH_GUARDS = [AuthenticationGuard, AuthorizationGuard];


for (let route of routes) {
    if (PUBLIC_ROUTES.indexOf(route.path) === -1) {
        route.canActivate = AUTH_GUARDS;
    }
}

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
