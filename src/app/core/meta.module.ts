import {NgModule, ModuleWithProviders, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DEFAULT_META_CONFIG, META_CONFIG_TOKEN, MetaConfig} from "@app/core/model/meta-config";
import {MetaGuard} from "@app/core/guard/meta.guard";
import {MetaService} from "@app/core/service/meta.service";

/**
 * Meta data module add support for generating meta data on the pages.
 * Every page can contain its own meta data.
 */
@NgModule({
  imports: [
    RouterModule
  ]
})
export class MetaModule {
  public static forRoot(metaConfig: MetaConfig = DEFAULT_META_CONFIG): ModuleWithProviders {
    return {
      ngModule: MetaModule,
      providers: [
        {provide: META_CONFIG_TOKEN, useValue: metaConfig},
        MetaGuard,
        MetaService
      ]
    };
  }

  public constructor(@Optional() @SkipSelf() parentModule: MetaModule) {
    if (parentModule) {
      throw new Error(
        'MetaModule is already loaded. Import it in the AppModule only');
    }
  }
}
