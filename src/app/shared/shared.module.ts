/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';


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
