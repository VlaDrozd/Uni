import { NumberSymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: string, symbol = '$', ...args: unknown[]): string {
    const filter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    value = value.toString().split('').filter((el) => filter.indexOf(el) > -1).join('');
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ` ${symbol}`;
  }

}
