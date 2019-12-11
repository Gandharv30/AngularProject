import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersPageComponent } from './buyers-page/buyers-page.component';
import { BuyerSerService } from './buyer-ser.service';
import { RaisePOComponent } from './raise-po/raise-po.component';
import { BuyerRoutingModule } from './buyer-routing.module';
import { ViewAllComponent } from './view-all/view-all.component';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms'



@NgModule({
  declarations: [BuyersPageComponent,RaisePOComponent,ViewAllComponent],
  imports: [
    CommonModule,BuyerRoutingModule,FormsModule
  ],
 
  exports:[
    BuyersPageComponent,RaisePOComponent,ViewAllComponent
  ],
  providers:[
    BuyerSerService
  ]
})
export class BuyerModule { }
