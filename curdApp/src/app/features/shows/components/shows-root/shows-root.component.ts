import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../../model/show';
import { ShowsService } from '../../services/shows.service';

@Component({
  selector: 'app-shows-root',
  templateUrl: './shows-root.component.html',
  styleUrls: ['./shows-root.component.scss']
})
export class ShowsRootComponent implements OnInit {
  shows: Observable<Show[]>;
  selectedShow: Show;

  onSelectShowRequested(s: Show) {
    this.selectedShow = s;
  }

  async onDeleteRequested(item: Show) {
    //  this.showsService.delete(item.id).then().catch()
    try {
      await this.showsService.delete(item.id);
      this.selectedShow = null;
    } catch (error) {

    }
  }
  async onSaveRequested(item: Show) {
    await this.showsService.update(item);
    this.selectedShow = null;
  }
  constructor(private showsService: ShowsService) {
    this.shows = this.showsService.shows$;
    this.showsService.loadAllShows();

  }

  ngOnInit() {
  }
}
