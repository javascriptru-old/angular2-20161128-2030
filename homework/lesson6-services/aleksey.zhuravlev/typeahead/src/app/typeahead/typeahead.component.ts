import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/empty'

import { User } from './user'
import { UsersService } from './users.service'

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
  providers: [UsersService]
})
export class TypeaheadComponent implements OnInit {

  items: Observable<User>;
  filter: string;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
  }

  inputHandler():void {
      this.items = this.usersService.getAll(this.filter); 
  }
  itemClickHandler(fullName: string)
  {
    this.filter = fullName;
    this.items = Observable.empty<User>();
  }
}