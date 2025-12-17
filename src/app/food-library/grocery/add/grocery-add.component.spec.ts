import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryAddComponent } from './grocery-add.component';

describe('AddComponent', () => {
  let component: GroceryAddComponent;
  let fixture: ComponentFixture<GroceryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryAddComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GroceryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
