import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  itemArray = [];
  itemPrice = 0;

  // note - not route protected

  constructor(private itemService: ItemsService, private router: Router) {
  }

  ngOnInit() {
    if (this.itemService.checkoutArray.length > 0 && this.itemService.checkoutArray !== undefined) {
      this.checkArray();
    } else {
      this.router.navigate(['/home']);
    }
    console.log(this.itemPrice);
  }

  checkArray() {
    if (this.itemService.checkoutArray[0].ProductOfferPrice[1].price.amount > 0) {
      this.itemArray.push(this.itemService.checkoutArray);
      this.itemPrice = this.itemService.checkoutArray[0].ProductOfferPrice[1].price.amount;
    } else {
      this.itemPrice = 0;
    }
  }

  emptyArray() {
    this.itemService.checkoutArray.splice(0, this.itemService.checkoutArray.length);
    this.router.navigate(['/home']);
  }

}
