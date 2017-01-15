import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {MailboxesService, Mailbox} from './services/mailboxes.service';
import {LettersService} from './services/letters.service'

@Component({
    selector: 'app-mail',
    templateUrl: './mail.component.html',
    styleUrls: ['./mail.component.less'],
    providers: [MailboxesService, LettersService]
})
export class MailComponent implements OnInit {

    public data:Mailbox[];

    constructor(private mailboxes:MailboxesService) {
        // Redirect to inbox
        // if(this.router.url === '/mail') {
        //     this.router.navigate(['mail', 'inbox']);
        // }
    }

    ngOnInit() {
        // Get all inboxes
        this.mailboxes.getAll<Mailbox[]>().subscribe(data => this.data = data);
    }

}
