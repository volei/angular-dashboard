import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';

import {DashboardComponent} from './dashboard.component';

import {DashboardCardsService} from './services/dashboard-cards/dashboard-cards.service';
import {DashboardUsersComponent} from './dash-page/cards/dashboard-users/dashboard-users.component';
import {DashboardCfdComponent} from './dash-page/cards/dashboard-cfd/dashboard-cfd.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule

    // TODO (WM): import next level feature modules

  ],
  declarations: [
    DashboardComponent,
    DashboardUsersComponent,
    DashboardCfdComponent
  ],
  providers: [DashboardCardsService],
  exports: [RouterModule]
})
export class DashboardModule {
}
