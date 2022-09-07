import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICar} from "../utils/car.model";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
})
export class CarComponent {
  @Input() car!: ICar;
  @Output() buyRent = new EventEmitter();

  showMessage: boolean = false;
  showId: boolean = false;

  constructor() {
  }

  onBuyRent() {
    this.showMessage = true;
    this.buyRent.emit(this.car);
  }
}
