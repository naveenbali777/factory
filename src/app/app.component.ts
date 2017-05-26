import { Component, ViewContainerRef } from '@angular/core';

import { Overlay } from 'angular2-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {
    overlay.defaultViewContainer = viewContainerRef;
  }
}
