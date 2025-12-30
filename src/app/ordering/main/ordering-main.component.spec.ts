import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingMainComponent } from './ordering-main.component';

describe('MainComponent', () => {
  let component: OrderingMainComponent;
  let fixture: ComponentFixture<OrderingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingMainComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
