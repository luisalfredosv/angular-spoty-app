import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  errorSession: Boolean = false
  constructor(
    private authServ: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('',
      [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
      ])
    })
  }

  sendLogin($event: Event):void {
    $event.preventDefault()
    const { email, password  } = this.formLogin.value
    this.authServ.sendCredentials(email, password).subscribe( response => {
      this.router.navigate(['/', 'tracks'])
    }, err => {
      this.errorSession = true
    })

  }

}
