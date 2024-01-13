import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardCfdComponent } from './dashboard-cfd.component';

describe('DashboardCfdComponent', () => {
  let component: DashboardCfdComponent;
  let fixture: ComponentFixture<DashboardCfdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
