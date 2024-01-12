import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogniSignupComponent } from './logni-signup.component';

describe('LogniSignupComponent', () => {
  let component: LogniSignupComponent;
  let fixture: ComponentFixture<LogniSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogniSignupComponent]
    });
    fixture = TestBed.createComponent(LogniSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
