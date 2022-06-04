import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService{
    
    constructor(private http:HttpClient) { }

    
}