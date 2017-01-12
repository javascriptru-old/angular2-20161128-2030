import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {MailboxService, Mailbox} from '../mailbox.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  mailboxes:Mailbox[];

  constructor(private mailboxService:MailboxService) {
  }

  ngOnInit() {
    this.mailboxService.getMailboxes()
      .subscribe(mailboxes => {
        this.mailboxes = mailboxes;
      });
  }
}
