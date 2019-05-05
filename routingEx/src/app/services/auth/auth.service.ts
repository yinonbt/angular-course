import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  login() {
    localStorage.setItem('access_token', 'YES');
    this.isAuthenticated$.next(true);
  }
  logout() {
    localStorage.removeItem('access_token');
    this.isAuthenticated$.next(false);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isAuthenticated$.value) {
      return true;
    } else {
      return this.router.parseUrl(`/login?message=url not allowed....`);
    }

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return null;
  }





  constructor(private router: Router) { }
}
