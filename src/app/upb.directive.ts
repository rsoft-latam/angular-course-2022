import { TestRequest } from '@angular/common/http/testing';
import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[upb]'
})
export class UpbDirective implements OnInit {

  @Input() set upb(value:boolean){
    if(value){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear()
    } 
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
            
  }

  ngOnInit(){
  }

  //ngOnChanges(changes: SimpleChanges){
  //  if(changes['upb'] && changes['upb'].currentValue){
  //    this.viewContainer.createEmbeddedView(this.templateRef);
  //  } else {
  //    this.viewContainer.clear()
  //  }    
  //}  

}