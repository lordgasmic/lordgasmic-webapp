import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedingHistoryBottlesComponent } from './feeding-history-bottles.component';

describe('FeedingHistoryBottlesComponent', () => {
  let component: FeedingHistoryBottlesComponent;
  let fixture: ComponentFixture<FeedingHistoryBottlesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedingHistoryBottlesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingHistoryBottlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
