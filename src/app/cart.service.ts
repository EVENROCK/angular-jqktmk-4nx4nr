import { Injectable } from '@angular/core';
import { product } from './products';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class CartService {
  constructor(
    private http: HttpClient
  ) {}

  itmes: product[] = [];

  addToCart(productAdd:product) {
  this.itmes.push(productAdd);
  }

  getItem()
  {
    return this.itmes;
  }

  clrarCart() {
    this.itmes = [];
    return this.itmes;
  }

  getShippingPrices(){
    return this.http.get<{type:string, price:number}[]>('assets/shipping.json');
  }
}
