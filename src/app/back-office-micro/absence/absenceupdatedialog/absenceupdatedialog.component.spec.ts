import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceupdatedialogComponent } from './absenceupdatedialog.component';

describe('AbsenceupdatedialogComponent', () => {
  let component: AbsenceupdatedialogComponent;
  let fixture: ComponentFixture<AbsenceupdatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceupdatedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbsenceupdatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
