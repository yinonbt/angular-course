import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ParentComponent } from '../parent/parent.component';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { CanDeactivateService } from '../services/canDeactivate/can-deactivate.service';
import { LoginComponent } from '../login/login.component';
import { OnlyUsersComponent } from '../only-users/only-users.component';
import { AuthService } from '../services/auth/auth.service';
import { UsersResolverService } from '../services/users/users-resolver.service';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canDeactivate: [CanDeactivateService] },
  { path: 'home', component: HomeComponent, data: { moreData: 'Resgular home' } },
  { path: 'home2', component: HomeComponent, data: { moreData: 'Home 2' } },
  {
    path: 'parent', component: ParentComponent,
    canDeactivate: [CanDeactivateService],
    children: [
      { path: 'child1', component: Child1Component, canDeactivate: [CanDeactivateService] },
      { path: 'child2', component: Child2Component },
      { path: '', redirectTo: 'child1', pathMatch: 'full' }
    ]
  },
  {
    path: 'users', component: OnlyUsersComponent, canActivate: [AuthService],
    resolve: { users: UsersResolverService }
  },
  { path: 'about', component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
