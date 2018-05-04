import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable()
export class ItemsService {

  jsonObj = 'assets/catalog.json';
  checkoutArray: any;


  constructor(private httpClient: HttpClient) {   }


  getItems(): Promise<any> {
    return this.httpClient.get(`${this.jsonObj}`)
      .toPromise();
  }

}
