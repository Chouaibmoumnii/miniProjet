import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamendialogComponent } from './examendialog.component';

describe('ExamendialogComponent', () => {
  let component: ExamendialogComponent;
  let fixture: ComponentFixture<ExamendialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamendialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamendialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
