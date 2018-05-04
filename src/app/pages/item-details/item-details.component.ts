import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  itemName: String;
  itemCategory: String;
  itemPrice: String;
  itemFamily: String;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) =>
      this.itemName = String(params['name']));
    this.activatedRoute.params
      .subscribe((params) => {
        this.itemCategory = String(params['category']);
      });
  }


}
