import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RegisterComponent} from "./register.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const routes: Route[] = [
  {
    path: '',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule {
}
