import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class BuyerSerService {
  private serviceUrl="http://localhost:8085/PurchaseOrder_FrontEnd/viewAll";
  constructor(private http:HttpClient) { }

  viewAllProducts():Observable<any>{
     return this.http.get<any>(this.serviceUrl)
  }

  getProductNameById(id:number):Observable<Product> {
    return this.http.get<Product>("http://localhost:8085/PurchaseOrder_FrontEnd/getProductNameById?productId="+id);
  }

  raisePoForm(poArr:any,uId:number)
  {
    console.log(uId);
    return this.http.post<any>("http://localhost:8085/PurchaseOrder_FrontEnd/purchaseOrder/"+uId,poArr);
  }
  
}
