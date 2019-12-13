import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddVendorProductsComponent } from './vendorFeatures/add-vendor-products.component';
import { VendorModule } from './vendor.module';

const adminRoutes: Routes = [
  {
    path: 'addProduct', component:AddVendorProductsComponent }
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,VendorRoutingModule
//   ]
// })
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
