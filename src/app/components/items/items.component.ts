import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  objects: any;
  items: any = [];
  filteredItems: any = [];
  term: String = '';
  search = false;

  constructor(private itemService: ItemsService) {
    this.itemService.getItems()
      .then((data) => {
        this.objects = data;
        this.objects.productHierarchy.forEach(element => {
          element.items.forEach(e => {
            this.items.push(e);
          });
        });
        console.log(this.items);
        console.log(data.productHierarchy[0].items[2].ProductOfferPrice);
      })
      .then((data) => {
        this.filteredItems = this.items;
      });
    }

  ngOnInit() {
  }

  filterItems() {
    if (this.term.length < 0) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter((items) => {
        this.search = true;
       return items.name.toLowerCase().includes(this.term.toLowerCase());
      });
    }
  }

}
