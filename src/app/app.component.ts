import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  //@ViewChild('myText', {static: false}) myTest!: ElementRef;
  @ViewChild('myText') myTest!: ElementRef;

  send(data: any) {
    console.log('data: ', data.value);
    console.log('MY TEST IN TS: ', this.myTest);
    this.myTest.nativeElement.value = 'cambio desde el ts'
  }
}
