import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeUser'
})
export class CapitalizeUserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
