import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemanComponent } from './exeman.component';

describe('ExemanComponent', () => {
  let component: ExemanComponent;
  let fixture: ComponentFixture<ExemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
