import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencedialogComponent } from './absencedialog.component';

describe('AbsencedialogComponent', () => {
  let component: AbsencedialogComponent;
  let fixture: ComponentFixture<AbsencedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsencedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbsencedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
