import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeHomeComponent } from './meme-home.component';

describe('MemeHomeComponent', () => {
  let component: MemeHomeComponent;
  let fixture: ComponentFixture<MemeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
