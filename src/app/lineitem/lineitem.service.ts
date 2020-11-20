import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class';
import { LineItem } from './lineitem.class';
import { Product } from '../product/product.class';


@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  baseurl1: string = "http://localhost:8080/api/lineitems/"
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable <LineItem[]> {

    return this.http.get(`${this.baseurl1}`) as Observable<LineItem[]>;
  }
  get(id: number): Observable<Product> {
    return this.http.get(`${this.baseurl1}${id}`) as Observable<Product>;
  }
  
  getAllByRequestId(requestid: number):Observable<Request>{
    return this.http.get(`${this.baseurl1}${requestid}`) as Observable<Request>
  }

  create(lineitem:LineItem): Observable<LineItem>{
  return this.http.post(`${this.baseurl1}${lineitem.requestId}`,lineitem) as Observable<LineItem>;
  }
  change(lineitem:LineItem): Observable<LineItem>{
    return this.http.put(`${this.baseurl1}${lineitem.id}`,lineitem) as Observable<LineItem>;
  }
  remove(id: number):Observable<LineItem>{
  return this.http.delete(`${this.baseurl1}${id}`) as Observable<LineItem>;
  }

 
}
