import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DashboardCard} from '../dashboard-card';


@Component({
  selector: 'app-dashboard-cards-spawner',
  templateUrl: './dashboard-cards-spawner.component.html',
  styleUrls: ['./dashboard-cards-spawner.component.scss']
})
export class DashboardCardsSpawnerComponent implements OnInit {
  // Referencen container via ViewContainerRef as a ViewChild into the spawn element
  // (Syntax changes from ng 8 to ng 10, see changelog)
  // https://stackoverflow.com/questions/48330760/cannot-read-property-viewcontainerref-of-undefined
  @ViewChild('spawn', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  @Input() set card(data: DashboardCard) {
    if (!data) {
      return;
    }
    console.log('\n hier');
    console.log(JSON.stringify( data));
    let inputProviders = Object.keys(data.input).map((inputName) => {
      console.log(JSON.stringify( {provide: data.input[inputName].key, useValue: data.input[inputName].value, deps: []}));
      return {provide: data.input[inputName].key, useValue: data.input[inputName].value, deps: []};
    });
    // Optionally include services
    inputProviders = inputProviders.concat(data.services);
    // WM: Original: const injector = Injector.create(inputProviders, this.container.parentInjector);
    // not deprecated on Injector ???????????
    // const injector = Injector.create(inputProviders);
    const injector = Injector.create( {providers: inputProviders});
    const factory = this.resolver.resolveComponentFactory(data.component);
    const component = factory.create(injector);
    this.container.insert(component.hostView);
    console.log(this.container);
  }

  ngOnInit(): void {
  }

}
