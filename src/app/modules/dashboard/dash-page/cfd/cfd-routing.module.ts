import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CfdComponent} from './cfd.component';


const routes: Routes = [
  /**
   * Lazy-loaded routes in dash-page
   *
   * Children for 2nd level <router-outlet> inside dash-page
   */
  {
    path: 'cfd',
    component: CfdComponent,
    outlet: 'sidenavcontent'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class CfdRoutingModule {
}
