import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogbComponent } from './dialogb.component';

describe('DialogbComponent', () => {
  let component: DialogbComponent;
  let fixture: ComponentFixture<DialogbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
