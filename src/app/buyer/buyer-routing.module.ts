import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaisePOComponent } from './raise-po/raise-po.component';
import { BuyersPageComponent } from './buyers-page/buyers-page.component';
import { ViewAllComponent } from './view-all/view-all.component';

const adminRoutes: Routes = [
  {
    path: '',
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
