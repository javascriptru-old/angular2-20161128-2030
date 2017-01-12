import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {MailboxService, Mailbox, Letter} from '../../mailbox.service';

@Component({
  selector: 'mail-list',
  templateUrl: './mail-list.component.html'
})
export class MailListComponent implements OnInit {

  @Input() letters:Letter[] = [];

  constructor(private mailboxService:MailboxService,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.route
      .params
      .map(params => params['id'])
      .subscribe(id => {
          console.log('action: ' + id);
          this.getLettersByTitle(id);
        }
      );
  }

  private getLettersByTitle(mailboxTitle:string) {
    this.mailboxService.getMailboxes().subscribe(mailboxes => {
      mailboxes.forEach(mailbox => {
        if (mailbox.title === mailboxTitle) {
          this.mailboxService.getLettersByMailbox(mailbox._id).subscribe(letters => this.letters = letters);
        }
      });
    });
  }
}
