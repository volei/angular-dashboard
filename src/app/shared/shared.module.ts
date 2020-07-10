/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';


/* our own custom components */


@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,  // for some custom components

    /* 3rd party components */
    FlexLayoutModule,

    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
  ],
  declarations: [
    /* Some custom componenents */
  ],
  exports: [
    /* angular stuff */
    CommonModule,

    /* 3rd party components */
    FlexLayoutModule,

    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule

    /* our own custom shared components */

  ]
})
export class SharedModule { }
