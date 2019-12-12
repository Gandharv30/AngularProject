import { Component, OnInit } from '@angular/core';
import { SellerService } from './seller.service';
import { POItems } from '../POItems';

@Component({
  selector: 'app-view-all-po',
  templateUrl: './view-all-po.component.html',
  styles: []
})
export class ViewAllPoComponent implements OnInit {
  public poArray:any[];
  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.sellerService.viewAllPo().subscribe(data=>this.poArray=data);
  }
  itemArr:POItems[]=[];
show:boolean=false;

viewPOItems(poId:number){
  this.itemArr=[];
  for(let obj of this.poArray){
      if(obj.poId===poId){
            
        for(let itemObj of obj.poItemsObj){
          this.itemArr.push(new POItems(itemObj.productObj.productId,itemObj.productObj.productName,itemObj.quantity));
        }
      }
  }
  this.show=true;
}


}
