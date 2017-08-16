import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { SelectableItem } from '../Models/selectable-item';
import { SelectService } from '../Services/select.service';

@Component({
  selector: 'tree-select-item',
  templateUrl: './tree-select-item.component.html',
  styleUrls: ['./tree-select-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TreeSelectItemComponent {
  public get isOpen() {
    return this.item.isOpen;
  }

  @Input() onTouchedCallBack: () => void;

  @Input()
  public item: SelectableItem;

  public constructor(
    private svc: SelectService
  ) { }

  toggleOpen($event: any) {
    $event.stopPropagation();
    if (this.haveChildren) {
      this.item.isOpen = !this.item.isOpen;
    } else {
      this.select($event);
    }
  }

  get allowParentSelection(): boolean {
    return this.svc.Configuration.allowParentSelection;
  }

  get needCheckBox(): boolean {
    return this.svc.Configuration.isHierarchy() && this.svc.Configuration.allowMultiple;
  }

  public get haveChildren(): boolean {
    return this.item && this.item.children && this.item.children.length > 0;
  }

  public select($event: any): void {
    $event.stopPropagation();
    if (this.svc.Configuration.allowMultiple || !this.haveChildren || this.svc.Configuration.allowParentSelection) {
      this.svc.toggleItemSelection(this.item);
    }
    this.onTouchedCallBack();
  }

  public get filter(): string {
    return this.svc.Configuration.filter;
  }
}
