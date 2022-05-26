import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  
  constructor() { }

  ngOnInit(this.http.post<any>('http://localhost:3000/all-products')): void {
  }

}
