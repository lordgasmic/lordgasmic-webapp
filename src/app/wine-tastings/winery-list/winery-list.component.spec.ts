import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineryListComponent } from './winery-list.component';

describe('WineryListComponent', () => {
  let component: WineryListComponent;
  let fixture: ComponentFixture<WineryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WineryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
