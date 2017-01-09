import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMailbox } from './../../interfaces/mailbox';
import { ILetter } from './../../interfaces/letter';
import { IError } from './../../interfaces/error';
import { LetterService } from './../../services/letter.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css'],
  providers: [LetterService]
})
export class MailListComponent implements OnInit {

  public letters: Array<ILetter> = [];
  private _currentMailbox: IMailbox;
  public isListMode: boolean = true;
  public letterForOpen: ILetter;
  public filterValue: string;

  constructor(private letterService: LetterService) {}
  ngOnInit() {}

  @Input('currentMailbox') 
  public set currentMailbox(value: IMailbox) {
    this.onChangeMailbox(value);
  }

  @Output() 
  onError = new EventEmitter<IError>();



  private openLetter(letter: ILetter)
  {
     this.letterForOpen = letter;
     this.isListMode = false;
  }

  private closeLetter()
  {
     this.isListMode = true;
     this.letterForOpen = undefined;
  }
  

  private onChangeMailbox(value: IMailbox)
  {
         this._currentMailbox = value;
         this.filterValue = undefined;
         this.letterService.getList(value)
                     .subscribe(
                       data => {
                         this.letters = data as Array<ILetter>;
                         this.closeLetter();
                        },

                       error => {
                         let er: IError = {
                           message: <any>error
                         };

                         this.onError.emit(er);
                       });
  }
  


}
