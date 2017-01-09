import { Component, OnInit, Input } from '@angular/core';
import { ILetter } from './../../../interfaces/letter';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.css']
})
export class MailDetailComponent implements OnInit {

  @Input('letter')  
  public letter: ILetter;

  constructor() { }

  ngOnInit() {}

}
