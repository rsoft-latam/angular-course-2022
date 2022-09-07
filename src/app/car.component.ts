import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICar} from "./utils/car.model";

@Component({
  selector: 'app-car',
  template: `
    <div style="border: 2px solid red; display: flex; flex-direction: column; height: 300px;"
         [style.background-color]="car.currentColor"
         (customOver)="showId = $event">

  <span *ngIf="car.status === 'disabled'" style="border: 2px solid purple;">
    No disponible
  </span>

      <span *ngIf="showId">id: {{car.id}}</span>
      <span>Type: {{car.type | uppercase}}</span>
      <span>Current Color: {{car.currentColor}}</span>
      <span>Capacity: {{car.capacity}}</span>
      <span>Create Date: {{car.createDate | date: 'dd/MM/yy'}}</span>
      <span>Price: {{car.price | customPrice:car.moneyType:car.timeType}}</span>

      <ng-container *ngFor="let color of car.color">
        <button [style.background-color]="color" class="btn" (click)="setColor(color)">
          {{color}}
        </button>
      </ng-container>

      <button (click)="onBuyRent()" class="btn" [disabled]="car.status === 'disabled'">
        {{ car.category === 'sale' ? 'Buy' : 'Rent' }}
      </button>
    </div>

  `,
})
export class CarComponent {
  @Input() car!: ICar;
  @Output() buyRent = new EventEmitter();
  @Output() changeColor = new EventEmitter();
  public showId: boolean = false;

  public onBuyRent(): void {
    this.buyRent.emit(this.car);
  }

  public setColor(color: any): void {
    this.changeColor.emit(color)
  }
}
