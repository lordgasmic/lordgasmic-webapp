import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryDepartmentRowComponent } from './grocery-department-row.component';

describe('DepartmentRowComponent', () => {
  let component: GroceryDepartmentRowComponent;
  let fixture: ComponentFixture<GroceryDepartmentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryDepartmentRowComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GroceryDepartmentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
