import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logValue: boolean;
  loggedUser: string;
  
  constructor(private router:Router) { }

  user:any;
  ngOnInit() {

    var obj = JSON.parse(sessionStorage.getItem("uObj"));
    this.user=obj;
    console.log(obj);
    //console.log(obj.userName);
    if (obj === null) {
      this.logValue = false;
    }
    else {
      this.logValue = true;
      if (obj.role == 'buyer') {
        this.loggedUser = 'buyer';
      }
      else if (obj.role == 'Seller') {
        this.loggedUser = 'seller';
      }
      else if (obj.role == 'Vendor') {
        this.loggedUser = 'vendor';
      }
    }
  }
  logout() {
    this.logValue =false;
    this.loggedUser = undefined;
    sessionStorage.clear();
    this.router.navigate(['./login']);
  }

}
