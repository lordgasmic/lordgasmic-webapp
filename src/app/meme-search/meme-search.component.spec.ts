import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeSearchComponent } from './meme-search.component';

describe('MemeSearchComponent', () => {
  let component: MemeSearchComponent;
  let fixture: ComponentFixture<MemeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
