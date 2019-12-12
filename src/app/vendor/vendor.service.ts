import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor(private http:HttpClient) { }
  
  url="http://localhost:8085/PurchaseOrder_FrontEnd/iewProducts";

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }


  addQuantity(productId:number,quantity:number,vendorId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8085/PurchaseOrder_FrontEnd/"+'updateProductQuantity?productId='+productId
    +"&&quantity="+quantity+"&&vendorId="+vendorId,{responseType:'text' as 'json'});
  }

  viewAllVendorProducts(vendorId:number):Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8085/PurchaseOrder_FrontEnd/viewAllAvailableProducts?vendorId="+vendorId);
  }
}