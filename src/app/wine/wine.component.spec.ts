import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineComponent } from './wine.component';

describe('WineComponent', () => {
  let component: WineComponent;
  let fixture: ComponentFixture<WineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
