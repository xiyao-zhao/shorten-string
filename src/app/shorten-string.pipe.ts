import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenString',
})
export class ShortenStringPipe implements PipeTransform {
  transform(value: string, collapse: boolean) {
    if (value.length > 50) {
      if (collapse === false) {
        return value.slice(0, 50) + '...';
      } else return value;
    }
    return;
  }
}
