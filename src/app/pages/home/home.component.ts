import {Component, OnInit} from '@angular/core';
import {CarService} from "../services/car.service";
import {AuthService} from "../services/auth.service";
import {Store} from "@ngrx/store";
import {closeSidePanel, openSidePanel} from "../../redux/home.actions";
import {RootState} from "../../redux";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'test';
  openPanel: boolean = false;

  showFiller = false;

  constructor(private carService: CarService,
              private authService: AuthService,
              private store: Store) {
  }

  ngOnInit() {
    this.carService.getAllCars().subscribe(res => {
      console.log('RESPONSE CARS: ', res)

    })

    this.store.select((s: any) => s.home).subscribe(s => {
      console.log('STORE: ', s)
      this.openPanel = s.sidePanel;
      console.log('RESPONSE CARS: ', s, this.openPanel)
    })

  }

  /**
   * Logout to go to Login view
   * @public
   */
  public onLogout(): void {
    this.authService.logout();
  }

  onOpenSidePanel() {
    this.store.dispatch(openSidePanel())
  }

  onCloseSidePanel() {
    this.store.dispatch(closeSidePanel())
  }


}
