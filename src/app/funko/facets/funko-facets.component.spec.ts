import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoFacetsComponent } from './funko-facets.component';

describe('FacetsComponent', () => {
  let component: FunkoFacetsComponent;
  let fixture: ComponentFixture<FunkoFacetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunkoFacetsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FunkoFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
