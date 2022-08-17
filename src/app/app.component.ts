import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  color: string = 'green';

  getMessage(event:any){
    console.log('evento al padre:', event)
  }

}
