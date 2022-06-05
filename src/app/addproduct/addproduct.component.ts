import { Component, OnInit } from '@angular/core';
import { AddProductsService } from './addproduct.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private addproduct: AddProductsService) { }


  onClickSubmit(json: any) {
    if(json.isBestArchive == 'yes') {
      json.isBestArchive = true;
    } else {
      json.isBestArchive = false;
    }
    this.addproduct.addProduct(json).subscribe(res => {
      console.log(res);
    })
  }

}
