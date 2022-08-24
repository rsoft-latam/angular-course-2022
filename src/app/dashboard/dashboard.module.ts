import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'view1',
        loadChildren: () => import('./view1/view1.module').then(m => m.View1Module)
      },
      {
        path: 'view2',
        loadChildren: () => import('./view2/view2.module').then(m => m.View2Module)
      }
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
