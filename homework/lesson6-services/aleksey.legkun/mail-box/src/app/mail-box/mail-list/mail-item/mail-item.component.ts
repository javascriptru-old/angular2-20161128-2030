import { Component, Input, OnInit } from '@angular/core';
import { ILetter } from './../../../interfaces/letter';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {
 
  @Input('letter')  
  public letter: ILetter;
  
  constructor() {}

  ngOnInit() {}

}
