import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
      CommonModule
    ],
  declarations: [

    ],
  exports: [
    ]
})
export class CrazySelectModule {

  /* optional: in case you need users to override your providers */
  // static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
  //   return {
  //     ngModule: CrazySelectModule,
  //     providers: configuredProviders
  //   };
  // }
}
