import { Component, OnInit } from '@angular/core';
import { BuyerSerService } from '../buyer-ser.service';

import { from } from 'rxjs';
import { Product } from 'src/app/Product';

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


  public pro:number;
  public quantity:number;

  fetchProductName(pId:number){
    for(let product of this.prodArr){
      if(product.productId==pId){
        return product.productName;
      }

    }
   
  }

  productsArrToDisplay:Product[]=[];
  onAdd(){
    let obj=new Product();
    obj.isSelected=false;
    obj.productId=this.pro;
    obj.productName=this.fetchProductName(this.pro);
    obj.quantity=this.quantity;

    
    this.productsArrToDisplay.push(obj);

  }
  deleteRow(){
    this.productsArrToDisplay = this.productsArrToDisplay.filter(item => item.isSelected! === false);
  }

  RaisePo(){

    // console.log(sessionStorage.getItem("uObj"));
     let obj=JSON.parse(sessionStorage.getItem("uObj"));  
     let uId=obj.userId;
     console.log( this.productsArrToDisplay+" "+uId);
     this.buyerService.raisePoForm(this.productsArrToDisplay,uId).
     subscribe(data => console.log("Value Added" +this.productsArrToDisplay));
     window.location.reload(true);
   }
}

