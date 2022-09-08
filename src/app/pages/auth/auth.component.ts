import {Component} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  title = 'test';

  constructor(private authService: AuthService) {
  }

  onLogin() {
    this.authService.login({
      email: 'test@test.com',
      password: '123456',
      returnSecureToken: true
    }).subscribe(res => {
      console.log('RESPONSE: ', res)
    })
  }

}
