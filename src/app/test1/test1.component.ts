import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit, OnChanges {

  constructor() { 
    console.log('constructor')
  }

  ngOnChanges():void{
    console.log('on changes')
  }

  ngOnInit():void {
    console.log('on init')
  }

  
}