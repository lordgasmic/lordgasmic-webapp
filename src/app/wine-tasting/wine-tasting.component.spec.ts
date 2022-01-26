import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineTastingComponent } from './wine-tasting.component';

describe('WineTastingComponent', () => {
  let component: WineTastingComponent;
  let fixture: ComponentFixture<WineTastingComponent>;

  beforeEach(async(() => {
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
