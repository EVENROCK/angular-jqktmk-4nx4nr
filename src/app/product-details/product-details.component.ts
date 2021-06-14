import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product, products } from '../products';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: product | undefined;
  constructor(
    private route: ActivatedRoute,
    private CartService1 : CartService
  ) {}

  ngOnInit() {
    
    const routeParmes = this.route.snapshot.paramMap;
    const ProductIdFormRoute = Number(routeParmes.get('productId'));

    this.product = products.find(Result => Result.id === ProductIdFormRoute);
  }

  addToCart(productAdd:product){
    this.CartService1.addToCart(productAdd);
    window.alert("your product has been add to cart!");
  }



}
