import { Component, OnInit } from '@angular/core';
import { data } from './data';

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

  constructor() {}

  ngOnInit() {
    Object.entries(data.data)
      .filter((c: any) => c[1].category === 'rental')
      .forEach((c) => this.rentalList.push({ id: c[0], ...c[1] }));

    Object.entries(data.data)
      .filter((c: any) => c[1].category === 'sale')
      .forEach((c) => this.saleList.push({ id: c[0], ...c[1] }));
  }

  addBuyRent(e: { category: string; price: number; moneyType: string }) {
    if (e.category === 'rental') {
      this.rental[e.moneyType] = this.rental[e.moneyType] + e.price;
    }
    if (e.category === 'sale') {
      this.sale[e.moneyType] = this.sale[e.moneyType] + e.price;
    }
  }
}
