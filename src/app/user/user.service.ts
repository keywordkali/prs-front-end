import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';




@Injectable({
  providedIn: 'root'
})
export class UserService {
baseurl1: string = "http://localhost:8080/api/users/"
  constructor(
    private http: HttpClient
  ) { }
  list(): Observable <User[]> {

    return this.http.get(`${this.baseurl1}`) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl1}${id}`) as Observable<User>;
  }
  create(user:User): Observable<User>{
  return this.http.post(`${this.baseurl1}`,user) as Observable<User>;
  }
  change(user:User): Observable<any>{
    return this.http.put(`${this.baseurl1}${user.id}`,user) as Observable<User>;
  }
  remove(user: User):Observable<User>{
  return this.http.delete(`${this.baseurl1}${user.id}`) as Observable<User>;
  }
  login(username: string, password: string):Observable<User>{
    return this.http.get(`${this.baseurl1}${username}/${password}`) as Observable<User>;
  }

  
}