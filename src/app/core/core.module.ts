/**
 * "Central services"
 *
 * Project structure see
 * https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7
 * or
 * C:\Users\WM3\NightlyTemps\Angular\180327 Angular - Router - Project Structure - File Structure - How to define a highly scalable folder structure for your Angular project.pdf
 *
 * Load the CoreModule only once in the root AppModule !
 * Shall contain universal components, one-instance-features
 * Top Contents:
 *
 * |-- core
 *      |-- [+] authentication
 *      |-- [+] footer (global, static)
 *      |-- [+] guards
 *      |-- [+] http
 *      |-- [+] interceptors
 *      |-- [+] mocks
 *      |-- [+] services (singleton, eager loaded)
 *      |-- [+] header (global, static)
 *      |-- core.module.ts
 *      |-- ensureModuleLoadedOnceGuard.ts
 *      |-- logger.service.ts
 *
 * Details:
 * |-- authentication
 *      |-- authentication.service.ts|spec.ts
 *
 * |-- header
 *      |-- header.component.ts|html|scss|spec.ts
 *      |-- footer
 *      |-- footer.component.ts|html|scss|spec.ts
 *
 * |-- http
 *      |-- user
 *      |-- user.service.ts|spec.ts
 *      |-- api.service.ts|spec.ts
 *
 * |-- interceptors
 *      |-- api-prefix.interceptor.ts
 *      |-- error-handler.interceptor.ts
 *      |-- http.token.interceptor.ts
 *
 * |-- guards
 *      |-- auth.guard.ts
 *      |-- no-auth-guard.ts
 *      |-- admin-guard.ts
 *
 * |-- mocks
 *      |-- user.mock.ts
 *
 * |-- services
 *      |-- srv1.service.ts|spec.ts
 *      |-- srv2.service.ts|spec.ts
 */



/* 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


/* our own custom services  */


@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,  // e.g. when we use ngFor..., otherwise delete
    BrowserAnimationsModule,  // only once in whole app!!

    /* 3rd party components */

  ],
  declarations: [],
  providers: [
    /* our own custom services  */
    /* use .forRoot() in AppModule if appropriate */
  ],
  exports: []
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
  /**
   * Use the following for configuration of user services
   * as per:
   * https://stackblitz.com/angular/onnrqbnqaqy?file=src%2Fapp%2Fcore%2Fcore.module.ts
   * https://angular.io/guide/singleton-services (core.module.ts)
   */
/*  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserServiceConfig, useValue: config }
      ]
    };
  }*/
}
