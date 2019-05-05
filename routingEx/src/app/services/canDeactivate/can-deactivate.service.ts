import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanGoOut } from 'src/app/contracts/can-go-out';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CanGoOut>{
  canDeactivate(component: CanGoOut, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.can) {
      return component.can();
    }

    console.log('inside CanDeactivateService', currentRoute.url)
    return true;
  }
  
  constructor() { }
}
