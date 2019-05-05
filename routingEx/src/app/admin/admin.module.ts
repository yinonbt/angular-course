import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRootComponent } from './admin-root/admin-root.component';

@NgModule({
  declarations: [AdminRootComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminRootComponent }
    ])
  ]
})
export class AdminModule { }
