import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Show } from '../../model/show';
import { Subscription, Subject, BehaviorSubject, Observable } from 'rxjs';
import { ShowsService } from '../../services/shows.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnChanges, OnInit {
  
  searchTermChanged = new BehaviorSubject<string>('');

  @Input()
  shows: Show[];

  showsAfterFilter$: Observable<Show[]>;
  // showsAfterFilter: Show[];

  @Output()
  selectShowRequested = new EventEmitter<Show>();
  showSelected: Show;

  constructor() {
    this.showsAfterFilter$ = this.searchTermChanged
      .pipe(debounceTime(400),
        map(x => x.trim()),
        distinctUntilChanged(),
        map(keyword => {
          console.log('keyword is: ', keyword);
          console.log('shows after filter: ', this.shows.filter(show => show.name.indexOf(keyword) !== -1));
          return this.shows.filter(show => show.name.indexOf(keyword) !== -1);
        }));
  }

  ngOnChanges(): void {
    console.log('shows Input param: ', this.shows);
    // this.showsAfterFilter = this.shows;
  }

  ngOnInit() {

  }

  filterShows(val: string) {
    this.searchTermChanged.next(val);
  }

  onSelected(s: Show) {
    this.showSelected = s;
    this.selectShowRequested.emit(s);
  }
}
