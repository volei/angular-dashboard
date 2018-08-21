/**
 * Project structure see
 * https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7
 * or
 * C:\Users\WM3\NightlyTemps\Angular\180327 Angular - Router - Project Structure - File Structure - How to define a highly scalable folder structure for your Angular project.pdf
 *
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';

/* Custom Core and Shared */
import {CoreModule} from './core/core.module';
// import {SharedModule} from './shared/shared.module';


/* Features */
import {AppComponent} from './app.component';
import {NavbarComponent} from './modules/navbar/navbar.component';
import {HomeComponent} from './modules/home/home.component';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,  // Do not re-export or import elsewhere. Elsewhere use CommonModule.

    AppRoutingModule,

    /* Core and Shared Modules */
    CoreModule, // do not import elsewhere
    /**
     * Use .forRoot() if configured services in CoreModule
     * (core.module.ts).
     * If a module provides both providers and declarations
     * (components, directives, pipes) then loading it
     * in a child injector such as a route,
     * would duplicate the provider instances.
     * The duplication of providers would cause issues
     * as they would shadow the root instances, which
     * are probably meant to be singletons.
     * For this reason Angular provides a way to
     * separate providers out of the module so that
     * same module can be imported into the root module
     * with providers and child modules without providers.
     *
     * Create a static method forRoot() (by convention) on the module.
     * Place the providers into the forRoot method as follows.
     * See
     * https://stackblitz.com/angular/onnrqbnqaqy?file=src%2Fapp%2Fcore%2Fcore.module.ts
     * https://angular.io/guide/singleton-services (core.module.ts)
     *
     * CoreModule.forRoot({userName: 'Miss Marple'}),
     */
    SharedModule,

     /* Feature Modules */
    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
