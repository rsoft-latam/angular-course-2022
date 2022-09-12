import {Component, OnInit} from '@angular/core';
import {CarService} from "../services/car.service";
import {AuthService} from "../services/auth.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'test';

  constructor(private carService: CarService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.carService.getAllCars().subscribe(res => {
      console.log('RESPONSE CARS: ', res)
    })
  }

  /**
   * Logout to go to Login view
   * @public
   */
  public onLogout(): void {
    this.authService.logout();
  }


}
