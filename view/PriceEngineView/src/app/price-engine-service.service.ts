import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Product } from './model/product';

@Injectable()
export class PriceEngineServiceService {

  private baseUrl = 'http://localhost:8080/items/';

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/get-all-products');  
  } 
  
  getSingleProduct(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/get-products/${id}`);  
  }  

  UpdateProduct(product: Product): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`+'/update-products', product);  
  }  

  calculateSingleProduct(productId: number, amount: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/get-products/${productId}/${amount}`);   
  }  

  calculateTotalPrice(productLlist: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`+'/calculate_price/all', productLlist);  
  }  
 
}
