import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  allProducts() {
    return this.http.get('http://localhost:3000/products')
  }

  isAdmin() {
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token") || ''
    );

    return this.http.get('http://localhost:3000/isadmin', {headers: header});
  }
}

