import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSecurity } from './login-security';

describe('LoginSecurity', () => {
  let component: LoginSecurity;
  let fixture: ComponentFixture<LoginSecurity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSecurity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSecurity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
