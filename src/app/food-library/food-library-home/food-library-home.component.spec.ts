import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLibraryHomeComponent } from './food-library-home.component';

describe('FoodLibraryHomeComponent', () => {
  let component: FoodLibraryHomeComponent;
  let fixture: ComponentFixture<FoodLibraryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodLibraryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodLibraryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
