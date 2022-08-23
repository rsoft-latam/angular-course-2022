import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPrice',
})
export class CustomPricePipe implements PipeTransform {
  transform(value: any, moneyType: string, timeType?: string): unknown {
    return (
      value +
      ' ' +
      (moneyType === 'USD' ? '$' : 'Bs') +
      ' ' +
      (timeType ? 'por ' + timeType : '')
    );
  }
}
