import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Show } from '../model/show';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  delete(id: any) {
    throw new Error("Method not implemented.");
  }
  private showsSubject: BehaviorSubject<Show[]> = new BehaviorSubject<Show[]>([]);
  get shows$():Observable<Show[]> {
    // Observable is father of BehaviorSubject so AsObservable is not needed
    return this.showsSubject;
  }

  update(item: Show) {
    const url = `${environment.apiUrl}shows/${item.id}`;
    return this.http.put<Show>(url, item).pipe(tap(o => {this.loadAllShows();}))
  }

  constructor(private http: HttpClient) { }

  loadAllShows() {
    const url = `${environment.apiUrl}shows`;
    this.http.get<Show[]>(url).subscribe(result => {
      this.shows$.next(result);
    });
  }
  getAll(): Observable<Show[]> {
    const url = `${environment.apiUrl}shows`;
    return this.http.get<Show[]>(url);
  }
}
