import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneLetterName'
})
export class OneLetterNamePipe implements PipeTransform {

  transform(value: string): string | null {
    const newValue = value.slice(0, 1) + '.';
    if (newValue){
      return newValue;
    }
    return null;
  }

}
