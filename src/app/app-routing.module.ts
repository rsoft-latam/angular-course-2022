import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';

const routes: Routes = [
  {
    path: 'view1/:id',
    component: View1Component,
  },
  {
    path: 'view2/:name/listNames/:lastName',
    component: View2Component,
  },
  {
    path: 'view3',
    component: View3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
