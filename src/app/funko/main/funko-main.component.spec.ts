import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoMainComponent } from './funko-main.component';

describe('MainComponent', () => {
  let component: FunkoMainComponent;
  let fixture: ComponentFixture<FunkoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunkoMainComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FunkoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
