import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
})
export class CarComponent {
  @Input() id!: string;
  @Input() category!: string;
  @Input() type!: string;
  @Input() colors!: string[];
  @Input() createDate!: string;
  @Input() price!: number;
  @Input() moneyType!: string;
  @Input() capacity!: number;
  @Input() timeType!: string;

  @Output() buyRent = new EventEmitter();

  selectedColor: string = '';
  showMessage: boolean = false;
  showId: boolean = false;

  constructor() {}

  onBuyRent() {
    this.showMessage = true;
    this.buyRent.emit({
      category: this.category,
      price: this.price,
      moneyType: this.moneyType,
    });
  }
}
