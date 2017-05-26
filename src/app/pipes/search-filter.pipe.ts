import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(array: Array<string>, args1: string, args2: string): Array<string> {  

    return args2 ? array.filter((item)=> item[args2].toLowerCase().indexOf(args1.toLowerCase()) != -1) : array;    
  
  }

}
