import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpurePipe } from './impure.pipe';
import { PurePipe } from './pure.pipe';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpurePipe,
    PurePipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
