import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../../admin/shared/services/auth.service';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';

// Интерсепторы служат для перехвата запросов на сервер.
// Подключаеются в корневом модуле, с определенными настройками (поэтому provideIn: root не сработает)
// Данный интерсептор проверяет, есть ли авторизация у пользователя.
// Если есть авторизация, то интерсептор "клонирует" запрос, передавая ему заголовок авторизации (в данном случае query, а не header)
// Если авторизации нет, то интерсептор перекидывает пользователя на страницу авторизации

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token
        }
      });
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('Interceptor error', error);
          if (error.status === 401) {
            this.auth.logout();
            this.router.navigate(['/admin', 'login'], {
              queryParams: {
                authFailed: true
              }
            });
          }
          return throwError(error);
        })
      );
  }

}
