import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeDate'
})
export class RangeDatePipe implements PipeTransform {


  transform(value: any): any[] {
    if(typeof value == 'object'){
      console.log(value);
      return value ;
    }
    console.log(value?.split(','));
    return value?.split(',') ;
  }

}
