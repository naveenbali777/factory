import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  DynamicFormRootModel, DynamicFormControlModel, DynamicFormService
} from '../../dynamic-form-builder';

import { AssignmentDetailService } from '../../core';

@Component({
  selector: 'app-assignment-detail-panel',
  templateUrl: './assignment-detail-panel.component.html',
  styleUrls: ['./assignment-detail-panel.component.scss']
})
export class AssignmentDetailPanelComponent implements OnInit {

  assignmentDetailForm: FormGroup;

  generalInfoRootControlModel: DynamicFormControlModel;

  controlFormGroup: FormGroup;

  constructor(
    private assignmentDetailService: AssignmentDetailService,
    private formBuilder: FormBuilder,
    private dynamicFormService: DynamicFormService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.assignmentDetailService.getAssignDetails().then((result) => {
      let allStepsFormGrp = {};
      console.log('hi');
      console.log(result);

      this.generalInfoRootControlModel = DynamicFormRootModel.createFromRemoteModel(result);
      allStepsFormGrp[this.generalInfoRootControlModel.id] = this.dynamicFormService.createFormGroup([this.generalInfoRootControlModel]);

      // creating a combined formGroup of all the steps for checking validity of all the steps
      this.assignmentDetailForm = this.formBuilder.group(allStepsFormGrp);

      // Making whole form disabled by default
      this.assignmentDetailForm.disable();
    });
  }

 

}
