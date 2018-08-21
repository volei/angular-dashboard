import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GridListComponent} from './grid-list.component';


const routes: Routes = [
  /**
   * Lazy-loaded routes in dash-page
   *
   * Children for 2nd level <router-outlet> inside dash-page
   */
  {
    path: 'all',
    component: GridListComponent,
    outlet: 'sidenavcontent'
    /*children: [
      {
        path: 'cfd',
        component: CfdComponent,
        outlet: 'sidenavcontent'
      },
      {
        path: 'all',
        component: GridListComponent,
        outlet: 'sidenavcontent'
      },
/!*      {
        path: 'z',
        component: DashboardComponent
      },*!/
      /!*  {
          path: '**',
          pathMatch: 'full',
          redirectTo: '/dash-page'
        }*!/
    ]*/
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class GridListRoutingModule {
}
