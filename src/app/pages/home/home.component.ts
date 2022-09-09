import {Component, OnInit} from '@angular/core';
import {CarService} from "../services/car.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'test';

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getAllCars().subscribe(res => {
      console.log('RESPONSE CARS: ', res)
    })
  }


}
