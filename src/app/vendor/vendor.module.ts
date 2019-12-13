import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsPageComponent } from './vendors-page/vendors-page.component';
import { AllProductsComponent } from './vendorFeatures/all-products.component';
import { VendorProductsComponent } from './vendorFeatures/vendor-products.component';
import { AddVendorProductsComponent } from './vendorFeatures/add-vendor-products.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { VendorRoutingModule } from './vendor-routing.module';



@NgModule({
  declarations: [VendorsPageComponent, AllProductsComponent, VendorProductsComponent, AddVendorProductsComponent,
  
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,VendorRoutingModule
  ]
})
export class VendorModule { }
