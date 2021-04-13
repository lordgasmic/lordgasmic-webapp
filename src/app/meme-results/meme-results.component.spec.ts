import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeResultsComponent } from './meme-results.component';

describe('MemeResultsComponent', () => {
  let component: MemeResultsComponent;
  let fixture: ComponentFixture<MemeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
