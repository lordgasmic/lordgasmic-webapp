import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingHeaderComponent } from './ordering-header.component';

describe('MainComponent', () => {
  let component: OrderingHeaderComponent;
  let fixture: ComponentFixture<OrderingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
