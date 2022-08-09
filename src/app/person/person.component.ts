import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input("nametest") name:string = "";
  @Input() lastName:string = "";
  @Input() age:number = 0;

  @Output() print = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  onPrint(event:any) {
    this.print.emit("hola")
  }


}