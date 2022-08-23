import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApprovedCountersComponent } from './approved-counters.component';

describe('ApprovedCountersComponent', () => {
  let component: ApprovedCountersComponent;
  let fixture: ComponentFixture<ApprovedCountersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedCountersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
