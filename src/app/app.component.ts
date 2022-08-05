import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'test';

  constructor() {
    console.log('hi');
  }

  private getName(name: string): string {
    return 'hi' + name;
  }

  // --- Arrow function
  // const getName = (name: string) => {return "hi" + name;}
  // const getName = (name: string) => "hi" + name
  // const getName = () => "hi"
  // const getName = (name:string, lasName:string) => lasName

  // const mult = num => num*2
  private mult(num: any) {
    return num;
  }
}
