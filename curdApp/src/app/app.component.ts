import { Component } from '@angular/core';
import { ShowsService } from './features/shows/services/shows.service';
import {map, distinctUntilChanged} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // count = 0;
  count$ = 0;

  constructor(showService: ShowsService) {
    showService.shows$.pipe(map(x => x.length), distinctUntilChanged())
  }
  title = 'curdApp';
}
