import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";

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
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
