import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WineTastingComponent } from './wine-tasting.component';

describe('WineTastingComponent', () => {
  let component: WineTastingComponent;
  let fixture: ComponentFixture<WineTastingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WineTastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
