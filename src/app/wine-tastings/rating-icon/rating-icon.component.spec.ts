import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingIconComponent } from './rating-icon.component';

describe('RatingIconComponent', () => {
  let component: RatingIconComponent;
  let fixture: ComponentFixture<RatingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
