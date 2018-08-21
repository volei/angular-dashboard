import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DashboardCard} from '../dashboard-card';


@Component({
  selector: 'app-dashboard-cards-spawner',
  templateUrl: './dashboard-cards-spawner.component.html',
  styleUrls: ['./dashboard-cards-spawner.component.scss']
})
export class DashboardCardsSpawnerComponent implements OnInit {
  @ViewChild('spawn', {read: ViewContainerRef}) container;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  @Input() set card(data: DashboardCard) {
    if (!data) {
      return;
    }
    console.log(JSON.stringify( data));
    let inputProviders = Object.keys(data.input).map((inputName) => {
      console.log(JSON.stringify( {provide: data.input[inputName].key, useValue: data.input[inputName].value, deps: []}));
      return {provide: data.input[inputName].key, useValue: data.input[inputName].value, deps: []};
    });
    // Optionally include services
    inputProviders = inputProviders.concat(data.services);
    // WM: Original: const injector = Injector.create(inputProviders, this.container.parentInjector);
    // not deprecated on Injector ??????????
    const injector = Injector.create(inputProviders, this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(data.component);
    const component = factory.create(injector);
    this.container.insert(component.hostView);
  }

  ngOnInit() {
  }

}
