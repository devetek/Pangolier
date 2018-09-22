import config from "@app/config/app";
import { Component } from "@angular/core";

@Component({
  selector: "profile-devetek",
  templateUrl: "./container.html"
})
export class AppComponent {
  title: string;
  description: string;
  url: string;

  constructor() {
    this.title = config.title;
    this.description = config.description;
    this.url = config.host;
  }
}
