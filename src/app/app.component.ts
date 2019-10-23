import { Component } from '@angular/core';
import { environment } from '@env/environment.dev';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.title;

  constructor() {}
}
