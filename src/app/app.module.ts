import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IUrlConfig } from './model/res';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from './modules/shared/shared.module';
import { TokenInterceptorInterceptor } from './core/interceptors/token-interceptor.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';

registerLocaleData(zh);

const UrlConfig: IUrlConfig = {
  url: '/api'
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN
    },
    {
      provide: 'URL_CONFIG',
      useValue: UrlConfig
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
