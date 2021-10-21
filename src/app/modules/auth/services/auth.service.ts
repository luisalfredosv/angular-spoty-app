import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(
    private http: HttpClient,
    private cookie: CookieService) {}

  sendCredentials(email: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}/auth/login`, {
      email,
      password,
    }).pipe(
      tap((response: any ) => {
        const { accessToken } = response
        this.cookie.set('accessToken', accessToken,  4, '/')
      })
    )
  }
}
