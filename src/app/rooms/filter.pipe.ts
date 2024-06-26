import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './rooms_details';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(rooms:Room[] | null, price:number): Room[] | null {
    if(!rooms){
      return null;
    }
    return rooms.filter(room => room.price >= price);
  }

}
