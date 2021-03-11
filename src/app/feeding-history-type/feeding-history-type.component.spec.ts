import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingHistoryTypeComponent } from './feeding-history-type.component';

describe('FeedingHistoryTypeComponent', () => {
  let component: FeedingHistoryTypeComponent;
  let fixture: ComponentFixture<FeedingHistoryTypeComponent>;

  beforeEach(async(() => {
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
