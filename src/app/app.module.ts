import {BrowserModule}                          from '@angular/platform-browser';
import {NgModule}                               from '@angular/core';
import {FormsModule, ReactiveFormsModule}       from '@angular/forms';
import {HttpModule, RequestOptions}             from '@angular/http';
import {StoreModule}                            from '@ngrx/store';
import {PaginationModule}                       from 'ng2-bootstrap';
import {ModalModule}                            from 'ng2-bootstrap';
import {DatePickerModule}                       from 'ng2-datepicker';
import {LocalStorageModule}                     from 'angular-2-local-storage';
import {Ng2DatetimePickerModule}                from 'ng2-datetime-picker';
import {WorkflowModule}                         from './workflow/workflow.module';
import {BookingModule}                          from './booking';
import {CollapseModule}                         from 'ng2-bootstrap/collapse';
import {DropdownModule}                         from 'ng2-bootstrap/dropdown';
import { PopoverModule }                        from 'ng2-bootstrap/popover';
import {Ng2PaginationModule}                    from 'ng2-pagination';
import {MapToIterable}                          from './app.pipe';

import { ArraySortPipe }                        from './pipes/array-sort.pipe';
import { SearchFilterPipe }                     from './pipes/search-filter.pipe';

import { CustomRequestOptions }                 from './custom-request-options';

import { AppComponent }                         from './app.component';
import { AppRoutingModule }                     from './app.routes';
import { AccordionModule }                      from 'ng2-bootstrap/accordion';
import { CoreModule }                           from './core';
import { SharedModule }                         from './shared';

import {AssociatedOrganizationFormComponent}    from './components/assoc-org-form/assoc-org-form';
import {AssociatedOrganizationUsersComponent}   from './components/assoc-org-users/assoc-org-users';
import {AssociatedOrganizationsComponent}       from './components/assoc-orgs/assoc-orgs';
import {LoginFormComponent}                     from './components/login-form/login-form';
import {NavbarComponent}                        from './components/navbar/navbar';
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

import {AuthService}                            from './services/auth';
import {CacheService}                           from './services/cache';
import {ResourceService}                        from './services/resource';
import {CategoryService}                        from './services/category';
import {AppUtilities}                           from './app.utilities';
import {AuthenticationGuard}                    from './guards/authentication';
import {AuthorizationGuard}                     from './guards/authorization';

import {bookingReducer}                         from './reducers/booking';
import {BookingNonSubscriberComponent}          from './components/booking-non-subscriber/booking-non-subscriber.component';
import {DndModule}                              from 'ng2-dnd';
import {RequireDirective,
    FileInputDirective,
    OnlyNumberDirective}                        from './directives';
import { DashboardComponent }                   from './dashboard/dashboard.component'
import {ChartsModule} from 'ng2-charts';
import { CarComponent }                         from './components/car/car.component';
import {DragulaModule , DragulaService}         from "ng2-dragula/ng2-dragula";
import { NotificationManagementComponent }      from './components/notifi-manage/notifi-manage';
import { DetailInformationComponent }           from './components/detail-info/detail-info';
import { InspectionBookingComponent }           from './components/inspection-booking/inspection-booking';
import { AssignmentManagementComponent }        from './components/assign-manage/assign-manage';
import { AssignmentDetailComponent }            from './components/assign-detail/assign-detail';
import { AssignmentEditComponent }              from './components/assign-edit/assign-edit';
import { InspectionDataComponent }              from './components/inspection-data/inspection-data';
import { MeasurementChartComponent }            from './components/measurement-chart/measurement-chart.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        RolesComponent,
        RoleFormComponent,
        AssociatedOrganizationsComponent,
        AssociatedOrganizationFormComponent,
        OrganizationSearchComponent,
        OrganizationInviteFormComponent,
        AssociatedOrganizationUsersComponent,
        PlansComponent,
        PlanFormComponent,
        SubscriptionComponent,
        SubscriptionsComponent,
        LoginFormComponent,
        NavbarComponent,
        UserRoleFormComponent,
        UserFormComponent,
        UsersOrgSelectionComponent,
        OrganizationUsersComponent,
        RequireDirective,
        FileInputDirective,
        OnlyNumberDirective,
        CarComponent,
        BookingNonSubscriberComponent,
        NotificationManagementComponent,
        DetailInformationComponent,

        ArraySortPipe,
        SearchFilterPipe,
        InspectionBookingComponent,
        AssignmentManagementComponent,
        AssignmentDetailComponent,
        AssignmentEditComponent,
        InspectionDataComponent,
        MeasurementChartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CoreModule,
        SharedModule,
        ReactiveFormsModule,
        DatePickerModule,
        Ng2DatetimePickerModule,
        AppRoutingModule,
        DragulaModule,
        CollapseModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        AccordionModule.forRoot(),
        PopoverModule.forRoot(),
        StoreModule.provideStore({bookingReducer}),
        WorkflowModule,
        BookingModule,
        DropdownModule.forRoot(),
        LocalStorageModule.withConfig({
            prefix: 'app',
            storageType: 'localStorage'
        }),
        DndModule.forRoot(),
        ChartsModule,
        Ng2PaginationModule
    ],
    providers: [
        {provide: RequestOptions, useClass: CustomRequestOptions},
        CacheService,
        AuthService,
        CategoryService,
        AuthenticationGuard,
        AuthorizationGuard,
        ResourceService,
        AppUtilities
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
