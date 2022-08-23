import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CustomOverDirective } from './utils/custom-over.directive';
import { CustomPricePipe } from './utils/custom-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CustomOverDirective,
    CustomPricePipe,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
