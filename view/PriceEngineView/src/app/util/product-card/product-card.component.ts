import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() getAmount:EventEmitter<any> = new EventEmitter<any>();
  @Output() editItem: EventEmitter<any> = new EventEmitter<any>();

  amount_cart=0;
  amount_single=0;
  constructor() { }

  ngOnInit() {
  }

  setAmount(value) {
    this.getAmount.emit(value);
  }

  isEdit() {
    this.editItem.emit({
      item: this.product,
      amount_cart:this.amount_cart,
      amount_single:this.amount_single
    })
  }

}
