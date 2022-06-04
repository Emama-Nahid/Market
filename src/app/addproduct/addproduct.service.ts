import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

 
}
