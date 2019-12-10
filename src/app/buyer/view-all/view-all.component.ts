import { Component, OnInit } from '@angular/core';
import { BuyerSerService } from '../buyer-ser.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private buyerService:BuyerSerService) { }
  prodArr:any[];

  ngOnInit() {
    this. buyerService.viewAllProducts().subscribe(data=>this.prodArr=data);
  }

}
