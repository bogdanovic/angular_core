import { Component } from "@angular/core";
import { MetaService } from "ng2-meta";
import { environment } from "@env/environment.dev";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = environment.title;

  constructor(private metaService: MetaService) {}
}
