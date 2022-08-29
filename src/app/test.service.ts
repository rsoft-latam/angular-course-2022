import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

name = 'asdasdasd'

  constructor() { }
  
  getName(){
    return 'RICARDO';
  }

  setName(name:string){
    this.name = name;
  }

}