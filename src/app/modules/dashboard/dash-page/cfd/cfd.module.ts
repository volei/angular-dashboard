import {NgModule} from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule, } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import {SharedModule} from '../../../../shared/shared.module';
import {CfdComponent} from './cfd.component';
import {CfdRoutingModule} from './cfd-routing.module';


@NgModule({
  imports: [
    SharedModule,

    FlexLayoutModule,

    MatGridListModule,
    MatCardModule,
    CfdRoutingModule
  ],
  declarations: [
    CfdComponent,
  ]
})
export class CfdModule {
}
