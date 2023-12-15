import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursdialogComponent } from './coursdialog.component';

describe('CoursdialogComponent', () => {
  let component: CoursdialogComponent;
  let fixture: ComponentFixture<CoursdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
