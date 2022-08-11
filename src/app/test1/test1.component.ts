import {
  Component,
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
export class Test1Component implements OnInit, OnChanges {
  @Input() name!: string;
  @Input() lastName: string = "perez";

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes, changes['name'].isFirstChange());

    if(changes['name'].currentValue !== undefined && !changes['name'].isFirstChange()){
      console.log('call country service')
    }

  }

  ngOnInit(): void {
    console.log('on init');
  }
}
