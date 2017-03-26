import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AppService
  ]
})
export class AppComponent {
  title = 'app works!';

  constructor(private appService: AppService) {
    appService.getTest().subscribe(res => {
      this.title = res.text();
    })
  }
}
