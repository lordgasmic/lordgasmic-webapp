import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryHomeComponent } from './grocery-home.component';

describe('HomeComponent', () => {
  let component: GroceryHomeComponent;
  let fixture: ComponentFixture<GroceryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryHomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GroceryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
