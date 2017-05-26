import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[only-number-directive]' })

export class OnlyNumberDirective {
    constructor(private el: ElementRef) {
      console.log(el.nativeElement);
    }

  @HostListener('keypress') onMouseEnter() {
      return this.isNumberKey(event);
  }

  isNumberKey(event){
     let charCode = (event.which) ? event.which : event.keyCode;
     if (charCode > 31 && (charCode < 48 || charCode > 57)){
        return false;
     }
     return true;
  }
}