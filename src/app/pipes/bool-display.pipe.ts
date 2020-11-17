import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(aBoolean: boolean, locale: string = "en"): string {
    if(locale == "fr") {
      return aBoolean ? 'Oui': 'Non'; 
    }
    return aBoolean ? 'YES': 'NO';
  }

}
