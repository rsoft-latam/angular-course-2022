import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  get message(){ return this._message }
  set message(value:string){ this._message = value + '-' }


  private _message = ''; 

  constructor() { }

  ngOnInit() {
  }

  get name(){
    return ''
  }
  set name(value:string){
    this.name  = value;
  }

}