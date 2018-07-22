export abstract class AbstractDashboardCard {
  constructor(private _name: string,
              private _name2: string,
              private _routerLink: string,
              private _iconClass: string,
              private _col: string,
              private _row: string,
              private _color: string,
              private _backImgUrl: string,
              private _opacity: string) {
  }

  get name(): string {
    return this._name;
  }

  get name2(): string {
    return this._name2;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  get iconClass(): string {
    return this._iconClass;
  }

  get col(): string {
    return this._col;
  }

  get row(): string {
    return this._row;
  }

  get color(): string {
    return this._color;
  }

  get backImgUrl(): string {
    return this._backImgUrl;
  }

  get opacity(): string {
    return this._opacity;
  }
}
