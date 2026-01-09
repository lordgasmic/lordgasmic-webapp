import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddDialogComponent } from './recipe-add-dialog.component';

describe('AddPopupComponent', () => {
  let component: RecipeAddDialogComponent;
  let fixture: ComponentFixture<RecipeAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeAddDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
