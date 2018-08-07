import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export class DashboardCard {
  static metadata: any = {
    CAPTION: new InjectionToken<string>('caption'),    // Main title of tile, e.g. NAME, Surname
    SUBHEADER: new InjectionToken<string>('subHeader'), // Subtitle of tile, e.g. job function
    AVATAR: new InjectionToken<string>('avatar'),      // Nickname, e.g. for side menu item
    ROUTERLINK: new InjectionToken<string>('routerLink'), // Where to go after tile is selected
    ICONCLASS: new InjectionToken<string>('iconClass'),   // Icon of
    COLS: new InjectionToken<Observable<number>>('cols'),
    ROWS: new InjectionToken<Observable<number>>('rows'),
    TILECOLORFROM: new InjectionToken<string>('tileColorFrom'),           // Tile tileColor, if not computed from other
    TILECOLORTO: new InjectionToken<string>('tileColorTo'),           // Tile tileColor, if not computed from other
    TILEIMGURL: new InjectionToken<string>('tileImgUrl'), // Tile image, fills full tile
    CONTCOLOR: new InjectionToken<string>('contColor'),   // Background color of content
    // TODO (WM): not used:
    CONTIMGURL: new InjectionToken<string>('contImgUrl'),   // Content image url
  };

  constructor(
    private _input: {
    caption: {
      key: InjectionToken<string>,
      value: string
    },
    subHeader: {
      key: InjectionToken<string>,
      value: string
    },
    avatar: {
      key: InjectionToken<string>,
      value: string
    },
    routerLink: {
      key: InjectionToken<string>,
      value: string
    },
    iconClass: {
      key: InjectionToken<string>,
      value: string
    },
    cols: {
      key: InjectionToken<Observable<number>>,
      value: Observable<number>
    },
    rows: {
      key: InjectionToken<Observable<number>>,
      value: Observable<number>
    },
    tileColorFrom: {
      key: InjectionToken<string>,
      value: string
    },
    tileColorTo: {
      key: InjectionToken<string>,
      value: string
    },
    tileImgUrl: {
      key: InjectionToken<string>,
      value: string
    },
    contColor: {
      key: InjectionToken<string>,
      value: string
    }
  },
    private _component: any,   // Component to call
    private _services: {provide: any, useClass: any, deps: any[]} [],
  ) {}

  get input(): {
    caption: {
      key: InjectionToken<string>;
      value: string
    };
    subHeader: {
      key: InjectionToken<string>,
      value: string
    },
    avatar: {
      key: InjectionToken<string>,
      value: string
    },
    routerLink: {
      key: InjectionToken<string>;
      value: string
    };
    iconClass: {
      key: InjectionToken<string>;
      value: string
    };
    cols: {
      key: InjectionToken<Observable<number>>;
      value: Observable<number>
    };
    rows: {
      key: InjectionToken<Observable<number>>;
      value: Observable<number>
    };
    tileColorFrom: {
      key: InjectionToken<string>;
      value: string
    };
    tileColorTo: {
      key: InjectionToken<string>;
      value: string
    };
    tileImgUrl: {
      key: InjectionToken<string>;
      value: string
    };
    contColor: {
      key: InjectionToken<string>;
      value: string
    }
  } {
    return this._input;
  }

  /**
   * WM: One can have different components with different
   * card functionalities here:
   */
  get component(): any {
    return this._component;
  }

  /**
   * WM: One can have different services with different
   * card functionalities here:
   */
  get services(): any {
    return this._services;
  }
}
