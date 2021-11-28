import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apprev'
})
export class ApprevPipe implements PipeTransform {

  transform(value: any, length:number): unknown {
    return value.split(' ').map((txt:string)=> txt[0]).join('').slice(0,length).toUpperCase();
  }

}
