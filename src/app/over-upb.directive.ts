import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[overUpb]'
})
export class OverUpbDirective implements OnInit {

  @Input() overUpb!: string;

  constructor(private element: ElementRef) {
    
  }

  ngOnInit(){
    console.log(this.element)
    this.element.nativeElement.style.backgroundColor = this.overUpb;
  }

}