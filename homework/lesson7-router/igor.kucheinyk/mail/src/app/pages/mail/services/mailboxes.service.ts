import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CollectionService} from '../../../services/collection.service';

@Injectable()
export class MailboxesService extends CollectionService {

    public collectionName:string = 'mailboxes';

    constructor(public http: Http) {
        super(http);
    }

}

export class Mailbox {
    _id:string;
    title:string;
}


