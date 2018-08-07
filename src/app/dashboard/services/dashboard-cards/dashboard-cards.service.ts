import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DashboardCard} from '../../cards/dashboard-card';

@Injectable()
export class DashboardCardsService {

  constructor() {
  }

  private _cards: BehaviorSubject<DashboardCard[]> = new BehaviorSubject<DashboardCard[]>([]);

  addCard(card: DashboardCard): void {
    this._cards.next(this._cards.getValue().concat(card));
    console.log('Total cards present: ' + this._cards.getValue().length);
    console.log(this._cards.getValue());
  }

  removeAllCards(): void {
    this._cards.getValue().length = 0;
    console.log('Cards removed. Total cards present: ' + this._cards.getValue().length);
  }

  get cards(): BehaviorSubject<DashboardCard[]> {
    return this._cards;
  }
}
