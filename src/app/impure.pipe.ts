import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(data: number[], args?: any): any {
    return data.filter(n => n%2 === 0);
  }

}