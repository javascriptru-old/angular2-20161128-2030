import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService, User} from '../services/users.service'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
    providers: [UsersService]
})
export class UserComponent implements OnInit, OnDestroy {

    public sub:any;
    public data:User;

    constructor(private route:ActivatedRoute, private users:UsersService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.users.getOne<User>(params['userID']).subscribe(data => this.data = data);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
