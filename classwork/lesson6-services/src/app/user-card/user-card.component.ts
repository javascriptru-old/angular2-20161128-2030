import { Observable } from 'rxjs/src/Observable';
import { LogService } from './../log.service';
import { Component, OnInit, Inject } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html'
})
export class UserCardComponent implements OnInit {

  public users : any;
  randomNumber: number = 0;

  constructor(private userService: UserService,
  private logService: LogService) { 
    this.randomNumber = this.logService.getRandomNumber();
  }

  ngOnInit() {
    this.users = this.userService.getAll();
  }

}
