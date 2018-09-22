import { Component } from "@angular/core";

@Component({
  selector: "devetek-app-profile",
  templateUrl: "./container.html"
})
export class AppComponent {
  title: string;
  description: string;
  url: string;

  constructor() {
    this.title = "DJancuk";
    this.description = "Youre full of the dJancukerz";
    this.url = "http://www.terpusat.com";
  }
}
