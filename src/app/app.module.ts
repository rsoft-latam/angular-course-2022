import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarComponent} from './car.component';
import {CustomOverDirective} from './utils/custom-over.directive';
import {CustomPricePipe} from './utils/custom-price.pipe';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CustomOverDirective,
    CustomPricePipe,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {
}
