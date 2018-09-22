import config from "@app/config/app";
import { Component } from "@angular/core";

@Component({
  selector: "layout-footer",
  templateUrl: "./view.html"
})
export class FooterComponent {
  today: number = Date.now();
}
