import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name:string = "";
  @Input() lastName:string = "";
  @Input() age:number = 0;


  constructor() { }

  ngOnInit() {
  }

}