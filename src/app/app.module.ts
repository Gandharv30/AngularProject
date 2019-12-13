import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';


// import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { BuyerModule } from './buyer/buyer.module';
import { SellerModule } from './seller/seller.module';
import { VendorModule } from './vendor/vendor.module';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // BannerComponent,
    // FooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    SellerModule,
     AuthModule,
    HttpClientModule,BuyerModule,
    AppRoutingModule,
    VendorModule 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
