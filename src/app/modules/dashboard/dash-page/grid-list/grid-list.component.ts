import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../../dashboard.component';
import {Observable} from 'rxjs';
import {DashboardCard} from '../cards/dashboard-card';

@Component({
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})


export class GridListComponent implements OnInit {

  cards: DashboardCard[];
  cols: Observable<number>;

  constructor(private dashboardComponent: DashboardComponent) { }

  ngOnInit() {
    this.cards = this.dashboardComponent.cards;
    this.cols = this.dashboardComponent.cols;
  }

}
