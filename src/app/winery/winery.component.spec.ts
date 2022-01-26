import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineryComponent } from './winery.component';

describe('WineryComponent', () => {
  let component: WineryComponent;
  let fixture: ComponentFixture<WineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
