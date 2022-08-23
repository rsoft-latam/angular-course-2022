import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  data:number[] = [1,2,3,4,5,6,7,8,9]

  constructor(){
    console.log('-------PURE')
    console.log(this.pureExample(3,5))
    console.log(this.pureExample(1,5))
    console.log(this.pureExample(3,4))
    console.log(this.pureExample(2,1))
    console.log('-------IMPURE')
    console.log(this.impureExample(3,5))
    console.log(this.impureExample(1,5))
    console.log(this.impureExample(3,4))
    console.log(this.impureExample(2,1))

  }

  pureExample(a:number, b:number):number{
    return a + b;
  }

  impureExample(a:number, b:number){
    return (a + b + Math.random()).toFixed()
  }

}
