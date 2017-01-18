import { IUser } from './../iuser';
import { UserService } from '../user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: '<div>{{user?.name}}</div>',
  styleUrls: ['./user-card.component.css'],
  providers: [UserService]
})
export class UserCardComponent implements OnInit {

  @Input() user: IUser;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  someMethod():void {
    this._userService.getOne(1).subscribe(user => this.user = user);
  }

}
