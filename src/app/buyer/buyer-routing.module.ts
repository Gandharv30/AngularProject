import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaisePOComponent } from './raise-po/raise-po.component';
import { BuyersPageComponent } from './buyers-page/buyers-page.component';


const adminRoutes: Routes = [
  {
    path: 'buyerPage',
    component: BuyersPageComponent
  },
   {
    path: 'raisePO',
    component: RaisePOComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
