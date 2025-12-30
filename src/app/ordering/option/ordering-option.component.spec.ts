import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingOptionComponent } from './ordering-option.component';

describe('OptionComponent', () => {
  let component: OrderingOptionComponent;
  let fixture: ComponentFixture<OrderingOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingOptionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
