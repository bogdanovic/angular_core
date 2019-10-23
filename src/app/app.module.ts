import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent, Page1Component, DefaultPageComponent } from '@app/pages';
import { CoreModule } from '@app/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { environment } from '@env/environment.dev';
import { ComponentsModule } from '@app/components/components.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, Page1Component, DefaultPageComponent],
  imports: [
    /**
     * Rule of thumb is to try to create features which don’t
     * depend on any other features just on services provided by
     * CoreModule and components provided by SharedModule.
     */
    BrowserModule.withServerTransition({appId: environment.appId}),
    CoreModule.forRoot(),
    AppRoutingModule.forRoot(),
    ComponentsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
