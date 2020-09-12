import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../../../shared/models/User';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {FirebaseAuthResponse} from '../../../shared/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isFetching = false;
  public error$ = new Subject<string>();

  get token(): string {
    const expiresDate = new Date(localStorage.getItem('token-expires'));
    if (new Date() > expiresDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    this.isFetching = true;
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        tap(() => this.isFetching = false),
        catchError(this.handleError.bind(this))
      );
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    const { message } = error.error.error;

    this.isFetching = false;

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Invalid email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found');
        break;
      default:
        break;


    }

    return throwError(error);
  }

  private setToken(response: FirebaseAuthResponse | null): void {
    if (response) {
      const expiresDate = new Date(new Date().getTime() + +response.expiresIn * 1000); // срок исчезновения токена
      localStorage.setItem('token', response.idToken);
      localStorage.setItem('token-expires', expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }

}
