import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './modules/home/home.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {DashboardUsersComponent} from './modules/dashboard/dash-page/cards/dashboard-users/dashboard-users.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/all/(sidenavcontent:all)' // WM: This is a url, not a compiler path!
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    /*loadChildren: () => import('./modules/dashboard/dash-page/grid-list/grid-list.module').then(m => m.CfdModule),*/

    children: [{path: '', component: DashboardUsersComponent},
      {
        path: 'all',
        loadChildren: () => import('./modules/dashboard/dash-page/grid-list/grid-list.module').then(m => m.GridListModule)
/*        component: GridListComponent,
        outlet: 'sidenavcontent'*/
      },
      {
        path: 'cfd',
        loadChildren: () => import('./modules/dashboard/dash-page/cfd/cfd.module').then(m => m.CfdModule)
      },
      {
        path: '**',
        redirectTo: '/dashboard/all/(sidenavcontent:all)'
      }]
  },
  {
    path: '**',
    redirectTo: '/dashboard/all/(sidenavcontent:all)'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, enableTracing: true, relativeLinkResolution: 'legacy' })
    // WM: Don't use hash (#) in path, use HTML5 routing mode instead
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
