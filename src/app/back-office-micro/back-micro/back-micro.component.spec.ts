import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackMicroComponent } from './back-micro.component';

describe('BackMicroComponent', () => {
  let component: BackMicroComponent;
  let fixture: ComponentFixture<BackMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackMicroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
