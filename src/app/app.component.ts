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

    const auxMap = [1,2,3,4,5].map(num => num * 2)
    console.log("auxMap:", auxMap);

    const auxForEach = [1,2,3,4,5].forEach(num => num * 2)
    console.log("auxForEach:", auxForEach)

    const auxFind = [1,2,3,4,5].find(num => num === 3)
    console.log("auxFind:", auxFind)



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
