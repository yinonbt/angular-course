import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Show } from '../../model/show';
import { Subscription, Subject, BehaviorSubject, Observable } from 'rxjs';
import { ShowsService } from '../../services/shows.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit, OnDestroy {
  searchTermChanged = new BehaviorSubject<string>('');
  @Input() shows: Show[];
  @Output() selectShowRequested;
  showsAfterFilter$: Observable<Show[]>;
  constructor() {
    this.showsAfterFilter$ = 
    this.searchTermChanged.pipe(debounceTime(200), distinctUntilChanged(), 
    map(keyword => { return this.shows.filter(show => show.name.indexOf(keyword) !== -1); }));
  }

  filterShows(val: string) {
    this.searchTermChanged.next(val);
  }

  onSelected(s: Show) {

  }
  ngOnInit() {
  }

  ngOnDestroy() { }
}
