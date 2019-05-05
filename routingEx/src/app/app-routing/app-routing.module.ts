import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { moreData: 'Resgular home' } },
  { path: 'home2', component: HomeComponent, data: { moreData: 'Home 2' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
