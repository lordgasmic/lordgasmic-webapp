import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedingHistoryTypeComponent } from './feeding-history-type.component';

describe('FeedingHistoryTypeComponent', () => {
  let component: FeedingHistoryTypeComponent;
  let fixture: ComponentFixture<FeedingHistoryTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedingHistoryTypeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingHistoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
