import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {MailboxService, Mailbox} from '../mailbox.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mailboxes:Mailbox[];
  @Output() onMailboxEmitter = new EventEmitter<Mailbox>();

  constructor(private mailboxService:MailboxService) {
  }

  ngOnInit() {
    this.mailboxService.getMailboxes()
      .subscribe(mailboxes => {
        this.mailboxes = mailboxes;

        this.onMailbox(this.mailboxes[0]);
      });
  }

  onMailbox(mailbox:Mailbox) {
    console.log('SidebarComponent mailboxId: ' + mailbox._id);
    this.onMailboxEmitter.emit(mailbox)
  }
}
