import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursupdatedialogComponent } from './coursupdatedialog.component';

describe('CoursupdatedialogComponent', () => {
  let component: CoursupdatedialogComponent;
  let fixture: ComponentFixture<CoursupdatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursupdatedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursupdatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
