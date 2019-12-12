import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-sellers-page',
  templateUrl: './sellers-page.component.html',
  styleUrls: ['./sellers-page.component.css']
})
export class SellersPageComponent implements OnInit {
public poArray:any[];
  constructor(private sellerService:SellerService) { }

  ngOnInit() {
   
  }

}
