import { Pipe, PipeTransform } from '@angular/core';
import { SelectableItem } from '../Models/selectable-item';

@Pipe({ name: 'ItemPipe' })
export class ItemPipe implements PipeTransform {
  transform(value: SelectableItem[]) {
    // ES6 array destructuring
    return value.filter(item => { return item.matchFilter; });
  }
}
