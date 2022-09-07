import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from "./car.service";
import {ICar} from "./utils/car.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  rentalList: any[] = [];
  saleList: any[] = [];

  sale: any = {
    USD: 0,
    BS: 0,
  };
  rental: any = {
    USD: 0,
    BS: 0,
  };

  subscription: Subscription = new Subscription();

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  private loadData(): void {
    this.rentalList = [];
    this.saleList = [];
    this.subscription.add(this.carService.getAllCars().subscribe(res => {
      Object.entries(res)
        .filter((c: any) => c[1].category === 'rental')
        .forEach((c: any) => this.rentalList.push({id: c[0], ...c[1]}));

      Object.entries(res)
        .filter((c: any) => c[1].category === 'sale')
        .forEach((c: any) => this.saleList.push({id: c[0], ...c[1]}));

      this.getTotalSale();
      this.getTotalRent();
    }))
  }

  public addBuyRent(car: ICar) {
    this.subscription.add(this.carService.updateCar(car.id, {...car, status: 'disabled'}).subscribe(() => {
      this.loadData();
    }))
  }

  public changeColor(car: ICar, color: string): void {
    this.subscription.add(this.carService.updateCar(car.id, {...car, currentColor: color}).subscribe(() => {
      this.loadData();
    }))
  }

  getTotalRent() {
    this.rentalList.filter(c => c.status === 'disabled').forEach(c => {
      this.rental[c.moneyType] = this.rental[c.moneyType] + c.price;
    })
  }

  getTotalSale() {
    this.saleList.filter(c => c.status === 'disabled').forEach(c => {
      this.sale[c.moneyType] = this.sale[c.moneyType] + c.price;
    })
  }

}
