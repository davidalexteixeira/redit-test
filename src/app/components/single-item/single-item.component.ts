import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})


export class SingleItemComponent implements OnInit {

  @Input() filteredItems: Object;

  constructor(private itemService: ItemsService, private router: Router) {
   }

  ngOnInit() {
  }


  handleAddItem() {
    this.itemService.checkoutArray = [];
    this.itemService.checkoutArray.push(this.filteredItems);
    this.router.navigate(['/checkout']);
    console.log(`You clicked on ${JSON.stringify(this.filteredItems)} )`);
    console.log(this.itemService.checkoutArray);
  }

}
