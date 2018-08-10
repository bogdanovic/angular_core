/* 3rd party libraries */
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NavComponent } from '@app/components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule
    };
  }

  public constructor(@Optional() @SkipSelf() parentModule: ComponentsModule) {
    if (parentModule) {
      throw new Error(
        'ComponentsModule is already loaded. Import it in the AppModule only');
    }
  }
}

