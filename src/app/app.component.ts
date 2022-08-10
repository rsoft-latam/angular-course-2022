import { Component } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  public person!: IPerson;

  public student: string = 'example juan.'
  
  public a = 0;
  public b = 0;

  getPrint(event:IPerson, idPerson?:string) {
    console.log('HI PARENT COMPONENT:', event)
    this.person = event;
  }

}
