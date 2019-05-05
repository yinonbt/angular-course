import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(x => {
      console.log(x);
    });
    console.log('Home Ctor');
    // console.group('');
    // console.groupEnd();
  }

  ngOnDestroy() {
    console.log('Home destroy');

  }
  ngOnInit() {
  }

}
