import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './util/product-card/product-card.component';
import { InputFieldComponent } from './util/input-field/input-field.component';

import { PriceService } from './price.service';
import { NewProductComponent } from './new-product/new-product.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    ProductListComponent,
    ProductCardComponent,
    InputFieldComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
