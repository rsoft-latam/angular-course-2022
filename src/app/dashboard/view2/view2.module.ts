import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View2Component } from './view2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: View2Component
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    View2Component
  ]
})
export class View2Module { }