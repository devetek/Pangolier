import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-about",
  templateUrl: "./view.html",
  styleUrls: ["./style.css"]
})
export class AboutComponent implements OnInit {
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log("Hello About");
  }
}
