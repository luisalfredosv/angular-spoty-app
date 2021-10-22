import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('The form should return invalid', () => {

    const mockCredentials = {
      email: '0x0x0x0x0x0',
      password: '123'
    }

    const emailForm: any= component.formLogin.get('email')
    const passwordForm: any= component.formLogin.get('password')

    emailForm?.setValue(mockCredentials.email)
    passwordForm?.setValue(mockCredentials.password)

    expect(component.formLogin.invalid).toEqual(true);
  });
});
