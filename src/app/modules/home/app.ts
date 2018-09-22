import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-home",
  templateUrl: "./view.html",
  styleUrls: ["./style.css"]
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    console.log("Hello Home");
  }
}
