import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoPaginationComponent } from './funko-pagination.component';

describe('PaginationComponent', () => {
  let component: FunkoPaginationComponent;
  let fixture: ComponentFixture<FunkoPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunkoPaginationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FunkoPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
