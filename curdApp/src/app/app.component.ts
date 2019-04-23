import { Component } from '@angular/core';
import { ShowsService } from './features/shows/services/shows.service';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curdApp';
  isShowCountVisible = true;
  count$: Observable<number>;

  constructor(showService: ShowsService) {
    showService.shows$.pipe(
      map(x => x.length),
      distinctUntilChanged()
    );
  }

  changeVisible() {
    this.isShowCountVisible = true;
  }
}
