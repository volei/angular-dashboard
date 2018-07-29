export abstract class AbstractDashboardCard {
  constructor(private _caption: string,
              private _subHeader: string,
              private _routerLink: string,
              private _iconClass: string,
              private _col: string,
              private _row: string,
              private _tileColorFrom: string,
              private _tileColorTo: string,
              private _tileImgUrl: string,
              private _contColor: string) {
  }

  get caption(): string {
    return this._caption;
  }

  get subHeader(): string {
    return this._subHeader;
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

  get tileColorFrom(): string {
    return this._tileColorFrom;
  }

  get tileColorTo(): string {
    return this._tileColorTo;
  }
  get tileImgUrl(): string {
    return this._tileImgUrl;
  }

  get contColor(): string {
    return this._contColor;
  }
}
