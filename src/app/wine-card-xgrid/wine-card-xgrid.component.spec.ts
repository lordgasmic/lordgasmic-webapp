import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCardXgridComponent } from './wine-card-xgrid.component';

describe('WineCardXgridComponent', () => {
  let component: WineCardXgridComponent;
  let fixture: ComponentFixture<WineCardXgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineCardXgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WineCardXgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
