import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../modules/home/app";
import { AboutComponent } from "../modules/about/app";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent }
];

export const routing = RouterModule.forRoot(routes);
