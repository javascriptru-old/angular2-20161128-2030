import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Bob';
  title = 'app works!';
  minValue = 10;
  show = true;
  users = [517,23,233];
}
