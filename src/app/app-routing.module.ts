import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent, Page1Component, DefaultPageComponent} from '@app/pages';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'default',
    component: DefaultPageComponent
  },
  {path: '**', redirectTo: 'default'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

/**
 * Define publick path in app.
 */
export class AppRoutingModule {
  /**
   * Static forRoot() takes a service configuration object and returns a ModuleWithProviders used in {@link RouterModule}.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppRoutingModule
    };
  }

  public constructor(
    @Optional()
    @SkipSelf()
      parentModule: AppRoutingModule
  ) {
    if (parentModule) {
      throw new Error(
        'AppRoutingModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
