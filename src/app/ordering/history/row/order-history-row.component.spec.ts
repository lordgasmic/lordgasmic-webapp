import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryRowComponent } from './order-history-row.component';

describe('RowComponent', () => {
  let component: OrderHistoryRowComponent;
  let fixture: ComponentFixture<OrderHistoryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderHistoryRowComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderHistoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
