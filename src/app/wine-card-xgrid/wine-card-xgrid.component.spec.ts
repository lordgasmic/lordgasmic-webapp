import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCardXGridComponent } from './wine-card-xgrid.component';

describe('WineCardXgridComponent', () => {
  let component: WineCardXGridComponent;
  let fixture: ComponentFixture<WineCardXGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WineCardXGridComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WineCardXGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
