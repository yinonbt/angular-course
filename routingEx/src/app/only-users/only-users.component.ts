import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-only-users',
  templateUrl: './only-users.component.html',
  styleUrls: ['./only-users.component.scss']
})
export class OnlyUsersComponent implements OnInit {

  users: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute) {
    // this.usersService.getAll().subscribe(x => {
    //   this.users = x;
    // });

    console.log(activatedRoute.snapshot.data);
    this.users = activatedRoute.snapshot.data.users;
  }

  ngOnInit() {
  }

}
