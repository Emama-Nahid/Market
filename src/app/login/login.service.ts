import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http:HttpClient) { }
  
    
  }
  