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
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'CLEAR-CUT'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'What is CFD?'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.1)'
          }, /*
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: '/assets/coaching-coders-coding-7374.jpg'
          },*/
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url(../../../../assets/coaching-coders-coding-7374.jpg)'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: '0.6'
          }
        }, DashboardUsersComponent /* Reference to the component we'd like to spawn */
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'FAST FORWARD'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'Innovate!'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url(../../../../assets/Verlauf-Amiga-Bildschirm-Hintergrund_600.jpg)'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: '0.3'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'ABOUT'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'About Flow Excellence'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
            value: 'About us'
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
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url(../../../..)'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'ROAD ASSISTANCE'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'CFD Service: Need help? Serving you with CFD'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url(../../../../assets/adult-business-classroom-256401.jpg)'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'MISSION ACCOMPLISHED'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'Reference projects'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
            value: 'CFD Projects'
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
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url(../../../../assets/blur-computer-connection-442150.jpg)'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'THE WORLD IN DATA'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'Geographic Information Services'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
            value: 'GIS'
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
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url(../../../../assets/pexels-photo-325223.jpeg)'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'users7'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'users3'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
            value: this.cols_sml
          },
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url(../../../../assets/pexels-photo-267507.jpeg)'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'users8'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'users3'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url(../../../../assets/john-carlisle-539580-unsplash.jpg)'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'users9<p>hallohallo</p>kljlkjjlj'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'users3'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'blue'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: '0.5'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'users10'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'users3'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'blue'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'users11'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'users3'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'blue'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'users12'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'users3'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
            value: this.cols_sml
          },
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'url("../../../../assets/EG 180612 Flowexcellence Typehead.png")'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          caption: {
            key: DashboardCard.metadata.CAPTION,
            value: 'users13'
          },
          subHeader: {
            key: DashboardCard.metadata.SUBHEADER,
            value: 'users3'
          },
          avatar: {
            key: DashboardCard.metadata.AVATAR,
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
            value: this.cols_sml
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          tileColorFrom: {
            key: DashboardCard.metadata.TILECOLORFROM,
            value: 'rgba(0,0,0,0.7)'
          },
          tileColorTo: {
            key: DashboardCard.metadata.TILECOLORTO,
            value: 'rgba(0,0,0,0.7)'
          },
          tileImgUrl: {
            key: DashboardCard.metadata.TILEIMGURL,
            value: 'blue'
          },
          contColor: {
            key: DashboardCard.metadata.CONTCOLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
  }

}
