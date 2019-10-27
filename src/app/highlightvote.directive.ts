import { Directive, ElementRef, } from '@angular/core';

@Directive({
  selector: '[appHighlightvote]'
})
export class HighlightvoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor= "blue";
  }
 
  }


