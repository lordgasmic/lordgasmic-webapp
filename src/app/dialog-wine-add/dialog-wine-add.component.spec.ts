import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWineAddComponent } from './dialog-wine-add.component';

describe('DialogWineAddComponent', () => {
  let component: DialogWineAddComponent;
  let fixture: ComponentFixture<DialogWineAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWineAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
