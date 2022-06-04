import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService{
    
    constructor(private http:HttpClient) { }

    addUser(data:any) {
       return this.http.post('http://localhost:3000/user',data)
       
      }

    
}