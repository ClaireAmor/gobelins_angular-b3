import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitChar'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string,limit: number) {
    if (text) {
      return (text.length > length) ? text.substr(0, limit) + '...': text;
    } else {
      return '';
    }
  }

}
