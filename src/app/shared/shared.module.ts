import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent,
    SidenavComponent
  ],
  exports: [
    AlertComponent,
    SidenavComponent
  ]
})
export class SharedModule { }