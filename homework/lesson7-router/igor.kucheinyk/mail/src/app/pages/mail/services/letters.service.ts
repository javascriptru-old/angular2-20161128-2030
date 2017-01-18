import {Injectable} from '@angular/core';
import {CollectionService} from '../../../services/collection.service';
import {Http} from '@angular/http';

@Injectable()
export class LettersService extends CollectionService {

    public collectionName:string = 'letters';

    constructor(public http:Http) {
        super(http);
    }

}

export class Letter {
    _id:string;
    to:string;
    subject:string;
    body:string;
    mailbox:string
}