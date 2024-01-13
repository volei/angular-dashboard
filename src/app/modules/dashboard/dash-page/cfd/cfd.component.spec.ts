import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CfdComponent } from './cfd.component';

describe('CfdComponent', () => {
  let component: CfdComponent;
  let fixture: ComponentFixture<CfdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
