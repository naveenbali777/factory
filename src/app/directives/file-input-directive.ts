import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[file-input-directive]' })

export class FileInputDirective {
    constructor(private el: ElementRef) {
    	console.log(el.nativeElement);
    }

	@HostListener('click') onMouseEnter() {
    	this.el.nativeElement.children[1].click();
	}
}