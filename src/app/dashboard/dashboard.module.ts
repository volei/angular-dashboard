import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardCardsService} from './services/dashboard-cards/dashboard-cards.service';
import {DashboardUsersComponent} from './cards/dashboard-users/dashboard-users.component';
import {DashboardCardsSpawnerComponent} from './cards/dashboard-cards-spawner/dashboard-cards-spawner.component';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardCfdComponent } from './cards/dashboard-cfd/dashboard-cfd.component';
import {CfdComponent} from './cfd/cfd.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    FlexLayoutModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardUsersComponent,
    DashboardCardsSpawnerComponent,
    DashboardCfdComponent,
    CfdComponent
  ],
  providers: [DashboardCardsService]
})
export class DashboardModule {
}
