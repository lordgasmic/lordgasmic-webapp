import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWineImageAddComponent } from './dialog-wine-image-add.component';

describe('DialogWineImageAddComponent', () => {
  let component: DialogWineImageAddComponent;
  let fixture: ComponentFixture<DialogWineImageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWineImageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWineImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
