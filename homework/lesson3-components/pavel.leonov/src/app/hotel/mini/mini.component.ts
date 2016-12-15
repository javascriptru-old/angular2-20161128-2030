import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.css']
})
export class MiniComponent implements OnInit {
  waterDegree: number;
  degree: number;

  constructor() {
    this.degree = Math.floor(5 + Math.random() * 30);
    this.waterDegree = Math.floor( + Math.random() * 20);
  }

  @Input('name') name: string;

  @Input('location') location: string;

  ngOnInit() {
  }

}
