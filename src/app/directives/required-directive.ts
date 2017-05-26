import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[requireDirective]' })

export class RequireDirective {
    constructor(el: ElementRef) {
    	
    }
}