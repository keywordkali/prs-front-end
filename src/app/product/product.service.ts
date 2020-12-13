import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl1: string = "https://localhost:5001/api/products/"
  constructor(
    private http: HttpClient
  ) { }
  list(): Observable <Product[]> {

    return this.http.get(`${this.baseurl1}`) as Observable<Product[]>;
  }
  get(id: number): Observable<Product> {
    return this.http.get(`${this.baseurl1}${id}`) as Observable<Product>;
  }
  create(product:Product): Observable<Product>{
  return this.http.post(`${this.baseurl1}`,product) as Observable<Product>;
  }
  change(product:Product): Observable<any>{
    return this.http.put(`${this.baseurl1}${product.id}`,product) as Observable<Product>;
  }
  remove(product: Product):Observable<Product>{
  return this.http.delete(`${this.baseurl1}${product.id}`) as Observable<Product>;
  }

}
