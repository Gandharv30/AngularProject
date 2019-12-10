import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';


import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { BuyerModule } from './buyer/buyer.module';



@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // BannerComponent,
    // FooterComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    HttpClientModule,BuyerModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }