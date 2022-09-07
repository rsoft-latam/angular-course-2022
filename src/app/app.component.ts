import {Component, OnInit} from '@angular/core';
import {CarService} from "./car.service";
import {ICar} from "./utils/car.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
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

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.rentalList = [];
    this.saleList = [];
    this.carService.getAllCars().subscribe(res => {
      Object.entries(res)
        .filter((c: any) => c[1].category === 'rental')
        .forEach((c: any) => this.rentalList.push({id: c[0], ...c[1]}));

      Object.entries(res)
        .filter((c: any) => c[1].category === 'sale')
        .forEach((c: any) => this.saleList.push({id: c[0], ...c[1]}));
    })
  }

  addBuyRent(car: ICar) {
    if (car.category === 'rental') {
      this.rental[car.moneyType] = this.rental[car.moneyType] + car.price;
    }
    if (car.category === 'sale') {
      this.sale[car.moneyType] = this.sale[car.moneyType] + car.price;
    }
    this.carService.updateCar(car.id, {...car, status: 'disabled'}).subscribe(() => {
      this.loadData();
    })
  }
}
