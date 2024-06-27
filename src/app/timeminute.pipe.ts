import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeminute',
  standalone: true
})
export class TimeminutePipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined || value === null || +value < 0) {
      return '';
    }

    const hours = Math.floor(+value / 60);
    const minutes = +value % 60;
    return `${hours}h ${minutes}m`;
  }

}
