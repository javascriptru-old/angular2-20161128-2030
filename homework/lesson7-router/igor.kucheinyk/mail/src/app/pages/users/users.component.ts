import {Component, OnInit} from '@angular/core';
import {UsersService, User} from './services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.less'],
    providers: [UsersService]
})
export class UsersComponent implements OnInit {

    public data:User[];

    constructor(public users:UsersService) {
    }

    ngOnInit() {
        this.users.getAll<User[]>().subscribe(data => this.data = data);
    }

}
