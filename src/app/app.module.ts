import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';

import {AppComponent} from './app.component';
import {HomeComponent, Page1Component} from '@app/pages';
import {CoreModule, MetaConfig, MetaModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {AppRoutingModule} from "@app/app-routing.module";
import {environment} from "@env/environment.dev";

const defaultMetaData: MetaConfig = {
  useTitleSuffix: true,
  defaults: {
    title: 'Default title',
    titleSuffix: ' | Site Name',
    'any:other': 'arbitrary tag can be used',
    author: 'Marek Bogdanovic',
    description: 'Default Description'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component
  ],
  imports: [
    /**
     * Rule of thumb is to try to create features which don’t
     * depend on any other features just on services provided by
     * CoreModule and components provided by SharedModule.
     */
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule.forRoot(),
    MetaModule.forRoot(defaultMetaData),
    SharedModule.forRoot(),

    // ServiceWorker status in project.
    environment.serviceWorker ? ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
