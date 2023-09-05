import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WineCardXListComponent } from './wine-card-xlist.component';

describe('WineCardComponent', () => {
  let component: WineCardXListComponent;
  let fixture: ComponentFixture<WineCardXListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WineCardXListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WineCardXListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
