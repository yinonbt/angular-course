import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<string[]> {
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : string[] | Observable<string[]> | Promise<string[]> {
    return this.userService.getAll();
  }

  constructor(private userService: UsersService) {

  }
}
