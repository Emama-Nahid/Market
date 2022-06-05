import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductsService {

  constructor(private http: HttpClient) { }

  addProduct(data: any) {
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token") || ''
    );
    return this.http.post('http://localhost:3000/create-product', data, { headers: header });
  }


}
