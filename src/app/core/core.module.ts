import { NgModule } from '@angular/core';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CaseNumberRulesService } from './services/case-number-rules.service';
import { InspectionMonitoringService } from './services/inspection-monitoring.service';
import { InspectionReportService } from './services/inspection-report.service';
import { DialogService } from './services/dialog.service';
import { UploadService } from './services/upload.service';
import { AssignmentDetailService } from './services/assignment-detail.service';
import { ReportManageService } from './services/report-manage.service';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    CaseNumberRulesService,
    InspectionMonitoringService,
    InspectionReportService,
    DialogService,
    UploadService,
    AssignmentDetailService,
    ReportManageService
  ]
})
export class CoreModule {

}
