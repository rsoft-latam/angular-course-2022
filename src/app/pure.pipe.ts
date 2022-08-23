import { Pipe, PipeTransform, ɵNgModuleFactory } from '@angular/core';

@Pipe({
  name: 'pure',
  pure: true
})
export class PurePipe implements PipeTransform {

  transform(data: number[], args?: any): any {
    return data.filter(n => n%2 === 0);
  }

}