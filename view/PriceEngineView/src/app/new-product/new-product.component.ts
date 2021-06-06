import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  @Input() product: Product = { id: 0, productName: "", noOfUnitsInCarton: 0, priceOfCarton: 0 };
  @Output() passItemInfo: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  setValue(value) {
    this.product[value.key] = value.value;
  }

  getNewItem() {
    this.passItemInfo.emit({
      product: this.product
    });
    this.product = new Product();
  }

}
