import { Component, OnInit } from '@angular/core';
import { SellerService } from './seller.service';

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

}
