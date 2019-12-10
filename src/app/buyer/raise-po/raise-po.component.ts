import { Component, OnInit } from '@angular/core';
import { BuyerSerService } from '../buyer-ser.service';

@Component({
  selector: 'app-raise-po',
  templateUrl: './raise-po.component.html',
  styleUrls: ['./raise-po.component.css']
})
export class RaisePOComponent //implements OnInit 
{

  constructor(private buyerService:BuyerSerService) { }
 public prodArr:any[];
  ngOnInit() {
    this.buyerService.viewAllProducts().subscribe(data=>this.prodArr=data);
  }

}
