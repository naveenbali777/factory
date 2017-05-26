import { Injectable } from '@angular/core';

import { DialogRef } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Injectable()
export class DialogService {

  constructor(private modal: Modal) {

  }

  alertApiError(message?: string, title?: string) {
    return this.modal.alert()
      .title(title || 'Error!')
      .body(message || 'Some problem occurred. Please try again later.')
      .size('sm')
      .open();
  }

  confirm(message: string, title?: string) {
    return this.modal.confirm()
      .title(title || 'Confirm')
      .body(message)
      .okBtn('Yes')
      .okBtnClass('btn btn-default dialog-ok-btn')
      .cancelBtn('No')
      .cancelBtnClass('btn btn-default dialog-cancel-btn')
      .size('sm')
      .open()
      .then((dialogRef: DialogRef<any>) => {
        return dialogRef.result;
      }).catch(() => {
        return false;
      });
  }

  confirmDelete(message: string) {
    return this.modal.confirm()
      .title('Confirm Delete?')
      .body(message)
      .okBtn('Yes')
      .okBtnClass('btn btn-default dialog-ok-btn')
      .cancelBtn('No')
      .cancelBtnClass('btn btn-default dialog-cancel-btn')
      .size('sm')
      .open()
      .then((dialogRef: DialogRef<any>) => {
        return dialogRef.result;
      }).catch(() => {
        return false;
      });
  }
}

