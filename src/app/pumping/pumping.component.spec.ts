import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PumpingComponent } from './pumping.component';

describe('PumpingComponent', () => {
  let component: PumpingComponent;
  let fixture: ComponentFixture<PumpingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PumpingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
