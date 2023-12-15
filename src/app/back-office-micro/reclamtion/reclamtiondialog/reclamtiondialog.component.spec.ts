import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamtiondialogComponent } from './reclamtiondialog.component';

describe('ReclamtiondialogComponent', () => {
  let component: ReclamtiondialogComponent;
  let fixture: ComponentFixture<ReclamtiondialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamtiondialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamtiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
