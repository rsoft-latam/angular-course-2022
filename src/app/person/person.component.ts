import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from './person.model';

@Component({
  selector: 'app-person',
  template: `
  <div class="border-person">
  <p>NAME: {{ name }}</p>
  <p>LAST NAME: {{ lastName }}</p>
  <p>AGE: {{ age }}</p>
  <button (click)="onPrint()">Print</button>
  </div>
  `,
  styles: [
    `
      .border-person {
        border: 3px solid red;
      }
    `
  ]
})
export class PersonComponent implements OnInit {
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() age: number = 0;

  @Output() print = new EventEmitter<IPerson>();

  constructor() {}

  ngOnInit() {}

  public onPrint(): void {
    this.print.emit({
      name: this.name,
      lastName: this.lastName,
      age: this.age,
    });
  }
}
