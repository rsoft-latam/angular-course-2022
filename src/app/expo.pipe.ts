import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upbExpo'
})
export class ExpoPipe implements PipeTransform {

  transform(value: number, expo: number, message: string): any {
    return Math.pow(value, expo) + message;
  }

}