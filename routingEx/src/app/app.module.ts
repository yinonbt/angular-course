import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LoginComponent } from './login/login.component';
import { OnlyUsersComponent } from './only-users/only-users.component';
import { AboutComponent } from './about/about.component';
import { KefelBoardComponent } from './kefel-board/kefel-board.component';
import { CalcResultComponent } from './calc-result/calc-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    LoginComponent,
    OnlyUsersComponent,
    AboutComponent,
    KefelBoardComponent,
    CalcResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
