import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationdialogComponent } from './planificationdialog.component';

describe('PlanificationdialogComponent', () => {
  let component: PlanificationdialogComponent;
  let fixture: ComponentFixture<PlanificationdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificationdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanificationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
