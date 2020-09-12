import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {CreatePageComponent} from './pages/create-page/create-page.component';
import {EditPageComponent} from './pages/edit-page/edit-page.component';
import {AuthTrueGuard} from './shared/services/auth-true.guard';
import {AuthFalseGuard} from './shared/services/auth-false.guard';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent, canActivate: [AuthFalseGuard]},
      {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthTrueGuard]},
      {path: 'create', component: CreatePageComponent, canActivate: [AuthTrueGuard]},
      {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthTrueGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
