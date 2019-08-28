import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value:any) {
      return value.replace(/\w\S*/g, function(str){
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  }

}