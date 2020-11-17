import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class BoolDisplayPasswordPipe implements PipeTransform {

  transform(password: string): string {
    let len = password.length;
    let mask = "";
    for(let n =0; n<len; n++){
      mask += '#'
    }
    return mask;
  }

}
