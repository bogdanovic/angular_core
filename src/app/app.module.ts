import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { MetaConfig, MetaModule } from "ng2-meta";
import { AppComponent } from "./app.component";
import { HomeComponent, Page1Component } from "@app/pages";
import { CoreModule } from "@app/core";
import { AppRoutingModule } from "@app/app-routing.module";
import { environment } from "@env/environment.dev";
import { ComponentsModule } from "@app/components/components.module";

const defaultMetaData: MetaConfig = {
  useTitleSuffix: true,
  defaults: {
    title: "Default title",
    titleSuffix: " | Site Name",
    "any:other": "arbitrary tag can be used",
    author: "Marek Bogdanovic",
    description: "Default Description",
    my_simple_test: "Default Description"
  }
};

@NgModule({
  declarations: [AppComponent, HomeComponent, Page1Component],
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
    ComponentsModule.forRoot(),

    // ServiceWorker status in project.
    environment.serviceWorker ? ServiceWorkerModule.register("/ngsw-worker.js", {}) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
