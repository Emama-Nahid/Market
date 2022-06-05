import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashService } from './dash.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {
  cards: any
  dataSource: any;
  constructor(private dashService: DashService) { 
    this.dashService.allProducts().subscribe((data: any) => {
      this.cards = data;
    })
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
 
