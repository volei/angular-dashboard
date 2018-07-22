/**
 * https://github.com/nima200/angular-dashboard/blob/master/src/app/dashboard/cards/dashboard-cards-spawner/dashboard-cards-spawner.component.ts
 */

import {Component, OnInit} from '@angular/core';
import {DashboardCard} from '../cards/dashboard-card';
import {Observable} from 'rxjs';
import {DashboardCardsService} from '../services/dashboard-cards/dashboard-cards.service';
import {ObservableMedia} from '@angular/flex-layout';
import {map, startWith} from 'rxjs/operators';
import {DashboardUsersComponent} from '../cards/dashboard-users/dashboard-users.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  entryComponents: [DashboardUsersComponent]
})
export class DashboardComponent implements OnInit {

  cards: DashboardCard[] = [];
  cols: Observable<number>;
  cols_big: Observable<number>;
  cols_sml: Observable<number>;

  constructor(private cardsService: DashboardCardsService,
              private observableMedia: ObservableMedia) {
    this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });
  }

  ngOnInit() {
    /* Grid column map */
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 4],
      ['md', 8],
      ['lg', 10],
      ['xl', 18]
    ]);
    /* Big card column span map */
    const cols_map_big = new Map([
      ['xs', 1],
      ['sm', 4],
      ['md', 4],
      ['lg', 4],
      ['xl', 4]
    ]);
    /* Small card column span map */
    const cols_map_sml = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]);
    let start_cols: number;
    let start_cols_big: number;
    let start_cols_sml: number;

    /**
     * WM: Initial media size check with flex-layout's ObservableMedia
     * Prepared for 3 tile dimension magnitudes
     * tile-sizes normal, sml and big possible in each dimension
     */
    console.log(cols_map);
    console.log(cols_map_big);
    console.log(cols_map_sml);
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        console.log('cols: ' + mqAlias);
        start_cols = cols;
      }
    });
    cols_map_big.forEach((cols_big, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols_big = cols_big;
      }
    });
    cols_map_sml.forEach((cols_sml, mqAliast) => {
      if (this.observableMedia.isActive(mqAliast)) {
        start_cols_sml = cols_sml;
      }
    });

    /**
     * WM: Pipe in any media size change to the cols[_xxx] observables
     * Each time observableMedia emits, the cols...-observables get
     * fired the respective No. of cols from the cols_map...-presets.
     */
    this.cols = this.observableMedia.asObservable().pipe(
      map(change => {
        console.log('nrm: ' + cols_map.get(change.mqAlias) + '  ' + change.mqAlias);
        return cols_map.get(change.mqAlias);
      }),
      startWith(start_cols));
    this.cols_big = this.observableMedia.asObservable().pipe(
      map(change => {
        console.log('big: ' + cols_map_big.get(change.mqAlias) + '  ' + change.mqAlias);
        return cols_map_big.get(change.mqAlias);
      }),
      startWith(start_cols_big));
    this.cols_sml = this.observableMedia.asObservable().pipe(
      map(change => {
        console.log('sml: ' + cols_map_sml.get(change.mqAlias) + '  ' + change.mqAlias);
        return cols_map_sml.get(change.mqAlias);
      }),
      startWith(start_cols_sml));
    this.createCards();
  }

  createCards(): void {
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'CLEAR-CUT'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'What is CFD?'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_big
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_big
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'yellow'
          }, /*
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: '/assets/coaching-coders-coding-7374.jpg'
          },*/
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url(../../../../assets/coaching-coders-coding-7374.jpg)'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: '0.3'
          }
        }, DashboardUsersComponent /* Reference to the component we'd like to spawn */
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'FAST FORWARD'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'Innovate!'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_big
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'red'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url(../../../../assets/Verlauf-Amiga-Bildschirm-Hintergrund_600.jpg)'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users3'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-link'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'green'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url(../../../..)'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users4'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url(../../../../assets/adult-business-classroom-256401.jpg)'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users5'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_big
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url(../../../../assets/blur-computer-connection-442150.jpg)'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users6'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_big
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_big
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url(../../../../assets/pexels-photo-325223.jpeg)'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users7'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_big
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url(../../../../assets/pexels-photo-267507.jpeg)'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users8'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url(../../../../assets/john-carlisle-539580-unsplash.jpg)'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users9'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'blue'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users10'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'blue'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users11'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'blue'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users12'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'url("../../../../assets/EG 180612 Flowexcellence Typehead.png")'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users13'
          },
          name2: {
            key: DashboardCard.metadata.NAME2,
            value: 'users3'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          },
          backImgUrl: {
            key: DashboardCard.metadata.BACKIMGURL,
            value: 'blue'
          },
          opacity: {
            key: DashboardCard.metadata.OPACITY,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
  }

}
