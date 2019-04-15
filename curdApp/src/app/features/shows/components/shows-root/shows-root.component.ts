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

  constructor(private showsService: ShowsService) {
    this.shows = this.showsService.getAll();
  }

  ngOnInit() {
  }

  onSelectShowRequested($event) {

  }

  async onSaveRequested(item: Show) {
    await this.showsService.update(item); 
    this.refresh();
    this.selectedShow = null;
  }

  async onDeleteRequested(item: Show) {
    await this.showsService.delete(item.id); 
    this.refresh();
    this.selectedShow = null;
  }

  refresh() {
    throw new Error("Method not implemented.");
  }
}
