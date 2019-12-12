import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddVendorProductsComponent } from './vendorFeatures/add-vendor-products.component';
import { ViewAllComponent } from '../buyer/view-all/view-all.component';
import { VendorModule } from './vendor.module';

const adminRoutes: Routes = [
  {
    path: 'addProduct', component:AddVendorProductsComponent },
    {path:'viewAll',component:ViewAllComponent}
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,VendorRoutingModule
//   ]
// })
NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
