import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upbConcat'
})
export class PipeTestPipe implements PipeTransform {
  transform(value: string, option: number): any {
    return value + '- soy pipe' + option * 10;
  }

}