import { Pipe, PipeTransform } from '@angular/core';
import { ILetter } from './../../interfaces/letter';

@Pipe({
  name: 'letterFilter',
  pure: false
})
export class LetterFilterPipe implements PipeTransform {

  transform(letters: Array<ILetter>, filterValue: string,): any {
    if(letters === undefined )
     return undefined;

    filterValue= filterValue || '';
    return letters.filter(letter => 
          (letter.subject !== undefined && letter.subject.includes(filterValue))
          || (letter.body !== undefined && letter.body.includes(filterValue))
           || (letter.to !== undefined && letter.to.includes(filterValue)));

  }

}