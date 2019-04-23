import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowsCountComponent } from './components/shows-count/shows-count.component';
import { ShowsRootComponent } from './features/shows/components/shows-root/shows-root.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowsModule } from './features/shows/shows.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowsCountComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ShowsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
