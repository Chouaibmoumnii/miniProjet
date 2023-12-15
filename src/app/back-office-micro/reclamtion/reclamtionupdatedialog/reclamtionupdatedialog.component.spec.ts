import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamtionupdatedialogComponent } from './reclamtionupdatedialog.component';

describe('ReclamtionupdatedialogComponent', () => {
  let component: ReclamtionupdatedialogComponent;
  let fixture: ComponentFixture<ReclamtionupdatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamtionupdatedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamtionupdatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
