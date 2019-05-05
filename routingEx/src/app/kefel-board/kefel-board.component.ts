import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kefel-board',
  templateUrl: './kefel-board.component.html',
  styleUrls: ['./kefel-board.component.scss']
})
export class KefelBoardComponent implements OnInit {

  numbers: Array<{ x: number, y: number }> = [];

  constructor(private router: Router) {
    for (let index1 = 1; index1 < 10; index1++) {
      for (let index2 = 1; index2 < 10; index2++) {
        this.numbers.push({ x: index1, y: index2 });
      }
    }


  }

  goToResult(item: { x: number, y: number }) {
    this.router.navigate(['/result', item.x, item.y], { queryParams: { message: 'FromBoard' } });
  }

  ngOnInit() {
  }

}
