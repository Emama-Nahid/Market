import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http:HttpClient) { }
  
    doLogin(data: any) {
      return this.http.post('http://localhost:3000/login', data);
    }
    
  }
  