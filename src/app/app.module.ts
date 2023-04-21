import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgxUiLoaderModule } from 'ngx-ui-loader';
// import { NgxUiLoaderHttpModule } from 'ngx-ui-loader/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // NgxUiLoaderModule,
    // NgxUiLoaderHttpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
