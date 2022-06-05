import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any
  renderComponent: boolean = false
  dataSource: any;
  constructor(private productsService: ProductsService) {
    this.productsService.allProducts().subscribe(data => {
      this.products = data;
    })
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.productsService.isAdmin().subscribe((r: any) => { this.renderComponent = r.isAdmin })
    this.dataSource.paginator = this.paginator;
  }

}

