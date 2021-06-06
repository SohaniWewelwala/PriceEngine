import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Array<Product>;
  @Output() getAmount: EventEmitter<any> = new EventEmitter<any>();
  @Output() getEditItem: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  setAmount(value) {
    this.getAmount.emit(value);
  }

  passEditItem(value) {
    this.getEditItem.emit(value);
  }

}
