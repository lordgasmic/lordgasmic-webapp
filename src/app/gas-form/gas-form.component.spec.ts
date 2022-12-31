import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasFormComponent } from './gas-form.component';

describe('GasFormComponent', () => {
  let component: GasFormComponent;
  let fixture: ComponentFixture<GasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
