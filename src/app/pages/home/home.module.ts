import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {MatSidenavModule} from "@angular/material/sidenav";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatSidenavModule
  ]
})
export class HomeModule { }
