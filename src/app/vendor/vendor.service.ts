import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl1: string = "https://localhost:5001/api/vendors/"
  constructor(
    private http: HttpClient
  ) { }
  list(): Observable <Vendor[]> {

    return this.http.get(`${this.baseurl1}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl1}${id}`) as Observable<Vendor>;
  }
  create(vendor:Vendor): Observable<Vendor>{
  return this.http.post(`${this.baseurl1}`,vendor) as Observable<Vendor>;
  }
  change(vendor:Vendor): Observable<any>{
    return this.http.put(`${this.baseurl1}${vendor.id}`,vendor) as Observable<Vendor>;
  }
  remove(vendor: Vendor):Observable<Vendor>{
  return this.http.delete(`${this.baseurl1}${vendor.id}`) as Observable<Vendor>;
  }

}
