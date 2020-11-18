import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseurl1: string = "http://localhost:8080/api/requests/"
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable <Request[]> {

    return this.http.get(`${this.baseurl1}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl1}${id}`) as Observable<Request>;
  }
  create(request:Request): Observable<Request>{
  return this.http.post(`${this.baseurl1}`,request) as Observable<Request>;
  }
  change(request:Request): Observable<any>{
    return this.http.put(`${this.baseurl1}${request.id}`,request) as Observable<Request>;
  }
  remove(request: Request):Observable<Request>{
  return this.http.delete(`${this.baseurl1}${request.id}`) as Observable<Request>;
  }
}
