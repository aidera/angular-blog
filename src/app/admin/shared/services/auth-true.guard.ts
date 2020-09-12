import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthTrueGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/admin', 'login'], {
        queryParams: {
          loginAgain: true
        }
      });
      return undefined;
    }
  }
}
