import {Component, Injector, OnInit} from '@angular/core';
import {DashboardCard} from '../dashboard-card';
import {AbstractDashboardCard} from '../abstract-dashboard-card';

@Component({
  selector: 'app-dashboard-cfd',
  templateUrl: './dashboard-cfd.component.html',
  styleUrls: ['./dashboard-cfd.component.scss']
})
export class DashboardCfdComponent extends AbstractDashboardCard implements OnInit {

  constructor(private injector: Injector) {
    super(
      injector.get(DashboardCard.metadata.CAPTION),
      injector.get(DashboardCard.metadata.SUBHEADER),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.TILECOLORFROM),
      injector.get(DashboardCard.metadata.TILECOLORTO),
      injector.get(DashboardCard.metadata.TILEIMGURL),
      injector.get(DashboardCard.metadata.CONTCOLOR));
  }

  ngOnInit() {
  }

}
