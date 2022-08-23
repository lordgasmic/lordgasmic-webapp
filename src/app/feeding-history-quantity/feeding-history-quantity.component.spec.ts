import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedingHistoryQuantityComponent } from './feeding-history-quantity.component';

describe('FeedingHistoryQuantityComponent', () => {
  let component: FeedingHistoryQuantityComponent;
  let fixture: ComponentFixture<FeedingHistoryQuantityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedingHistoryQuantityComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingHistoryQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
