import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[customOver]',
})
export class CustomOverDirective {
  @Output() customOver = new EventEmitter();

  @HostListener('mouseenter') onMouseenter() {
    this.customOver.emit(true);
  }

  @HostListener('mouseleave') onMouseleave() {
    this.customOver.emit(false);
  }

  constructor() {}
}
