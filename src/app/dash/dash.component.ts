import { Component, Inject, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashService } from './dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {
  cards: any
  constructor(private dashService: DashService) { 
    this.dashService.allProducts().subscribe((data: any) => {
      this.cards = data;
    })
  }


  ngOnInit(): void {
  }
}
 
