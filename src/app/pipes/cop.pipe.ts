import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cop'
})
export class CopPipe implements PipeTransform {

  transform(value: any): unknown {
    return '$'+(value*4700) + ' ' + 'COP';
  }

}
