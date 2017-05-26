import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { DynamicFormBuilderModule } from '../dynamic-form-builder';
import { AssignmentDetailRoutingModule } from './assignment-detail-routing.module';
import { AssignmentDetailComponent } from './assignment-detail.component';
import { AssignmentDetailPanelComponent } from './assignment-detail-panel/assignment-detail-panel.component';
import { GeneralInformationComponent } from './general-information/general-information.component';

@NgModule({
  imports: [
    SharedModule,
    DynamicFormBuilderModule,
    AssignmentDetailRoutingModule
  ],
  declarations: [
    AssignmentDetailComponent,
    AssignmentDetailPanelComponent,
    GeneralInformationComponent
  ]
})
export class AssignmentDetailModule { }
