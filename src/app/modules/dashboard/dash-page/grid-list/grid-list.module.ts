import {NgModule} from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule, } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import {SharedModule} from '../../../../shared/shared.module';
import {DashboardCardsSpawnerComponent} from '../cards/dashboard-cards-spawner/dashboard-cards-spawner.component';
import {GridListComponent} from './grid-list.component';
import {GridListRoutingModule} from './grid-list-routing.module';





@NgModule({
  imports: [
    SharedModule,

    FlexLayoutModule,

    MatGridListModule,
    MatCardModule,
    GridListRoutingModule
  ],
  declarations: [
    DashboardCardsSpawnerComponent,
    GridListComponent
  ]
})
export class GridListModule {
}
