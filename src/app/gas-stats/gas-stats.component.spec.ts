import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStatsComponent } from './gas-stats.component';

describe('GasStatsComponent', () => {
  let component: GasStatsComponent;
  let fixture: ComponentFixture<GasStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
