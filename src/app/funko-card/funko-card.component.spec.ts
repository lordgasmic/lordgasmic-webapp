import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoCardComponent } from './funko-card.component';

describe('FunkoCardComponent', () => {
  let component: FunkoCardComponent;
  let fixture: ComponentFixture<FunkoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
