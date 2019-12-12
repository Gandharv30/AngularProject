import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersPageComponent } from './sellers-page/sellers-page.component';
import { ViewAllPoComponent } from './view-all-po.component';
import { SellerRoutingModule } from './seller-routing.module';



@NgModule({
  declarations: [SellersPageComponent, ViewAllPoComponent],
  imports: [
    CommonModule,SellerRoutingModule
  ]
})
export class SellerModule { }
