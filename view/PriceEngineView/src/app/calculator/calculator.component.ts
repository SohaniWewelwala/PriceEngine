import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Calculator } from '../model/calculator';
declare const $: any;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @Input() calculatedProductList:Array<Calculator> = new Array<Calculator>();
  @Input() totalPrice: number = 0.0;

  @Output() changeAmountPurchased: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeItem: EventEmitter<any> = new EventEmitter<any>();
  selectedItem: Calculator = new Calculator();

  constructor() { }

  ngOnInit() {
  }

  isEdit(calculatedItem: Calculator) {
    this.selectedItem = calculatedItem;
    $('#editAmount').modal('show');
  }

  isRemove(calculatedItem: Calculator) {
    this.removeItem.emit({
      item: calculatedItem
    })
  }

  editAmount() {
    this.changeAmountPurchased.emit({
      item: this.selectedItem
    })
    $('#editAmount').modal('hide');
  }
}
