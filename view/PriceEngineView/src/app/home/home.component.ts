import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { PriceService } from '../price.service';
import { Calculator, TotalPriceRequest } from '../model/calculator';
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newProduct: Product = new Product();
  avilableProducts: Array<Product> = new Array<Product>();
  calculatedProductList: Array<Calculator> = new Array<Calculator>();
  totalPrice: number;

  constructor(private service: PriceService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadModalNewItem() {
    this.newProduct = new Product();
    $('#newProduct').modal("show");
  }

  loadProducts() {
    this.avilableProducts = [];
    this.service.getAllProducts().subscribe(response => {
      response.forEach(product => {
        let prod = new Product();
        prod.id = product.id;
        prod.productName = product.productName;
        prod.noOfUnitsInCarton = product.noOfUnitsInCarton;
        prod.priceOfCarton = product.priceOfCarton;
        this.avilableProducts.push(prod);
      })
    })
  }

  passAmount(value) {
    if (value.amount_cart > 0) {
      value.amount_cart = value.amount_cart * value.item.noOfUnitsInCarton;
    }
    let isPurchasedBefore: boolean = false;
    this.calculatedProductList.forEach(calculatedItem => {
      if (calculatedItem.product.id == value.item.id) {
        isPurchasedBefore = true;
        // if (value.action == "add") {
          value.amount_cart = calculatedItem.amount + value.amount_cart;
        // }
        // if (value.action == "reduce") {
        //   value.amount_cart = calculatedItem.amount - value.amount_cart;
        // }
        if (value.amount_cart < 0) {
          value.amount_cart = 0;
        }
      }
    })
    this.service.calculateSingleProduct(value.item.id, value.amount_single + value.amount_cart).subscribe(response => {
      if (isPurchasedBefore) {
        this.calculatedProductList.forEach(calculatedItem => {
          if (calculatedItem.product.id == value.item.id) {
            calculatedItem.amount = value.amount_single + value.amount_cart;
            calculatedItem.price = response.price;
          }
        })
      } else {
        let newCalculatedItem = new Calculator();
        newCalculatedItem.product = value.item;
        newCalculatedItem.amount = value.amount_single + value.amount_cart;
        newCalculatedItem.price = response.price;
        this.calculatedProductList.push(newCalculatedItem);
      }
      let requestBody = new Array<TotalPriceRequest>();
      //this.totalPrice = 0;
      console.log(this.calculatedProductList);
      this.calculatedProductList.forEach(calculatedItem => {
        let request = new TotalPriceRequest();
        request.productId = calculatedItem.product.id;
        request.price = calculatedItem.amount;
        //this.totalPrice = this.totalPrice + calculatedItem.price;
        console.log(request);
        console.log(calculatedItem);
        requestBody.push(request);
      })
      this.service.calculateTotalPrice(requestBody).subscribe(responseTwo => {
        this.totalPrice = responseTwo.price;
      })
    })
  }

  changePrice(value) {
    let changedItem: Calculator = value.product;
    this.service.calculateSingleProduct(changedItem.product.id, changedItem.amount).subscribe(response => {
      this.calculatedProductList.forEach(calculatedItem => {
        if (calculatedItem.product.id == changedItem.product.id) {
          calculatedItem.amount = changedItem.amount;
          calculatedItem.price = response.price;
        }
      })
      let requestBody = new Array<TotalPriceRequest>();
      //this.totalPrice = 0;
      this.calculatedProductList.forEach(calculatedItem => {
        let request = new TotalPriceRequest();
        request.productId = calculatedItem.product.id;
        request.price = calculatedItem.amount;
        //this.totalPrice = this.totalPrice + calculatedItem.price;
        requestBody.push(request);
      })
      this.service.calculateTotalPrice(requestBody).subscribe(responseTwo => {
        this.totalPrice = responseTwo.price;
      })
    })
  }

  getNewProductDetails(value) {
    this.service.UpdateProduct(value.product).subscribe(response => {
      this.loadProducts();
      $('#newProduct').modal("hide");
    })
  }

  getEditProductInfo(value) {
    this.newProduct = value.product;
    console.log(value);
    console.log(value.item.noOfUnitsInCarton);
    this.passAmount(value);
  }

}
