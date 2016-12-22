import { LogService } from './log.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent {
  title = 'app works!';
  randomNumber: number = 0;

  constructor(private logService: LogService){
    this.randomNumber = this.logService.getRandomNumber();
  }
}
