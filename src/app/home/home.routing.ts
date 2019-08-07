import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ThemeDetailComponent } from '../theme-detail/theme-detail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: '../dashboard/dashboard.module#DashboardModule'
      },
      {
        path: ':slug',
        component: ThemeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
