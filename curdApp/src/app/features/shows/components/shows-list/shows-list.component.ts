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
export class ShowsListComponent implements OnChanges{
  
  searchTermChanged = new BehaviorSubject<string>('');

  @Input()
  shows: Show[];

  // showsAfterFilter$: Observable<Show[]>;
  showsAfterFilter: Show[];

  @Output()
  selectShowRequested = new EventEmitter<Show>();

  constructor() {
    // this.showsAfterFilter$ = this.searchTermChanged
    //   .pipe(debounceTime(200),
    //     map(x => x.trim()),
    //     distinctUntilChanged(),
    //     map(keyword => {
    //       return this.shows.filter(show => show.name.indexOf(keyword) !== -1);
    //     }));
  }

  ngOnChanges(): void {
    console.log('shows Input param: ', this.shows);
    this.showsAfterFilter = this.shows;
  }

  filterShows(val: string) {
    this.searchTermChanged.next(val);
  }

  onSelected(s: Show) {
    this.selectShowRequested.emit(s);
  }
}
