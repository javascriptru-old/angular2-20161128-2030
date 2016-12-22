import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  randomNumber: number = 0;

  constructor() { 
    this.randomNumber = Math.floor(Math.random() * 100000);
  }

  doSomething() {
    console.log('doSomething');
  }

  getRandomNumber(): number {
    return this.randomNumber;
  }
}
