import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/features/shows/services/shows.service';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-shows-count',
  templateUrl: './shows-count.component.html',
  styleUrls: ['./shows-count.component.scss']
})
export class ShowsCountComponent implements OnInit {

  count$: Observable<number>;

  constructor(showsService: ShowsService) {
    this.count$ = showsService.shows$.pipe(map(x => x.length), distinctUntilChanged());
  }

  ngOnInit() {
  }

}
