import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   console.log(params);
    // });

    this.route.data.pluck('user').subscribe((user) => {
console.log(user);

    })
  }

}
