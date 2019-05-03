import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routingEx';
  isLoading = false;
  redirctTo(url: string) {
    this.router.navigate(['../', url], { relativeTo: this.activetedRoute });
  }

  constructor(private router: Router, private activetedRoute: ActivatedRoute) {
    router.events.pipe(filter(x => x instanceof NavigationStart)).subscribe(x => {
      this.isLoading = true;
      console.log('NavigationStart');
    }
    );
    router.events.pipe(filter(x => x instanceof NavigationEnd)).subscribe(x => {
      this.isLoading = false;
      console.log('NavigationEnd');

    });

  }
}
