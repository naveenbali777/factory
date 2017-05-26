import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormRootModel, DynamicFormControlEvent, DynamicFormPanelModel, PanelAction } from '../../dynamic-form-builder';
import { AssignmentDetailService } from '../../core';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralInformationComponent implements OnInit {

  @Input() controlModel: DynamicFormRootModel;

  @Input() controlFormGroup: FormGroup;

  constructor(private assignmentDetailService: AssignmentDetailService) { }

  ngOnInit() {

  }

  onPanelActionClick($event: DynamicFormControlEvent) {
    let panelControlModel = $event.controlModel as DynamicFormPanelModel;
    let panelAction: PanelAction = $event.eventData;

    if (panelAction.id === 'edit') {
      let saveAction = panelControlModel.actions.find(action => action.id === 'save');
      panelAction.invisible = true;
      saveAction.invisible = false;
      $event.controlFormGroup.enable();
    }

    if ($event.eventData.id === 'save') {
      console.log('panel data is ', $event.controlFormGroup.value);
    }
  }
}
