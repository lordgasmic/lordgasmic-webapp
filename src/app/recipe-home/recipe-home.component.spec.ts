import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecipeHomeComponent } from './recipe-home.component';

describe('RecipeHomeComponent', () => {
  let component: RecipeHomeComponent;
  let fixture: ComponentFixture<RecipeHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
