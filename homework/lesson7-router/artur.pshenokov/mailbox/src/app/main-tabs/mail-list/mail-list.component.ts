import {Component, OnInit, Input, OnChanges} from '@angular/core';

import {MailboxService, Mailbox, Letter} from '../../mailbox.service';

@Component({
  selector: 'mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent {

  @Input() letters:Letter[] = [];

}
