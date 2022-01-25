import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoComponent } from './funko.component';

describe('FunkoComponent', () => {
  let component: FunkoComponent;
  let fixture: ComponentFixture<FunkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
