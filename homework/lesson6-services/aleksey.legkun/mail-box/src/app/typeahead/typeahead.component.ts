import { Component, Output, EventEmitter } from '@angular/core';
import { MailboxService } from './../services/mailbox.service';
import { LetterService } from './../services/letter.service';
import { IError } from './../interfaces/error';


@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
    providers: [MailboxService, LetterService]
})
export class TypeaheadComponent {
  private errorMessage: string;

  @Output() 
  onError = new EventEmitter<IError>();

  constructor(private mailboxService: MailboxService, private letterService: LetterService) {}

}
