import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[overUpb]'
})
export class OverUpbDirective {

  constructor(private element: ElementRef) {
    console.log(this.element)
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}