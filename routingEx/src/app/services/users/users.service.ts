import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getAll(): Observable<string[]> {
    return of(['shimon', 'moshe', 'david', 'naama']).pipe(delay(3000));
  }
  
  constructor() { }
}
