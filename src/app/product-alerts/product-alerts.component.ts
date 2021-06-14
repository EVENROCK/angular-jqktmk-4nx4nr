import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: product;
  @Output() nodify = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {}

  onClick() {
    this.nodify.emit('fromchild');
  }
}
