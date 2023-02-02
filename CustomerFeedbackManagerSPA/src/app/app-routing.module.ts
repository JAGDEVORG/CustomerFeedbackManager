import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { ResetPasswordComponent } from './Account/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Account/forgot-password/forgot-password.component';
import { QrcodeComponent} from './Account/qrcode/qrcode.component';
import { GenerateQrcodeComponent} from './Account/generate-qrcode/generate-qrcode.component';
import { ReadQrcodeComponent} from './Account/read-qrcode/read-qrcode.component';
import { ReadwriteQrcodeComponent} from './Account/readwrite-qrcode/readwrite-qrcode.component';
import { AuthGuard } from './helper/auth.guard';
import { Role } from './helper/fake-back-end.interceptor';
import {CustomerlistdataComponent} from './dashboardmodule/customerlistdata/customerlistdata.component'
import  {TestngTemplateComponent} from '..//app/testng-template/testng-template.component'
const routes: Routes = [
  {
        path: 'login',
        component: LoginComponent
  },

  {
    path: 'testtemp',
    component: TestngTemplateComponent
},

    {
      path: 'dashboard',
      loadChildren: () => import('./dashboardmodule/dashboardmodule.module').then(m => m.DashboardmoduleModule),
       },
    
    // {
    //   path: 'dashboard',
    //   loadChildren: () => import('./dashboardmodule/dashboardmodule.module').then(m => m.DashboardmoduleModule),
    //   canActivate: [AuthGuard],
    //   data: { roles: [Role.User] }
    // },
// {
//   path: 'customerlistdata',
//   component: CustomerlistdataComponent
// },

    {
      path: '',
      component: LoginComponent
},
  { path: 'dashboardmodule', loadChildren: () => import('./dashboardmodule/dashboardmodule.module').then(m => m.DashboardmoduleModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
