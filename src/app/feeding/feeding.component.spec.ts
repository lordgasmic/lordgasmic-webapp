import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedingComponent } from './feeding.component';

describe('FeedingComponent', () => {
  let component: FeedingComponent;
  let fixture: ComponentFixture<FeedingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
