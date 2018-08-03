import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CfdComponent} from './cfd/cfd.component';


const routes: Routes = [
  /**
   * Lazy-loaded routes in dashboard
   *
   * Children for 2nd level <router-outlet> inside dashboard
   */
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'cfd',
        component: CfdComponent,
/*        outlet: 'sidenavcontent'*/
      },
      {
        path: '',
        component: DashboardComponent
      },
      /*  {
          path: '**',
          pathMatch: 'full',
          redirectTo: '/dashboard'
        }*/
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
