import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  public colorControl = new FormControl('');
  constructor() {
  }
  ngOnInit() {
    this.colorControl.valueChanges.subscribe(value => {
      console.log('VALUE CHANGES: ', value)
    })
  }
  onSubmit(form:any){
    console.log('FORM: ', form)
  }
  printColorControl(){
    console.log(this.colorControl)
  }
}
