import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit, OnChanges, DoCheck {
  @Input() name!: string;
  @Input() lastName: string = "perez";

  public middleName:string = '';
  public generalData:string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes, changes['name'].isFirstChange());

    if( changes['name'].currentValue !== undefined 
         && !changes['name'].isFirstChange()  ){
      console.log('call country service')
    }

  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngDoCheck():void{
    console.log('Do Check')
    this.generalData = this.name+  "-" + this.lastName + "-" + this.middleName
  }

}
