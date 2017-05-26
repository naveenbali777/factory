import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySort'
})
export class ArraySortPipe implements PipeTransform {

  transform(array: Array<string>, args1: string, args2: string): Array<string> {
    if(args2 == 'ASC'){
      array.sort((a: any, b: any) => {
        if ( a[args1] < b[args1] ){
          return -1;
        }else if( a[args1] > b[args1] ){
            return 1;
        }else{
          return 0; 
        }
      });
    }

    if(args2 == 'DESC'){
      array.sort((a: any, b: any) => {
        if ( a[args1] < b[args1] ){
          return 1;
        }else if( a[args1] > b[args1] ){
            return -1;
        }else{
          return 0; 
        }
      });
    }

    return array;
  }

}
