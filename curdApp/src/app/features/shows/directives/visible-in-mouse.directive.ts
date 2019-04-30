import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appVisibleInMouse]'
})
export class VisibleInMouseDirective {
  @Input()
  appVisibleInMouse = 'red';

  @HostBinding('style.background-color')
  currentColor = 'transparent';

  @HostListener('mouseenter')
  changeColor() {
    this.currentColor = this.appVisibleInMouse;
  }

  @HostListener('mouseout')
  changeColorBack() {
    this.currentColor = 'transparent';
  }
  
  constructor() { }

}
