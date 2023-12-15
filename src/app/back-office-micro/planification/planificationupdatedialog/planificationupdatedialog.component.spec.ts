import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationupdatedialogComponent } from './planificationupdatedialog.component';

describe('PlanificationupdatedialogComponent', () => {
  let component: PlanificationupdatedialogComponent;
  let fixture: ComponentFixture<PlanificationupdatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificationupdatedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanificationupdatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
