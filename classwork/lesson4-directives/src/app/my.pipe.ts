import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  transform(users: any[], minValue: number): any {
    return users.filter(user => user > minValue);
  }

}
