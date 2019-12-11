import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private addUrl:string="http://localhost:8085/PurchaseOrder_FrontEnd/register/";
private validateUrl:string;


  constructor(private http:HttpClient) { }



  deleteUser(id:any){
    return this.http.get<boolean>("http://localhost:9181/AngularFrontEnd/delete/"+id);
  }
  
 
  validate(loginEmail,loginPassword):Observable<any>{
    console.log(loginEmail,loginPassword);
    return this.http.post<any>("http://localhost:8085/PurchaseOrder_FrontEnd/loginFormSubmitController?email="+loginEmail+"&&userPassword="+loginPassword,
    null);
  }

  addUser(userObj:any):Observable<any>{
    console.log(userObj);
    return this.http.post<any>("http://localhost:8085/PurchaseOrder_FrontEnd/register/",userObj,{responseType:'text'as 'json'});  //url to be changed
  }
  
  
}
