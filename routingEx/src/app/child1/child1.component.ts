import { Component, OnInit } from '@angular/core';
import { CanGoOut } from '../contracts/can-go-out';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, CanGoOut {
  canGoOut = false;
  can(): boolean {
    return this.canGoOut;
  }

  constructor() { }

  ngOnInit() {
  }

}
