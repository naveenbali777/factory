import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AssignmentDetailComponent } from './assignment-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: AssignmentDetailComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AssignmentDetailRoutingModule {

}

