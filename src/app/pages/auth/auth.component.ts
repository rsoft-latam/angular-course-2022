import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  title = 'test';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    /*if(this.authService.verifyLogged()){
      this.router.navigate(['home'])
    }*/
  }

  onLogin() {
    this.authService.login({
      email: 'test@test.com',
      password: '123456',
      returnSecureToken: true
    }).subscribe(res => {
      console.log('RESPONSE: ', res)
      this.router.navigate(['home'])
    })
  }

  onCreate() {
    this.authService.createUser({
      email: 'test2@test.com',
      password: '123456',
      returnSecureToken: true
    }).subscribe(res => {
      console.log('CREATE USER: ', res)
    })
  }

}
