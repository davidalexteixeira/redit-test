import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    if (this.itemService.checkoutArray !== undefined) {
    this.itemService.checkoutArray.splice(0, this.itemService.checkoutArray.length);
    }
  }

}
