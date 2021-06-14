import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  event1: string = '';
  birthday = new Date(2021, 3, 5);
  boolFlag = true;
  toggle = true; // start with true == shortDate

  share() {
    window.alert('The product has been shared!');
  }

  public onNodify(event: string) {
    window.alert('The product has been Nodify!' + event);
  }

  get ChangeDateFormat() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
