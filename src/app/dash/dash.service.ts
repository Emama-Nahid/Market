import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http:HttpClient) { }

  allProducts() {
    return this.http.get('http://localhost:3000/products')
  }
}
