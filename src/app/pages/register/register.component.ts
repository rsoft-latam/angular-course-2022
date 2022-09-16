import {Component, OnDestroy} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnDestroy {

  public form!: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(private authService: AuthService,
              private store: Store,
              private router: Router,
              private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      returnSecureToken: true
    })

  }

  public onCreateAccount() {
    this.subscription.add(
      this.authService.createUser(this.form.value).subscribe(() => this.router.navigate(['../login']))
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
