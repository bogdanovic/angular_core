/* 3rd party libraries */
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    FormsModule,
    RouterModule,

    /* 3rd party components */
    // ...
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    /* 3rd party components */
    // ...

    /* our own custom components */
    NavComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }

  public constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only');
    }
  }
}

