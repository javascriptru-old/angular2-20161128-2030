import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '!!!!app works!';
  public mainColor: string;
  public user: User = {
    name: 'Bob',
    age: 20
  };

  public doSomthing(color) {
    this.mainColor = color;
  }
}
