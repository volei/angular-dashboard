import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {DashboardCardsSpawnerComponent} from './dashboard-cards-spawner.component';

describe('DashboardCardsSpawnerComponent', () => {
  let component: DashboardCardsSpawnerComponent;
  let fixture: ComponentFixture<DashboardCardsSpawnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCardsSpawnerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardsSpawnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
