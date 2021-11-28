import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeDate',
})
export class RangeDatePipe implements PipeTransform {
  transform(value: any): Date[] {
    if (value == null) {
      return [];
    }
    if (typeof value == 'object') {
      return value;
    } else {
      return value?.split(',');
    }
  }
}
