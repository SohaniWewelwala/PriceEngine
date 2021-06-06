import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Product } from './model/product';
import { environment } from '../environments/environment';

@Injectable()
export class PriceService {

  private baseUrl = environment.productApi;

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/get-all-products');  
  } 
  
  getSingleProduct(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/get-products/${id}`);  
  }  

  UpdateProduct(product: Product): Observable<any> {  
    return this.http.post(`${this.baseUrl}`+'/update-products', product);  
  }  

  calculateSingleProduct(productId: number, amount: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+`/calculate_product/single/${productId}/${amount}`);   
  }  

  calculateTotalPrice(productLlist: any): Observable<any> {  
    return this.http.post(`${this.baseUrl}`+'/calculate_price/all', productLlist);  
  }  

}
