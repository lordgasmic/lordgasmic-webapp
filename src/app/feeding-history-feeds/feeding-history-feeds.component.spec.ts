import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedingHistoryFeedsComponent } from './feeding-history-feeds.component';

describe('FeedingHistoryFeedsComponent', () => {
  let component: FeedingHistoryFeedsComponent;
  let fixture: ComponentFixture<FeedingHistoryFeedsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedingHistoryFeedsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingHistoryFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
