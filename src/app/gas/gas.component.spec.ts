import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GasComponent } from './gas.component';

describe('GasComponent', () => {
  let component: GasComponent;
  let fixture: ComponentFixture<GasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
