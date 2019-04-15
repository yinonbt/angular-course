import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsRootComponent } from './shows-root/shows-root.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowEditComponent } from './components/show-edit/show-edit.component';

@NgModule({
  declarations: [ShowsRootComponent, ShowsListComponent, ShowEditComponent],
  imports: [
    CommonModule
  ]
})
export class ShowsModule { }
