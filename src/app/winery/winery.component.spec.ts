import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WineryComponent } from './winery.component';

describe('WineryComponent', () => {
  let component: WineryComponent;
  let fixture: ComponentFixture<WineryComponent>;

  beforeEach(waitForAsync(() => {
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
