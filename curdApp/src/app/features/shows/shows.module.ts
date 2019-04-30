import { ShowsRootComponent } from './components/shows-root/shows-root.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowEditComponent } from './components/show-edit/show-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VisibleInMouseDirective } from './directives/visible-in-mouse.directive';

@NgModule({
  declarations: [ShowsRootComponent, ShowsListComponent, ShowEditComponent, VisibleInMouseDirective],
  exports: [ShowsRootComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class ShowsModule { }
