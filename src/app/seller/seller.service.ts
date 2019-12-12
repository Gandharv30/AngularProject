import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

viewAllPo():Observable<any>{
  return this.http.get<any>("http://localhost:8085/PurchaseOrder_FrontEnd/viewAllPo");
}


}
