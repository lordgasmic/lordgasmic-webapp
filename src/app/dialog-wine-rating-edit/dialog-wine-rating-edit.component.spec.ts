import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWineRatingEditComponent } from './dialog-wine-rating-edit.component';

describe('DialogWineRatingEditComponent', () => {
  let component: DialogWineRatingEditComponent;
  let fixture: ComponentFixture<DialogWineRatingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogWineRatingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWineRatingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
