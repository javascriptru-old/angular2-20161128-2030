import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  sum(a: number, b:number): number {
    return a + b;
  }
}
