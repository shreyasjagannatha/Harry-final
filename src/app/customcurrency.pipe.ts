import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Pipe({
  name: 'customcurrency',
  
  standalone: true
})

export class CustomcurrencyPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const [min, max] = value.split('-').map(val => parseInt(val, 10));
    const formattedMin = this.currencyPipe.transform(min, 'USD', 'symbol', '1.0-0');
    const formattedMax = this.currencyPipe.transform(max, 'USD', 'symbol', '1.0-0');

    return formattedMax ? `${formattedMin} - ${formattedMax} million` : `${formattedMin} million`;
  }

}
