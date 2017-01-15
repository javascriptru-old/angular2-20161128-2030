import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CollectionService} from '../../../services/collection.service';

@Injectable()
export class UsersService extends CollectionService {

    public collectionName:string = 'users';

    constructor(public http:Http) {
        super(http);
    }

}

export class User {
    _id:string;
    fullName:string;
    email:string;
}