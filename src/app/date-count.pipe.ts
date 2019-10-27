import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  transform(value: any): any{
    if (value){
      const seconds =Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 20 ) 
      return "Just Now"
      const intervals = {
        "second" :1,
        "minute" :60,
        "hour":3600,
        "day":86400,
        "week":60800,
        "month":2592000,
        "year":31536000
      };
    
    let counter;
    for (const i in intervals){
      counter =Math.floor(seconds / intervals[i]);
      if (counter > 0)
      if (counter === 1){
        return counter + "" + "" + i + "ago";

      }
      else{
        return counter + "" + "" + i + "s ago"
      }
    }
    }
    return value;
     
  }

}
