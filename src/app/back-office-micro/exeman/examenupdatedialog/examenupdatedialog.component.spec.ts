import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenupdatedialogComponent } from './examenupdatedialog.component';

describe('ExamenupdatedialogComponent', () => {
  let component: ExamenupdatedialogComponent;
  let fixture: ComponentFixture<ExamenupdatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamenupdatedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamenupdatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
