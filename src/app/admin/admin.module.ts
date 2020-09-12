import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AdminRoutingModule} from './admin-routing.module';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {CreatePageComponent} from './pages/create-page/create-page.component';
import {EditPageComponent} from './pages/edit-page/edit-page.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {AuthTrueGuard} from './shared/services/auth-true.guard';
import {AuthFalseGuard} from './shared/services/auth-false.guard';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
  ],
  providers: [AuthTrueGuard, AuthFalseGuard]
})
export class AdminModule {

}
