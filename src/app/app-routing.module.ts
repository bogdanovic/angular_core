import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MetaGuard} from 'ng2-meta';
import {HomeComponent, Page1Component} from '@app/pages';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Home page',
        description: 'Description of the home page'
      }
    }
  },
  {
    path: 'page1',
    component: Page1Component,
    canActivate: [MetaGuard]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})


/**
 * Define publick path in app.
 */
export class AppRoutingModule {
  /**
   * Static forRoot() takes a service configuration object and returns a ModuleWithProviders used in {@link RouterModule}.
   * @returns {{ngModule: PublicPagesModule}}
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppRoutingModule
    };
  }

  public constructor(@Optional() @SkipSelf() parentModule: AppRoutingModule) {
    if (parentModule) {
      throw new Error(
        'AppRoutingModule is already loaded. Import it in the AppModule only');
    }
  }
}
