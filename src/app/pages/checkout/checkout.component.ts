import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

itemArray = [];
itemPrice = 0;

  constructor(private itemService: ItemsService, private router: Router) {
  }

  ngOnInit() {
    if (this.itemService.checkoutArray.length > 0 && this.itemService.checkoutArray !== undefined) {
      this.checkArray();
    } else {
      this.router.navigate(['/home']);
    }
  }

  checkArray() {
    if (this.itemService.checkoutArray[0].ProductOfferPrice[1].price.amount > 0) {
      this.itemArray.push(this.itemService.checkoutArray);
      this.itemPrice = this.itemService.checkoutArray[0].ProductOfferPrice[1].price.amount;
    } else {
      this.itemPrice = 0;
    }
  }

  goToSummary() {
    this.router.navigate(['/summary']);
  }

  // deleteItems(items) {
  //   // event.currentTarget.parentNode.parentNode.remove();
  //   // this.itemArray.splice(this.itemArray.indexOf(items), 1);

  //   if ( items >= 0 ) {

  //     this.itemArray.splice(items, 1);
  //   } else {
  //     console.log('Could not find index');
  //   }
  // }


}
