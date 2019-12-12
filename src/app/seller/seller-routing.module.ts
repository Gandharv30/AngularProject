import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellersPageComponent } from './sellers-page/sellers-page.component';
import { ViewAllPoComponent } from './view-all-po.component';

const adminRoutes: Routes = [
  {
    path: 'sellerPage', component: SellersPageComponent },
    {path:'viewAllPo',component:ViewAllPoComponent}
];


@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
