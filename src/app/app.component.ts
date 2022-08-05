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



    const auxFindIndex = [1,2,3,4,5].findIndex(num => num === 5)
    console.log("auxFindIndex:", auxFindIndex)

    const auxIndexOf = [1,2,3,4,5].indexOf(5)
    console.log("auxIndexOf:", auxIndexOf)

    const auxIndexOfString = "Hola Mundo Test".indexOf("Test")
    console.log("auxIndexOfString:", auxIndexOfString)

    const auxFilter = [1,2,3,4,5].filter(num => num % 2 === 0)
    console.log("auxFilter:", auxFilter)

    const auxJoin = [1,2,3,4,5].join('*****')
    console.log("auxJoin:", auxJoin)

    const auxSplit = "1*****2*****3*****4*****5".split('*****')
    console.log("auxSplit:", auxSplit)


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
