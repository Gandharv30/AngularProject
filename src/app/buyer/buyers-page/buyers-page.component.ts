import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyers-page',
  templateUrl: './buyers-page.component.html',
  styleUrls: ['./buyers-page.component.css']
})
export class BuyersPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout() {
    // this.logValue =false;
    // this.loggedUser = undefined;
    sessionStorage.clear();
  }
}
