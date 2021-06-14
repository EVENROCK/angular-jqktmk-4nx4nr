import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import { FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService:CartService,
    private FormBuilder:FormBuilder,
  ) { }

  items = this.cartService.getItem();
  checkoutForm = this.FormBuilder.group({
    name:'',
    address:''
  });

  onSubmit():void{
    this.items = this.cartService.clrarCart();
    console.warn('Your order has been submitted',this.checkoutForm.value);
    
    this.checkoutForm.reset;
  }

  ngOnInit() {
  }

}