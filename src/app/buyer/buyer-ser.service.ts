import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyerSerService {
  private serviceUrl="http://localhost:8085/PurchaseOrder_FrontEnd/viewAll";
  constructor(private http:HttpClient) { }

  viewAllProducts():Observable<any>{
     return this.http.get<any>(this.serviceUrl)
  }

  
}
