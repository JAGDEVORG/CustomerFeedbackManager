import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { ResetPasswordComponent } from './Account/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Account/forgot-password/forgot-password.component';
import { AuthInterceptor } from '../app/Interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS ,HttpClientModule,} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QrcodeComponent } from './Account/qrcode/qrcode.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { GenerateQrcodeComponent } from './Account/generate-qrcode/generate-qrcode.component';
import { ReadQrcodeComponent } from './Account/read-qrcode/read-qrcode.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';  
import {SafePipe} from './Shared/Pipes/safe.pipe';
import { ReadwriteQrcodeComponent } from './Account/readwrite-qrcode/readwrite-qrcode.component';
import {FakeBackEndInterceptor} from './helper/fake-back-end.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';
import { TestngTemplateComponent } from './testng-template/testng-template.component';
import { UnlessDirective } from './unless.directive';
import { SwitchComponent } from './switch/switch.component';
import {MyToggleComponent} from './my-toggle/my-toggle.component';
import {ToggleComponent} from '../toggle/toggle.component';
// import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    QrcodeComponent,
    GenerateQrcodeComponent,
    ReadQrcodeComponent,
    ReadwriteQrcodeComponent,
    TestngTemplateComponent,
    UnlessDirective,
    ToggleComponent,
    MyToggleComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    NgxScannerQrcodeModule,
    // UserIdleModule.forRoot({idle: 60, timeout: 30, ping: 1})
  ],
  providers: [SafePipe,
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
     //{ provide: HTTP_INTERCEPTORS, useClass: FakeBackEndInterceptor, multi: true },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
