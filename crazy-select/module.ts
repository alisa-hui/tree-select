import { TreeSelectDefaultOptions } from './Models/tree-select-default-options';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TreeSelectComponent } from './Components/tree-select.component';
import { TreeSelectItemComponent } from './Components/tree-select-item.component';
import { OffClickDirective } from './Directives/off-click.directive';
import { ItemPipe } from './pipe/item.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TreeSelectComponent,
    TreeSelectItemComponent,
    OffClickDirective,
    ItemPipe
  ],
  exports: [
    TreeSelectComponent
  ],
    providers:[
        TreeSelectDefaultOptions
    ]
})

export class NgxTreeSelectModule {
  static forRoot(options: TreeSelectDefaultOptions): ModuleWithProviders {
    return {
      ngModule: NgxTreeSelectModule,
      providers: [
        { provide: TreeSelectDefaultOptions, useValue: options }
      ]
    };
  }

}
