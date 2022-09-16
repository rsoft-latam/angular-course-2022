import {Component, OnDestroy} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {

  subscription: Subscription = new Subscription()

  constructor(private router: Router,
              private authService: AuthService) {
  }

  public onLogin(form: any): void {
    this.subscription.add(this.authService.login({
      ...form.value,
      returnSecureToken: true
    }).subscribe(() => this.router.navigate(['home'])))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
