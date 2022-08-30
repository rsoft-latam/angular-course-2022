import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.scss']
})
export class Test5Component implements OnInit {

  token:string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  sendToken(){
    this.userService.setToken(this.token)
  }

}
