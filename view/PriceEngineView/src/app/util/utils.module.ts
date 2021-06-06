import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputFieldComponent } from './input-field/input-field.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputFieldComponent,
    ProductCardComponent
  ]
})
export class UtilsModule { }
