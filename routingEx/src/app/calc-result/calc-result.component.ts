import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.scss']
})
export class CalcResultComponent implements OnInit, OnDestroy {

  sum$: Observable<number>;
  message = 'Result:';
  op = '*';


  constructor(private activatedRoute: ActivatedRoute) {
    console.log('Calc Ctor');
    this.sum$ = combineLatest(activatedRoute.fragment, activatedRoute.params)
      .pipe(map(([hash, params]) => {
        hash = hash || '*';
        console.log('Works');
        return eval(+params.xParam + hash + +params.yParam);
      }));

    activatedRoute.queryParams
      .pipe(filter(qs => qs.message))
      .subscribe(qs => {
        this.message = qs.message;
      });
  }

  ngOnDestroy() {
    console.log('Calc destroy');
  }

  ngOnInit() {
  }

}
